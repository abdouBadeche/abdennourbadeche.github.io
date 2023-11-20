(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-work-module"],{

/***/ "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js":
/*!******************************************************************!*\
  !*** ./node_modules/ng-image-slider/fesm2015/ng-image-slider.js ***!
  \******************************************************************/
/*! exports provided: NgImageSliderComponent, NgImageSliderModule, NgImageSliderService, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgImageSliderComponent", function() { return NgImageSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgImageSliderModule", function() { return NgImageSliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgImageSliderService", function() { return NgImageSliderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderCustomImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SliderLightboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgImageSliderService {
    constructor() { }
    /**
     * @param {?} str
     * @return {?}
     */
    isBase64(str) {
        /** @type {?} */
        var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
        return base64regex.test(str);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    base64FileExtension(str) {
        return str.substring("data:image/".length, str.indexOf(";base64"));
    }
}
NgImageSliderService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
NgImageSliderService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NEXT_ARROW_CLICK_MESSAGE = 'next';
/** @type {?} */
const PREV_ARROW_CLICK_MESSAGE = 'previous';
/** @type {?} */
const LIGHTBOX_NEXT_ARROW_CLICK_MESSAGE = 'lightbox next';
/** @type {?} */
const LIGHTBOX_PREV_ARROW_CLICK_MESSAGE = 'lightbox previous';
/** @type {?} */
const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
/** @type {?} */
const validFileExtensions = ['jpeg', 'jpg', 'gif', 'png'];
/** @type {?} */
const validVideoExtensions = ['mp4'];
class NgImageSliderComponent {
    /**
     * @param {?} cdRef
     * @param {?} platformId
     * @param {?} imageSliderService
     * @param {?} elRef
     */
    constructor(cdRef, platformId, imageSliderService, elRef
    // @Inject(ElementRef) private _elementRef: ElementRef
    ) {
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.imageSliderService = imageSliderService;
        this.elRef = elRef;
        // for slider
        this.sliderMainDivWidth = 0;
        this.imageParentDivWidth = 0;
        this.imageObj = [];
        this.ligthboxImageObj = [];
        this.totalImages = 0;
        this.leftPos = 0;
        this.effectStyle = 'all 1s ease-in-out';
        this.speed = 1; // default speed in second
        // default speed in second
        this.sliderPrevDisable = false;
        this.sliderNextDisable = false;
        this.slideImageCount = 1;
        this.sliderImageWidth = 205;
        this.sliderImageHeight = 200;
        this.sliderInnerHeight = 175;
        this.sliderImageSizeWithPadding = 211;
        this.autoSlideCount = 0;
        this.showArrowButton = true;
        this.textDirection = 'ltr';
        this.imageMargin = 3;
        this.infinite = false;
        this.imagePopup = true;
        this.images = [];
        this.videoAutoPlay = false;
        this.paginationShow = false;
        this.arrowKeyMove = true;
        // @Outputs
        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.arrowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lightboxArrowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentImageTitle = '';
        this.ligthboxShow = false;
        this.activeImageIndex = 0;
        this.visiableImageIndex = 1;
        this.lightboxNextDisable = false;
        this.lightboxPrevDisable = false;
        this.showImage = true;
    }
    // @inputs
    /**
     * @param {?} data
     * @return {?}
     */
    set imageSize(data) {
        if (data
            && typeof (data) === 'object') {
            if (data.hasOwnProperty('space') && typeof (data['space']) === 'number' && data['space'] > -1) {
                this.imageMargin = data['space'];
            }
            if (data.hasOwnProperty('width') && typeof (data['width']) === 'number') {
                this.sliderImageWidth = data['width'];
                this.sliderImageSizeWithPadding = data['width'] + (this.imageMargin * 2); // addeing padding with image width
            }
            if (data.hasOwnProperty('height') && typeof (data['height']) === 'number') {
                this.sliderImageHeight = data['height'];
                this.sliderInnerHeight = data['height'] - 30;
            }
        }
    }
    /**
     * @param {?} dir
     * @return {?}
     */
    set direction(dir) {
        if (dir) {
            this.textDirection = dir;
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set animationSpeed(data) {
        if (data
            && typeof (data) === 'number'
            && data >= 0.1
            && data <= 5) {
            this.speed = data;
            this.effectStyle = `all ${this.speed}s ease-in-out`;
        }
    }
    /**
     * @param {?} count
     * @return {?}
     */
    set slideImage(count) {
        if (count && typeof count === 'number') {
            this.slideImageCount = Math.round(count);
        }
    }
    /**
     * @param {?} count
     * @return {?}
     */
    set autoSlide(count) {
        if (count && typeof count === 'number' && count >= 1 && count <= 5) {
            this.autoSlideCount = Math.round(count) * 1000;
        }
    }
    /**
     * @param {?} flag
     * @return {?}
     */
    set showArrow(flag) {
        if (flag !== undefined && typeof flag === 'boolean') {
            this.showArrowButton = flag;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.setSliderWidth();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeyboardEvent(event) {
        if (event && event.key) {
            if (event.key.toLowerCase() === 'arrowright' && !this.ligthboxShow && this.arrowKeyMove) {
                this.next();
            }
            if (event.key.toLowerCase() === 'arrowleft' && !this.ligthboxShow && this.arrowKeyMove) {
                this.prev();
            }
            if (event.key.toLowerCase() === 'escape' && this.ligthboxShow) {
                this.close();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // @TODO: for future use
        // console.log(this._elementRef)
        // for slider
        if (this.infinite) {
            this.effectStyle = 'none';
            this.leftPos = -1 * this.sliderImageSizeWithPadding * this.slideImageCount;
            for (let i = 1; i <= this.slideImageCount; i++) {
                this.imageObj.unshift(this.imageObj[this.imageObj.length - i]);
            }
        }
    }
    // for slider
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setSliderWidth();
        this.cdRef.detectChanges();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.imageAutoSlide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.images
            && changes.images.hasOwnProperty('previousValue')
            && changes.images.hasOwnProperty('currentValue')
            && changes.images.previousValue != changes.images.currentValue) {
            this.setSliderImages(changes.images.currentValue);
        }
        if (changes && changes.imageSize) {
            /** @type {?} */
            const size = changes.imageSize;
            if (size
                && size.previousValue
                && size.currentValue
                && size.previousValue.width && size.previousValue.height
                && size.currentValue.width && size.currentValue.height
                && (size.previousValue.width !== size.currentValue.width
                    || size.previousValue.height !== size.currentValue.height)) {
                this.setSliderWidth();
            }
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.images
            && this.ligthboxImageObj
            && this.images.length !== this.ligthboxImageObj.length) {
            this.setSliderImages(this.images);
        }
    }
    /**
     * @param {?} imgObj
     * @return {?}
     */
    setSliderImages(imgObj) {
        if (imgObj && imgObj instanceof Array && imgObj.length) {
            this.imageObj = imgObj.map((/**
             * @param {?} img
             * @param {?} index
             * @return {?}
             */
            (img, index) => {
                img['index'] = index;
                return img;
            }));
            this.ligthboxImageObj = [...this.imageObj];
            this.totalImages = this.imageObj.length;
            this.imageParentDivWidth = imgObj.length * this.sliderImageSizeWithPadding;
            this.setSliderWidth();
        }
    }
    /**
     * @return {?}
     */
    setSliderWidth() {
        if (this.sliderMain && this.sliderMain.nativeElement && this.sliderMain.nativeElement.offsetWidth) {
            this.sliderMainDivWidth = this.sliderMain.nativeElement.offsetWidth;
            //this.sliderImageWidth = this.sliderMain.nativeElement.offsetWidth;
            //this.sliderImageSizeWithPadding = this.sliderMain.nativeElement.offsetWidth;
            this.imageParentDivWidth = this.imageObj.length * this.sliderImageSizeWithPadding;
        }
        if (this.imageDiv && this.imageDiv.nativeElement && this.imageDiv.nativeElement.offsetWidth) {
            this.leftPos = this.infinite ? -1 * this.sliderImageSizeWithPadding * this.slideImageCount : 0;
        }
        this.nextPrevSliderButtonDisable();
    }
    /**
     * @return {?}
     */
    fullView() {
        /** @type {?} */
        const currentIndex = Math.round((Math.abs(this.leftPos) + this.sliderImageWidth) / this.sliderImageWidth);
        this.imageOnClick(currentIndex - 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    imageOnClick(index) {
        if (this.imagePopup) {
            this.activeImageIndex = index;
            this.showLightbox();
        }
        this.imageClick.emit(index);
    }
    /**
     * @return {?}
     */
    imageAutoSlide() {
        if (this.infinite && this.autoSlideCount && !this.ligthboxShow) {
            this.autoSlideInterval = setInterval((/**
             * @return {?}
             */
            () => {
                this.next();
            }), this.autoSlideCount);
        }
    }
    /**
     * @return {?}
     */
    imageMouseEnterHandler() {
        if (this.infinite && this.autoSlideCount && this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    }
    /**
     * @return {?}
     */
    prev() {
        if (!this.sliderPrevDisable) {
            if (this.infinite) {
                this.infinitePrevImg();
            }
            else {
                this.prevImg();
            }
            this.arrowClick.emit(PREV_ARROW_CLICK_MESSAGE);
            this.sliderArrowDisableTeam();
            this.getVisiableIndex();
        }
    }
    /**
     * @return {?}
     */
    next() {
        if (!this.sliderNextDisable) {
            if (this.infinite) {
                this.infiniteNextImg();
            }
            else {
                this.nextImg();
            }
            this.arrowClick.emit(NEXT_ARROW_CLICK_MESSAGE);
            this.sliderArrowDisableTeam();
            this.getVisiableIndex();
        }
    }
    /**
     * @return {?}
     */
    prevImg() {
        if (0 >= this.leftPos + (this.sliderImageSizeWithPadding * this.slideImageCount)) {
            this.leftPos += this.sliderImageSizeWithPadding * this.slideImageCount;
        }
        else {
            this.leftPos = 0;
        }
    }
    /**
     * @return {?}
     */
    nextImg() {
        if ((this.imageParentDivWidth + this.leftPos) - this.sliderMainDivWidth > this.sliderImageSizeWithPadding * this.slideImageCount) {
            this.leftPos -= this.sliderImageSizeWithPadding * this.slideImageCount;
        }
        else if ((this.imageParentDivWidth + this.leftPos) - this.sliderMainDivWidth > 0) {
            this.leftPos -= (this.imageParentDivWidth + this.leftPos) - this.sliderMainDivWidth;
        }
    }
    /**
     * @return {?}
     */
    infinitePrevImg() {
        this.effectStyle = `all ${this.speed}s ease-in-out`;
        this.leftPos = 0;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.effectStyle = 'none';
            this.leftPos = -1 * this.sliderImageSizeWithPadding * this.slideImageCount;
            for (let i = 0; i < this.slideImageCount; i++) {
                this.imageObj.unshift(this.imageObj[this.imageObj.length - this.slideImageCount - 1]);
                this.imageObj.pop();
            }
        }), this.speed * 1000);
    }
    /**
     * @return {?}
     */
    infiniteNextImg() {
        this.effectStyle = `all ${this.speed}s ease-in-out`;
        this.leftPos = -2 * this.sliderImageSizeWithPadding * this.slideImageCount;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.effectStyle = 'none';
            for (let i = 0; i < this.slideImageCount; i++) {
                this.imageObj.push(this.imageObj[this.slideImageCount]);
                this.imageObj.shift();
            }
            this.leftPos = -1 * this.sliderImageSizeWithPadding * this.slideImageCount;
        }), this.speed * 1000);
    }
    /**
     * @return {?}
     */
    getVisiableIndex() {
        /** @type {?} */
        const currentIndex = Math.round((Math.abs(this.leftPos) + this.sliderImageWidth) / this.sliderImageWidth);
        if (this.imageObj[currentIndex - 1] && this.imageObj[currentIndex - 1]['index']) {
            this.visiableImageIndex = this.imageObj[currentIndex - 1]['index'];
        }
    }
    /**
     * Disable slider left/right arrow when image moving
     * @return {?}
     */
    sliderArrowDisableTeam() {
        this.sliderNextDisable = true;
        this.sliderPrevDisable = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.nextPrevSliderButtonDisable();
        }), this.speed * 1000);
    }
    /**
     * @return {?}
     */
    nextPrevSliderButtonDisable() {
        this.sliderNextDisable = false;
        this.sliderPrevDisable = false;
        if (!this.infinite) {
            if (this.imageParentDivWidth + this.leftPos <= this.sliderMainDivWidth) {
                this.sliderNextDisable = true;
            }
            if (this.leftPos >= 0) {
                this.sliderPrevDisable = true;
            }
        }
    }
    // for lightbox
    /**
     * @return {?}
     */
    showLightbox() {
        if (this.imageObj.length) {
            this.imageMouseEnterHandler();
            this.ligthboxShow = true;
            this.elRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.ligthboxShow = false;
        this.elRef.nativeElement.ownerDocument.body.style.overflow = '';
        this.imageAutoSlide();
    }
    /**
     * Swipe event handler
     * Reference from https://stackoverflow.com/a/44511007/2067646
     * @param {?} e
     * @param {?} when
     * @return {?}
     */
    swipe(e, when) {
        /** @type {?} */
        const coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
        /** @type {?} */
        const time = new Date().getTime();
        if (when === 'start') {
            this.swipeCoord = coord;
            this.swipeTime = time;
        }
        else if (when === 'end') {
            /** @type {?} */
            const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
            /** @type {?} */
            const duration = time - this.swipeTime;
            if (duration < 1000 //
                && Math.abs(direction[0]) > 30 // Long enough
                && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
                if (direction[0] < 0) {
                    this.next();
                }
                else {
                    this.prev();
                }
            }
        }
    }
}
NgImageSliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng-image-slider',
                template: "<div class=\"ng-image-slider\" [ngStyle]=\"{'height':sliderImageHeight+'px'}\">\n    <div class=\"ng-image-slider-container\">\n        <div class=\"main\"\n            [ngStyle]=\"{'height':sliderImageHeight+'px'}\"\n            #sliderMain>\n            <div class=\"main-inner\"\n                *ngIf=\"imageObj.length\"\n                [ngClass]=\"{'with-ng-main-pagination': paginationShow}\"\n                [ngStyle]=\"{'margin-left':leftPos+'px', 'width':imageParentDivWidth+'px', 'transition': effectStyle}\"\n                (touchstart)=\"swipe($event, 'start')\"\n                (touchend)=\"swipe($event, 'end')\">\n                <div [ngClass]=\"{'image-popup': imagePopup}\"\n                    [ngStyle]=\"{'width':sliderImageWidth+'px', 'margin-left':imageMargin+'px', 'margin-right':imageMargin+'px'}\"\n                    class=\"img-div\"\n                    *ngFor=\"let img of imageObj; let i = index\"\n                    (click)=\"imageOnClick(img.index)\"\n                    (mouseenter)=\"imageMouseEnterHandler()\"\n                    (mouseleave)=\"imageAutoSlide()\"\n                    #imageDiv>\n                    <custom-img [imageUrl]=\"img.thumbImage || img.posterImage || img.video\"\n                        [isVideo]=\"!!(img.posterImage || img.video)\"\n                        [alt]=\"img.alt || img.title || ''\"\n                        [title]=\"img.title || img.alt || ''\"\n                        [direction]=\"textDirection\">\n                    </custom-img>\n                    <div [dir]=\"textDirection\" class=\"caption\" *ngIf=\"img.title\">{{ img.title }}</div>\n                </div>\n            </div>\n            <div class=\"ng-image-slider-error\"\n                *ngIf=\"!imageObj.length\">\n                Provided images array not valid.\n            </div>\n            <a *ngIf=\"showArrowButton && imageObj.length > 1\"\n                [ngClass]=\"{'disable': sliderPrevDisable}\"\n                class=\"prev icons prev-icon\"\n                (click)=\"prev()\"\n                (mouseenter)=\"imageMouseEnterHandler()\"\n                (mouseleave)=\"imageAutoSlide()\">&lsaquo;</a>\n            <a *ngIf=\"showArrowButton && imageObj.length > 1\"\n                [ngClass]=\"{'disable': sliderNextDisable}\"\n                class=\"next icons next-icon\"\n                (click)=\"next()\"\n                (mouseenter)=\"imageMouseEnterHandler()\"\n                (mouseleave)=\"imageAutoSlide()\">&rsaquo;</a>\n        </div>\n        <div *ngIf=\"imageObj.length && paginationShow\" class=\"ng-main-pagination\">{{visiableImageIndex}} of {{totalImages}}</div>\n    </div>\n</div>\n<slider-lightbox *ngIf=\"ligthboxShow\"\n    [paginationShow]=\"paginationShow\"\n    [arrowKeyMove]=\"arrowKeyMove\"\n    [images]=\"ligthboxImageObj\"\n    [infinite]=\"infinite\"\n    [animationSpeed]=\"speed\"\n    [currentImageIndex]=\"activeImageIndex\"\n    [showImage]=\"showImage\"\n    [direction]=\"textDirection\"\n    [videoAutoPlay]=\"videoAutoPlay\"\n    (close)=\"close()\">\n</slider-lightbox>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".ng-image-slider{display:inline-block;position:relative;width:100%}.ng-image-slider .ng-image-slider-container .main{overflow:hidden;position:absolute;height:200px;width:100%}.ng-image-slider .ng-image-slider-container .main .main-inner{width:1760px;padding:0;height:100%}.ng-image-slider .ng-image-slider-container .main .main-inner.with-ng-main-pagination{height:calc(100% - 30px)}.ng-image-slider .ng-image-slider-container .main .main-inner .full-screen{background:url(data:image/png;base64,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) 0 0/40px 40px no-repeat;position:absolute;z-index:8;display:block;height:40px;width:40px;top:4px;right:8px;opacity:.4;transition:.5s ease-in-out;cursor:pointer}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:205px;height:100%;float:left;margin-right:3px;margin-left:3px;position:relative;border-radius:10px}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div.image-popup{cursor:pointer}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div img,.ng-image-slider .ng-image-slider-container .main .main-inner .img-div video{position:absolute;top:0;bottom:0;margin:auto;height:100%;width:100%;left:0;right:0;border-radius:5px 5px 0 0}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div .youtube-icon{background:url(data:image/png;base64,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) center center/140px 80px no-repeat;position:absolute;z-index:6;display:block;height:100%;width:100%;top:0;left:0}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div .caption{position:absolute;bottom:0;padding:5px;color:#fff;background-image:linear-gradient(to right,rgba(0,0,0,.1),rgba(0,0,0,.25),rgba(0,0,0,.5),rgba(0,0,0,.25),rgba(0,0,0,.1));width:100%;text-align:center;box-sizing:border-box}.ng-image-slider .ng-image-slider-container .main .main-inner:hover .full-screen{transition:.5s ease-in-out;opacity:1}.ng-image-slider .ng-image-slider-container .main .next,.ng-image-slider .ng-image-slider-container .main .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;outline:0;width:35px;height:35px;font-size:35px;line-height:30px;z-index:8;transition:.5s ease-in-out;text-align:center}.ng-image-slider .ng-image-slider-container .main .next:hover,.ng-image-slider .ng-image-slider-container .main .prev:hover{background-color:#d4cdcd;background-position:-192px -415px}.ng-image-slider .ng-image-slider-container .main .next.disable,.ng-image-slider .ng-image-slider-container .main .prev.disable{color:#bbb;background-color:#fff;opacity:.5;cursor:default}.ng-image-slider .ng-image-slider-container .main .prev{left:10px}.ng-image-slider .ng-image-slider-container .main .prev:hover{background-position:-194px -450px}.ng-image-slider .ng-image-slider-container .ng-main-pagination{background-color:inherit;color:inherit;position:absolute;height:30px;width:calc(100% - 6px);text-align:center;bottom:0;font-size:16px;line-height:30px;border-radius:0 0 5px 5px;margin:0 3px}.ng-image-slider .ng-image-slider-error{color:red;text-align:center;height:100%;top:50%;position:relative}@media (max-width:1199px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:170px;max-width:100%}}@media (max-width:991px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:297px;max-width:100%}}@media (max-width:768px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:247px;max-width:100%}}@media (max-width:576px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:350px;max-width:100%}}.ng-image-slider-lightbox{position:fixed;z-index:1031;background-color:rgba(0,0,0,.6);width:100%;height:100%;top:0;overflow:hidden;transition:.5s ease-in-out;left:0;text-align:center}.ng-image-slider-lightbox .lightbox-wrapper{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#1f1f1f;transition:.5s;display:flex;justify-content:center;align-items:center}.ng-image-slider-lightbox .lightbox-wrapper.ng-ligthbox-pagination{height:calc(100% - 30px)}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div{width:100%;height:100%;border:1px solid rgba(0,0,0,.35);position:relative;overflow:hidden;background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .pre-loader{background-color:inherit}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .lightbox-image-main,.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image{height:100%}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-lightbox-show{display:block;transition:display .5s linear}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-lightbox-hide{display:none;transition:display .5s linear}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main img{max-width:100%;max-height:100%!important;position:absolute;z-index:11;top:0;bottom:0;margin:auto;left:0;right:0}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main iframe,.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main video{top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;border:0}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .caption{position:absolute;z-index:11;top:0;margin:auto;padding:5px;color:#fff;background-color:rgba(0,0,0,.35);max-width:100%;left:0;right:0}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .next,.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;width:38px;height:38px;font-size:35px;z-index:12;line-height:30px;outline:0;color:#000;transition:.3s ease-in-out}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .next:hover,.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .prev:hover{background-color:#d4cdcd}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .next.disable,.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .prev.disable{color:#bbb;background-color:#fff}.ng-image-slider-lightbox .lightbox-wrapper .lightbox-div .prev{left:10px}.ng-image-slider-lightbox .lightbox-wrapper .close{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:center center;background-size:32px;position:absolute;top:10px;right:10px;color:#000;background-color:#fff;padding:0;opacity:1;border-radius:50%;height:36px;width:36px;z-index:12;cursor:pointer;transition:.2s}.ng-image-slider-lightbox .lightbox-wrapper.error-msg{background-image:none}.ng-image-slider-lightbox .invalid-msg{color:#fff;font-size:18px;position:absolute;top:45%;left:45%}.ng-image-slider-lightbox .popup-pagination{background-color:#1f1f1f;color:#fff;position:absolute;height:30px;width:100%;text-align:center;bottom:0;font-size:16px;line-height:30px}@media (max-width:768px){.ng-image-slider-lightbox .lightbox-wrapper{width:100%;height:100%}.ng-image-slider-lightbox .lightbox-wrapper.error-msg{background-image:none}}"]
            }] }
];
/** @nocollapse */
NgImageSliderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: NgImageSliderService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NgImageSliderComponent.propDecorators = {
    sliderMain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sliderMain', { static: false },] }],
    imageDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['imageDiv', { static: false },] }],
    imageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imagePopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slideImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    videoAutoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    paginationShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowKeyMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    arrowClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    lightboxArrowClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] }],
    handleKeyboardEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const youtubeRegExp$1 = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
/** @type {?} */
const validFileExtensions$1 = ['jpeg', 'jpg', 'gif', 'png'];
/** @type {?} */
const validVideoExtensions$1 = ['mp4'];
class SliderCustomImageComponent {
    /**
     * @param {?} imageSliderService
     * @param {?} sanitizer
     */
    constructor(imageSliderService, sanitizer) {
        this.imageSliderService = imageSliderService;
        this.sanitizer = sanitizer;
        this.YOUTUBE = 'youtube';
        this.IMAGE = 'image';
        this.VIDEO = 'video';
        this.fileUrl = '';
        this.fileExtension = '';
        this.type = this.IMAGE;
        // @inputs
        this.showVideo = false;
        this.videoAutoPlay = false;
        this.isVideo = false;
        this.alt = '';
        this.title = '';
        this.direction = 'ltr';
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set imageUrl(url) {
        if (url && typeof (url) === 'string') {
            this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            ;
            this.fileExtension = url.replace(/^.*\./, '');
            if (this.imageSliderService.base64FileExtension(url)
                && (validFileExtensions$1.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1
                    || validVideoExtensions$1.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1)) {
                this.fileExtension = this.imageSliderService.base64FileExtension(url);
            }
            // verify for youtube url
            /** @type {?} */
            const match = url.match(youtubeRegExp$1);
            if (match && match[2].length === 11) {
                if (this.showVideo) {
                    this.type = this.YOUTUBE;
                    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${'//www.youtube.com/embed/'}${match[2]}${this.videoAutoPlay ? '?autoplay=1&enablejsapi=1' : '?autoplay=0&enablejsapi=1'}`);
                }
                else {
                    this.type = this.IMAGE;
                    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://img.youtube.com/vi/${match[2]}/0.jpg`);
                }
            }
            else if (this.fileExtension && validFileExtensions$1.indexOf(this.fileExtension.toLowerCase()) > -1) {
                this.type = this.IMAGE;
            }
            else if (this.fileExtension && validVideoExtensions$1.indexOf(this.fileExtension.toLowerCase()) > -1) {
                this.type = this.VIDEO;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
SliderCustomImageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'custom-img',
                template: "<div *ngIf=\"fileUrl\" class=\"custom-image-main\">\n    <img class=\"image\"\n        *ngIf=\"type === IMAGE && fileUrl\"\n        [src]=\"fileUrl\"\n        [alt]=\"alt\"\n        [title]=\"title\">\n    <iframe class=\"youtube\"\n        *ngIf=\"type === YOUTUBE && fileUrl\"\n        [src]=\"fileUrl\"\n        frameborder=\"0\"\n        allowfullscreen></iframe>\n    <video class=\"video\"\n        [autoplay]=\"videoAutoPlay\"\n        *ngIf=\"type === VIDEO\"\n        type=\"video/mp4\"\n        controls\n        controlsList=\"nodownload\">\n        <source [src]=\"fileUrl\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div [dir]=\"direction\" *ngIf=\"!fileUrl\" class=\"invalid-msg\">Invalid file format</div>\n    <span *ngIf=\"type === YOUTUBE || type === VIDEO || isVideo\" class=\"youtube-icon\"></span>\n</div>"
            }] }
];
/** @nocollapse */
SliderCustomImageComponent.ctorParameters = () => [
    { type: NgImageSliderService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SliderCustomImageComponent.propDecorators = {
    showVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    videoAutoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    alt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const youtubeRegExp$2 = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
/** @type {?} */
const validFileExtensions$2 = ['jpeg', 'jpg', 'gif', 'png'];
/** @type {?} */
const validVideoExtensions$2 = ['mp4'];
class SliderLightboxComponent {
    /**
     * @param {?} cdRef
     * @param {?} sanitizer
     * @param {?} imageSliderService
     * @param {?} document
     */
    constructor(cdRef, sanitizer, imageSliderService, document) {
        this.cdRef = cdRef;
        this.sanitizer = sanitizer;
        this.imageSliderService = imageSliderService;
        this.document = document;
        this.YOUTUBE = 'youtube';
        this.IMAGE = 'image';
        this.VIDEO = 'video';
        this.INVALID = 'invalid';
        this.totalImages = 0;
        this.nextImageIndex = -1;
        this.popupWidth = 1200;
        this.marginLeft = 0;
        this.lightboxPrevDisable = false;
        this.lightboxNextDisable = false;
        this.showLoading = true;
        this.effectStyle = 'none';
        this.speed = 1; // default speed in second
        // default speed in second
        this.title = '';
        // @Inputs
        this.videoAutoPlay = false;
        this.currentImageIndex = 0;
        this.direction = 'ltr';
        this.images = [];
        this.paginationShow = false;
        this.infinite = false;
        this.arrowKeyMove = true;
        // @Output
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set animationSpeed(data) {
        if (data
            && typeof (data) === 'number'
            && data >= 0.1
            && data <= 5) {
            this.speed = data;
        }
    }
    /* @Output() prevImage = new EventEmitter<any>(); */
    /* @Output() nextImage = new EventEmitter<any>(); */
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeyboardEvent(event) {
        if (event && event.key && this.arrowKeyMove) {
            if (event.key.toLowerCase() === 'arrowright') {
                this.nextImageLightbox();
            }
            if (event.key.toLowerCase() === 'arrowleft') {
                this.prevImageLightbox();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.currentImageIndex
            && changes.currentImageIndex.hasOwnProperty('previousValue')
            && changes.currentImageIndex.hasOwnProperty('currentValue')
            && changes.currentImageIndex.previousValue != changes.images.currentValue) {
            this.nextPrevDisable();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.getImageData();
        this.cdRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.resetState();
    }
    /**
     * @return {?}
     */
    closeLightbox() {
        this.close.emit();
    }
    /**
     * @return {?}
     */
    prevImageLightbox() {
        if (this.infinite && this.currentImageIndex == 0) {
            this.currentImageIndex = this.images.length;
        }
        if (this.currentImageIndex > 0 && !this.lightboxPrevDisable) {
            this.currentImageIndex--;
            //this.prevImage.emit();
            this.getImageData();
            this.nextPrevDisable();
        }
    }
    /**
     * @return {?}
     */
    nextImageLightbox() {
        if (this.infinite && this.currentImageIndex == this.images.length - 1) {
            this.currentImageIndex = -1;
        }
        if (this.currentImageIndex < this.images.length - 1 && !this.lightboxNextDisable) {
            this.currentImageIndex++;
            //this.nextImage.emit();
            this.getImageData();
            this.nextPrevDisable();
        }
    }
    /**
     * @return {?}
     */
    nextPrevDisable() {
        this.lightboxNextDisable = true;
        this.lightboxPrevDisable = true;
        //setTimeout(() => {
        this.applyButtonDisableCondition();
        //}, this.speed * 1000);
    }
    /**
     * @return {?}
     */
    applyButtonDisableCondition() {
        this.lightboxNextDisable = false;
        this.lightboxPrevDisable = false;
        if (!this.infinite && this.currentImageIndex >= this.images.length - 1) {
            this.lightboxNextDisable = true;
        }
        if (!this.infinite && this.currentImageIndex <= 0) {
            this.lightboxPrevDisable = true;
        }
    }
    /**
     * @return {?}
     */
    getImageData() {
        if (this.images
            && this.images.length
            && typeof (this.currentImageIndex) === 'number'
            && this.currentImageIndex !== undefined
            && this.images[this.currentImageIndex]
            && (this.images[this.currentImageIndex]['image'] || this.images[this.currentImageIndex]['video'])) {
            this.title = this.images[this.currentImageIndex]['title'] || '';
            this.totalImages = this.images.length;
            for (let iframeI in this.document.getElementsByTagName("iframe")) {
                if (this.document.getElementsByTagName("iframe")[iframeI] && this.document.getElementsByTagName("iframe")[iframeI].contentWindow) {
                    this.document.getElementsByTagName("iframe")[iframeI].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            }
            for (let videoI in this.document.getElementsByTagName("video")) {
                if (this.document.getElementsByTagName("video")[videoI] && this.document.getElementsByTagName("video")[videoI].pause) {
                    this.document.getElementsByTagName("video")[videoI].pause();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    resetState() {
        this.images = [];
    }
}
SliderLightboxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'slider-lightbox',
                template: "<div class=\"ng-image-slider-lightbox\">\n    <div class=\"lightbox-wrapper\">\n        <a class=\"close\" (click)=\"closeLightbox()\"></a>\n        <div class=\"lightbox-div\" #lightboxDiv>\n            <div class=\"pre-loader\">\n                <div class=\"mnml-spinner\"></div>\n            </div>\n\n            <!-- <img *ngIf=\"type === IMAGE && fileUrl\" [ngClass]=\"{'show': showImage, 'hide': !showImage}\" [src]=\"fileUrl\">\n            <iframe *ngIf=\"type === YOUTUBE && fileUrl\"\n                [ngClass]=\"{'show': showImage, 'hide': !showImage}\"\n                [src]=\"fileUrl\"\n                frameborder=\"0\" allowfullscreen></iframe>\n            <video [autoplay]=\"videoAutoPlay\" [ngClass]=\"{'show': showImage, 'hide': !showImage}\" *ngIf=\"type === VIDEO && fileUrl\" controls  controlsList=\"nodownload\">\n                <source [dir]=\"direction\" [src]=\"fileUrl\" type=\"video/mp4\"> Your browser does not support the video tag.\n            </video> -->\n\n            <div class=\"lightbox-image-main\">\n                <div class=\"lightbox-image\"\n                    *ngFor=\"let img of images; let i = index\"\n                    [ngClass]=\"{'ng-image-lightbox-show': i == currentImageIndex, 'ng-image-lightbox-hide': i != currentImageIndex}\">\n                    <custom-img\n                        *ngIf=\"i == currentImageIndex\"\n                        [imageUrl]=\"img.image || img.video\"\n                        [isVideo]=\"!!(img.posterImage || img.video)\"\n                        [videoAutoPlay]=\"videoAutoPlay\"\n                        [alt]=\"img.alt || img.title || ''\"\n                        [title]=\"img.title || img.alt || ''\"\n                        [showVideo]=\"true\"\n                        [direction]=\"direction\">\n                    </custom-img>\n                </div>\n            </div>\n            <div [dir]=\"direction\" [ngClass]=\"{'show': showImage, 'hide': !showImage}\" class=\"caption\">{{ title }}</div>\n            <a *ngIf=\"totalImages > 1\" [ngClass]=\"{'disable': lightboxPrevDisable}\" class=\"prev icons prev-icon\" (click)=\"prevImageLightbox()\">&lsaquo;</a>\n            <a *ngIf=\"totalImages > 1\" [ngClass]=\"{'disable': lightboxNextDisable}\" class=\"next icons next-icon\" (click)=\"nextImageLightbox()\">&rsaquo;</a>\n        </div>\n    </div>\n    <div *ngIf=\"paginationShow\" class=\"popup-pagination\">{{currentImageIndex}} of {{totalImages}}</div>\n</div>"
            }] }
];
/** @nocollapse */
SliderLightboxComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: NgImageSliderService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
SliderLightboxComponent.propDecorators = {
    videoAutoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    currentImageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    paginationShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowKeyMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    handleKeyboardEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgImageSliderModule {
}
NgImageSliderModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    NgImageSliderComponent,
                    SliderCustomImageComponent,
                    SliderLightboxComponent
                ],
                providers: [
                    NgImageSliderService
                ],
                exports: [NgImageSliderComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng-image-slider.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-work/new-work.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-work/new-work.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"all_work_space\">\n  <div class=\"one_cat_space\" id=\"cat\" *ngIf=\"projects.length\">\n\n    <div class=\"projects_space\" *ngIf=\"projects.length\">\n        <div class=\"projects_slider_space\" >\n\n          <div class=\"projects_commande_space\" #sliderProducts >\n            <div class=\"projects_space_content row ml-0\">\n                <app-project *ngFor=\"let project of projects\" [project]=\"project\"></app-project>\n            </div>\n          </div>\n          <div class=\"toolbar_commande_space_row_left toolbar_commande_space_rows\" (click)=\"onSlide('left')\" *ngIf=\"slider_left | async\">\n            <span class=\"material-icons\">\n              chevron_left\n              </span>\n          </div>\n          <div class=\"toolbar_commande_space_row_right toolbar_commande_space_rows\" (click)=\"onSlide('right')\" *ngIf=\"slider_right  | async\">\n            <span class=\"material-icons\">\n              chevron_right\n              </span>\n          </div>\n        </div>\n    </div>\n  </div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-work/project/project.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-work/project/project.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"one_project_space mat-elevation-z2\" *ngIf=\"project\" (click)='goToProductPage()'>\n  <div class=\"project_img\">\n\n      <div class=\"loader_space d-flex justify-content-center align-items-center\"  >\n        <div class=\"spinner-grow text-light\" role=\"status\">\n          <span class=\"sr-only\"></span>\n        </div>\n        <div class=\"spinner-grow text-light\"  role=\"status\">\n          <span class=\"sr-only\">Loading</span>\n        </div>\n        <div class=\"spinner-grow text-light\" role=\"status\">\n          <span class=\"sr-only\"></span>\n        </div>\n      </div>\n      <img  [src]=\"project.imgs_path+project.background_desk\" alt=\"\" >\n\n    </div>\n\n\n    <div class=\"project_info\">\n      <div class=\"project_name\"  >\n        Name\n      </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"all_work_space row\">\n\n\n      <div class=\"one_card_div card_p card_r card20 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{proximity.imgs_path + proximity.background}}\" alt=\"\" class=\"one_card_background\" style=\"width: 100%; height: auto; left: 0; top: 50%; transform: translateY(-50%);\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(proximity)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{proximity.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-node \"></i>\n              <img src=\"assets/imgs/flutter.png\" alt=\"\" style=\"width: 30px ; height : auto ; \">\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"one_card_div card_p card_r card17 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{npub.imgs_path + npub.background}}\" alt=\"\" class=\"one_card_background\" style=\"width: 100%; height: auto; left: 0; top: 50%; transform: translateY(-50%);\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(npub)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{npub.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-node \"></i>\n              <i class=\"fab fa-react\"></i>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"one_card_div card_p card_r card18 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{punchword.imgs_path + punchword.background}}\" alt=\"\" class=\"one_card_background\" style=\"width: 100%; height: auto; left: 0; top: 50%; transform: translateY(-50%);\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(punchword)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{punchword.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fa fa-fire\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-react\"></i>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n\n      <div class=\"one_card_div card_p card_r card5 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{capa_dash.imgs_path + capa_dash.background}}\" alt=\"\" class=\"one_card_background\" style=\"width: auto; height: 100%; top: 0; left: 50%; transform: translateX(-50%);\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(capa_dash)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{capa_dash.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-bootstrap\"></i>\n              <br>\n              <i class=\"fab fa-laravel\"></i>\n              <i class=\"fab fa-php\"></i>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n\n      <div class=\"one_card_div card_p card_r card8 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n          <div class=\"one_card_back\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"{{capa.imgs_path + capa.background}}\" alt=\"\" class=\"one_card_background\" style=\"width: auto; height: 100%; top: 0; left: 50%; transform: translateX(-50%);\">\n            <div class=\"project_detail\">\n              <div class=\"project_view_btn\" (click)='OnViewWork(capa)'>\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"project_title\">{{capa.name}}</div>\n              <div class=\"project_tech\">\n                <i class=\"fab fa-js    \"></i>\n                <i class=\"fab fa-angular\"></i>\n                <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-bootstrap\"></i>\n                <br>\n                <i class=\"fab fa-laravel\"></i>\n                <i class=\"fab fa-php\"></i>\n\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"one_card_div card_p card_r card7 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n          <div class=\"one_card_back\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"{{cnas.imgs_path + cnas.background}}\" alt=\"\" class=\"one_card_background\">\n            <div class=\"project_detail\">\n              <div class=\"project_view_btn\" (click)='OnViewWork(cnas)'>\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"project_title\">{{cnas.name}}</div>\n              <div class=\"project_tech\">\n                <img src=\"assets/imgs/flutter.png\" alt=\"\" style=\"width: 30px ; height : auto ; \">\n\n              </div>\n            </div>\n          </div>\n      </div>\n\n\n\n\n      <div class=\"one_card_div card_p card_r card16 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n          <div class=\"one_card_back\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"{{dpgr.imgs_path + dpgr.background}}\" alt=\"\" class=\"one_card_background\">\n            <div class=\"project_detail\">\n              <div class=\"project_view_btn\" (click)='OnViewWork(dpgr)'>\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"project_title\">{{dpgr.name}}</div>\n              <div class=\"project_tech\">\n                <i class=\"fab fa-js    \"></i>\n                <i class=\"fab fa-angular\"></i>\n                <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-bootstrap\"></i>\n                <br>\n                <i class=\"fab fa-laravel\"></i>\n                <i class=\"fab fa-php\"></i>\n\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"one_card_div card_p  card9 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"one_card_back\">\n          <div class=\"all_this_card2\">\n            <i class=\"material-icons\">cloud_upload</i>\n            <div class=\"content_this_card\">\n              I own more projects , <br>  I will upload them soon .\n            </div>\n          </div>\n\n        </div>\n\n\n      </div>\n\n\n      <div class=\"one_card_div card_p card_r card13 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{fullhouse_dash.imgs_path + fullhouse_dash.background}}\" alt=\"\" class=\"one_card_background\" style=\"width: auto; height: 100%; top: 0; left: 50%; transform: translateX(-50%);\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(fullhouse_dash)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{fullhouse_dash.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-bootstrap\"></i>\n              <br>\n              <i class=\"fab fa-laravel\"></i>\n              <i class=\"fab fa-php\"></i>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"one_card_div card_p card_r card14 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{fullhouse.imgs_path + fullhouse.background}}\" alt=\"\" class=\"one_card_background\" style=\"width: auto; height: 100%; top: 0; left: 50%; transform: translateX(-50%);\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(fullhouse)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{fullhouse.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-bootstrap\"></i>\n              <br>\n              <i class=\"fab fa-laravel\"></i>\n              <i class=\"fab fa-php\"></i>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div class=\"one_card_div card_p card12 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <div class=\"all_this_card\">\n            <i class=\"material-icons\">code</i>\n            <div class=\"content_this_card\">\n              I have a Large experience in Backend development , <br>\n              I have worked in many projects .\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"one_card_div card_p card_r card10 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n          <div class=\"one_card_back\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"{{megadist.imgs_path + megadist.background}}\" alt=\"\" class=\"one_card_background\" style=\"width: auto; height: 100%; top: 0; left: 50%; transform: translateX(-50%);\">\n            <div class=\"project_detail\">\n              <div class=\"project_view_btn\" (click)='OnViewWork(megadist)'>\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"project_title\">{{megadist.name}}</div>\n              <div class=\"project_tech\">\n                <i class=\"fab fa-js    \"></i>\n                <i class=\"fab fa-angular\"></i>\n                <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-bootstrap\"></i>\n                <br>\n                <i class=\"fab fa-laravel\"></i>\n                <i class=\"fab fa-php\"></i>\n\n              </div>\n            </div>\n          </div>\n      </div>\n\n\n      <div class=\"one_card_div card_p card_r card11 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n          <div class=\"one_card_back\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"{{webdoc.imgs_path + webdoc.background}}\" alt=\"\" class=\"one_card_background\">\n            <div class=\"project_detail\">\n              <div class=\"project_view_btn\" (click)='OnViewWork(webdoc)'>\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"project_title\">{{webdoc.name}}</div>\n              <div class=\"project_tech\">\n                <i class=\"fab fa-js    \"></i>\n                <i class=\"fab fa-angular\"></i>\n                <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-bootstrap\"></i>\n                <br>\n                <i class=\"fab fa-laravel\"></i>\n                <i class=\"fab fa-php\"></i>\n\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"one_card_div card_p card_r card15 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n          <div class=\"one_card_back\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"{{makepub.imgs_path + makepub.background}}\" alt=\"\" class=\"one_card_background\">\n            <div class=\"project_detail\">\n              <div class=\"project_view_btn\" (click)='OnViewWork(makepub)'>\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"project_title\">{{makepub.name}}</div>\n              <div class=\"project_tech\">\n                <i class=\"fab fa-js    \"></i>\n                <i class=\"fab fa-angular\"></i>\n                <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-bootstrap\"></i>\n                <br>\n                <i class=\"fab fa-laravel\"></i>\n                <i class=\"fab fa-php\"></i>\n\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"one_card_div  card_p card_r card3 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card \">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{sits.imgs_path + sits.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(sits)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{sits.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <br>\n              <i class=\"fab fa-php\"></i>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"one_card_div card_p card_r card1 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n          <div class=\"one_card_back\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"{{fournishop.imgs_path + fournishop.background}}\" alt=\"\" class=\"one_card_background\">\n            <div class=\"project_detail\">\n              <div class=\"project_view_btn\" (click)='OnViewWork(fournishop)'>\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"project_title\">{{fournishop.name}}</div>\n              <div class=\"project_tech\">\n                <i class=\"fab fa-js    \"></i>\n                <i class=\"fab fa-angular\"></i>\n                <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-bootstrap\"></i>\n                <br>\n                <i class=\"fab fa-laravel\"></i>\n                <i class=\"fab fa-php\"></i>\n\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"one_card_div card_p card_r card2 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{esi.imgs_path + esi.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(esi)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{esi.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <br>\n              <i class=\"fab fa-laravel\"></i>\n              <i class=\"fab fa-php\"></i>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div class=\"one_card_div card_p card_r card4 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n          <img src=\"{{dictili.imgs_path + dictili.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(dictili)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{dictili.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <br>\n              <i class=\"fab fa-php\"></i>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"one_card_div card_p card_r card6 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{sfsd.imgs_path + sfsd.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(sfsd)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{sfsd.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <br>\n              <i class=\"fab fa-php\"></i>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n<div class=\"fake_cards row\">\n  <div class=\"{{'one_card_div card_f card'+item}}\" *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]\" >\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"img_viewer\">\n  <div class=\"closer\"> <i class=\"fa fa-times\" (click)='OnCloseSlider()' aria-hidden=\"true\"></i>  </div>\n  <div class=\"img_div\">\n    <div *ngFor=\"let image of selected_work.imgs ; let i = index ;\" id=\"i{{i}}\"  class=\"one_image\" [ngStyle]=\"{'left': 100*i+'%' }\" >\n      <div class=\"image_bg\" [ngStyle]=\"{'background-image' : 'url(../../'+selected_work.imgs_path+image.name+')'}\"></div>\n      <mat-progress-spinner color=\"accent\" mode=\"indeterminate\" diameter='50' strokeWidth='5'> </mat-progress-spinner>\n      <!-- <img  *ngIf=\"!image.type\" src=\"{{selected_work.imgs_path+image.name}}\" alt=\"\" [ngClass]=\"{'heighted_pic' : !image.width}\" > -->\n      <div  class=\"img_one_pro\" *ngIf=\"!image.type\" [ngStyle]=\"{'background-image' : 'url('+selected_work.imgs_path+image.name+')' }\">\n\n      </div>\n      <video *ngIf=\"image.type && image.type == 1\" controls=\"true\" src=\"{{image.name}}\"></video>\n      <!-- pour spl e-commerce -->\n      <iframe *ngIf=\"image.type && image.type == 2 \" class=\"iframe_video\"  src=\"https://www.youtube.com/embed/1OiMXiJCslw?si=o7Etj8v_CB4SHX1C\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n    </div>\n\n  </div>\n  <div class=\"slide_left\" *ngIf=\"current_img > 0 \"> <i class=\"fa fa-angle-left\" (click)= 'OnSlideLeft()' aria-hidden=\"true\"></i> </div>\n\n  <div class=\"slide_right\"  *ngIf=\"current_img < selected_work.imgs.length - 1  \"> <i class=\"fa fa-angle-right\" (click)= 'OnSlideRight()' aria-hidden=\"true\"></i> </div>\n\n  <div class=\"control_div\">\n\n    <div class=\"images\">\n      <div class=\"one_img\" id=\"p{{i}}\" *ngFor=\"let image of selected_work.imgs ; let i = index ;\" [ngStyle]=\"{'width': 'calc(100% /'+ selected_work.imgs.length +')' }\" >\n        <div (click)='OnClickBord(i)' class=\"img_bord\"></div>\n      </div>\n      <div class=\"one_img_selected\"  [ngStyle]=\"{'width': 'calc(100% /'+ selected_work.imgs.length +')' }\" > <div class=\"img_bord\"></div> </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/new-work/new-work.component.scss":
/*!**************************************************!*\
  !*** ./src/app/new-work/new-work.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".all_work_space {\n  width: 100%;\n  min-height: 100%;\n}\n\n::ng-deep .one_cat_space .one_project_space {\n  width: 200px !important;\n}\n\n.one_cat_space {\n  width: 100%;\n  margin-left: 0%;\n  font-family: font6;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 15px 0 !important;\n}\n\n.one_cat_space .cat_title {\n  font-size: 20px;\n  font-weight: bold;\n  color: #272727;\n  text-align: center;\n  padding: 0;\n}\n\n.one_cat_space .cat_title p {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: auto;\n  background-color: #f6f6f6;\n  margin-top: -30px !important;\n}\n\n.one_cat_space .projects_space {\n  width: 100%;\n  padding: 5px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.one_cat_space .projects_space .projects_slider_space {\n  position: relative;\n  width: 100%;\n  left: 0%;\n  height: 290px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n.one_cat_space .projects_space .projects_slider_space .projects_commande_space {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 290px;\n  overflow-x: auto;\n}\n\n.one_cat_space .projects_space .projects_slider_space .projects_commande_space .projects_space_content {\n  height: 100%;\n  min-width: calc(100%);\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  overflow: hidden;\n  transition: 500ms;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.one_cat_space .projects_space .projects_slider_space .toolbar_commande_space_rows {\n  position: absolute;\n  height: 50px;\n  width: 50px;\n  overflow: hidden;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 100;\n}\n\n.one_cat_space .projects_space .projects_slider_space .toolbar_commande_space_rows span {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  font-size: 40px;\n  line-height: 40px;\n  color: #ffffff;\n  transition: 0.5s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #8e8e8e;\n  cursor: pointer;\n}\n\n.one_cat_space .projects_space .projects_slider_space .toolbar_commande_space_rows span:hover {\n  color: #d2026f;\n  font-size: 50px;\n}\n\n.one_cat_space .projects_space .projects_slider_space .toolbar_commande_space_row_left {\n  left: 0;\n}\n\n.one_cat_space .projects_space .projects_slider_space .toolbar_commande_space_row_left span {\n  border-radius: 0px 15px 15px 0px;\n}\n\n.one_cat_space .projects_space .projects_slider_space .toolbar_commande_space_row_right {\n  right: 0;\n}\n\n.one_cat_space .projects_space .projects_slider_space .toolbar_commande_space_row_right span {\n  border-radius: 15px 0px 0 15px;\n}\n\n.one_cat_space .cat_footer {\n  height: 40px;\n  font-size: 12px;\n  color: #797979;\n  border-top: 1px solid #f1f1f1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.one_cat_space .cat_footer span {\n  cursor: pointer;\n}\n\n.one_cat_space .cat_footer span:hover {\n  color: #3c3636;\n}\n\n.one_cat_space .no_project {\n  min-height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #cacaca;\n  font-size: 13px;\n}\n\n.projects_commande_space::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n\n.projects_commande_space {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldnNoYWRvdy9Eb3dubG9hZHMvcG9ydGVmb2xpby1tYXN0ZXIvc3JjL2FwcC9uZXctd29yay9uZXctd29yay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV3LXdvcmsvbmV3LXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQWEsZ0JBQUE7QUNDZjs7QURDQTtFQUNFLHVCQUFBO0FDRUY7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDR0o7O0FERkk7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDR047O0FERE07RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ0dSOztBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNDUjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURDUTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBVjs7QURLTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNIUjs7QURJUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRlY7O0FES1E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0hWOztBRE1NO0VBQ0UsT0FBQTtBQ0pSOztBREtRO0VBQ0UsZ0NBQUE7QUNIVjs7QURPTTtFQUNFLFFBQUE7QUNMUjs7QURNUTtFQUNFLDhCQUFBO0FDSlY7O0FEU0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDUE47O0FEUVE7RUFDSSxlQUFBO0FDTlo7O0FEUVE7RUFDSSxjQUFBO0FDTlo7O0FEVUk7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNSTjs7QURhQTtFQUNFLGFBQUE7QUNWRjs7QURhQSw0Q0FBQTs7QUFDQTtFQUNFLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQXdCLFlBQUE7QUNSMUIiLCJmaWxlIjoic3JjL2FwcC9uZXctd29yay9uZXctd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFsbF93b3JrX3NwYWNlIHtcbiAgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDEwMCU7XG59XG46Om5nLWRlZXAgLm9uZV9jYXRfc3BhY2UgLm9uZV9wcm9qZWN0X3NwYWNlIHtcbiAgd2lkdGggOiAyMDBweCAhaW1wb3J0YW50O1xufVxuLm9uZV9jYXRfc3BhY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICBmb250LWZhbWlseTogZm9udDYgO1xuICAgIG1hcmdpbi10b3A6IDIwcHggO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHggO1xuICAgIHBhZGRpbmc6IDE1cHggMCAhaW1wb3J0YW50O1xuICAgIC5jYXRfdGl0bGUge1xuXG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjMjcyNzI3O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgcCB7XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2IDtcbiAgICAgICAgbWFyZ2luLXRvcCA6IC0zMHB4ICFpbXBvcnRhbnRcblxuICAgICAgfVxuICAgIH1cbiAgICAucHJvamVjdHNfc3BhY2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuXG5cbi5wcm9qZWN0c19zbGlkZXJfc3BhY2Uge1xuICAgIHBvc2l0aW9uIDogcmVsYXRpdmUgO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDAlO1xuICAgIGhlaWdodDogMjkwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5wcm9qZWN0c19jb21tYW5kZV9zcGFjZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyOTBweCA7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIC5wcm9qZWN0c19zcGFjZV9jb250ZW50IHtcbiAgICAgICAgICBoZWlnaHQgOiAxMDAlIDtcbiAgICAgICAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgLy8gb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICB0cmFuc2l0aW9uIDogNTAwbXMgO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggO1xuXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRvb2xiYXJfY29tbWFuZGVfc3BhY2Vfcm93cyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4IDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MiAxNDIgMTQyKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgfVxuICAgICAgICBzcGFuOmhvdmVyIHtcbiAgICAgICAgICBjb2xvciA6ICNkMjAyNmYgO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRvb2xiYXJfY29tbWFuZGVfc3BhY2Vfcm93X2xlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweCA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRvb2xiYXJfY29tbWFuZGVfc3BhY2Vfcm93X3JpZ2h0IHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDAgMTVweCA7XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbiAgICB9XG4gICAgLmNhdF9mb290ZXIge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvciA6ICAjM2MzNjM2IDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ub19wcm9qZWN0IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjY2FjYWNhO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgfVxuICB9XG5cbi5wcm9qZWN0c19jb21tYW5kZV9zcGFjZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbi5wcm9qZWN0c19jb21tYW5kZV9zcGFjZSB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cbn1cbiIsIi5hbGxfd29ya19zcGFjZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm9uZV9jYXRfc3BhY2UgLm9uZV9wcm9qZWN0X3NwYWNlIHtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vbmVfY2F0X3NwYWNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbiAgZm9udC1mYW1pbHk6IGZvbnQ2O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4IDAgIWltcG9ydGFudDtcbn1cbi5vbmVfY2F0X3NwYWNlIC5jYXRfdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzI3MjcyNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuLm9uZV9jYXRfc3BhY2UgLmNhdF90aXRsZSBwIHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIG1hcmdpbi10b3A6IC0zMHB4ICFpbXBvcnRhbnQ7XG59XG4ub25lX2NhdF9zcGFjZSAucHJvamVjdHNfc3BhY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5vbmVfY2F0X3NwYWNlIC5wcm9qZWN0c19zcGFjZSAucHJvamVjdHNfc2xpZGVyX3NwYWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMCU7XG4gIGhlaWdodDogMjkwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ub25lX2NhdF9zcGFjZSAucHJvamVjdHNfc3BhY2UgLnByb2plY3RzX3NsaWRlcl9zcGFjZSAucHJvamVjdHNfY29tbWFuZGVfc3BhY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjkwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4ub25lX2NhdF9zcGFjZSAucHJvamVjdHNfc3BhY2UgLnByb2plY3RzX3NsaWRlcl9zcGFjZSAucHJvamVjdHNfY29tbWFuZGVfc3BhY2UgLnByb2plY3RzX3NwYWNlX2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogY2FsYygxMDAlKTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiA1MDBtcztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5vbmVfY2F0X3NwYWNlIC5wcm9qZWN0c19zcGFjZSAucHJvamVjdHNfc2xpZGVyX3NwYWNlIC50b29sYmFyX2NvbW1hbmRlX3NwYWNlX3Jvd3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5vbmVfY2F0X3NwYWNlIC5wcm9qZWN0c19zcGFjZSAucHJvamVjdHNfc2xpZGVyX3NwYWNlIC50b29sYmFyX2NvbW1hbmRlX3NwYWNlX3Jvd3Mgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vbmVfY2F0X3NwYWNlIC5wcm9qZWN0c19zcGFjZSAucHJvamVjdHNfc2xpZGVyX3NwYWNlIC50b29sYmFyX2NvbW1hbmRlX3NwYWNlX3Jvd3Mgc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiAjZDIwMjZmO1xuICBmb250LXNpemU6IDUwcHg7XG59XG4ub25lX2NhdF9zcGFjZSAucHJvamVjdHNfc3BhY2UgLnByb2plY3RzX3NsaWRlcl9zcGFjZSAudG9vbGJhcl9jb21tYW5kZV9zcGFjZV9yb3dfbGVmdCB7XG4gIGxlZnQ6IDA7XG59XG4ub25lX2NhdF9zcGFjZSAucHJvamVjdHNfc3BhY2UgLnByb2plY3RzX3NsaWRlcl9zcGFjZSAudG9vbGJhcl9jb21tYW5kZV9zcGFjZV9yb3dfbGVmdCBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XG59XG4ub25lX2NhdF9zcGFjZSAucHJvamVjdHNfc3BhY2UgLnByb2plY3RzX3NsaWRlcl9zcGFjZSAudG9vbGJhcl9jb21tYW5kZV9zcGFjZV9yb3dfcmlnaHQge1xuICByaWdodDogMDtcbn1cbi5vbmVfY2F0X3NwYWNlIC5wcm9qZWN0c19zcGFjZSAucHJvamVjdHNfc2xpZGVyX3NwYWNlIC50b29sYmFyX2NvbW1hbmRlX3NwYWNlX3Jvd19yaWdodCBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMCAxNXB4O1xufVxuLm9uZV9jYXRfc3BhY2UgLmNhdF9mb290ZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm9uZV9jYXRfc3BhY2UgLmNhdF9mb290ZXIgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vbmVfY2F0X3NwYWNlIC5jYXRfZm9vdGVyIHNwYW46aG92ZXIge1xuICBjb2xvcjogIzNjMzYzNjtcbn1cbi5vbmVfY2F0X3NwYWNlIC5ub19wcm9qZWN0IHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2NhY2FjYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJvamVjdHNfY29tbWFuZGVfc3BhY2U6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4ucHJvamVjdHNfY29tbWFuZGVfc3BhY2Uge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIC8qIElFIGFuZCBFZGdlICovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/new-work/new-work.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-work/new-work.component.ts ***!
  \************************************************/
/*! exports provided: NewWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWorkComponent", function() { return NewWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NewWorkComponent = class NewWorkComponent {
    constructor(router) {
        this.router = router;
        this.subs = [];
        this.slider_left = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.slider_right = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.selected_lang = 'Fr';
        this.projects = [
            {
                id: 1,
                name: "Fournishop",
                imgs_path: 'assets/imgs/fournishop/',
                background_desk: "test.png",
                background_mobile: '',
                imgs: [
                    {
                        name: "0.png",
                        width: true
                    },
                    {
                        name: "1.png",
                        width: true
                    },
                    {
                        name: "2.png",
                        width: true
                    },
                    {
                        name: "3.png",
                        width: true
                    },
                    {
                        name: "4.png",
                        width: true
                    },
                    {
                        name: "5.png",
                        width: true
                    }
                ]
            },
            {
                id: 2,
                name: "Fournishop",
                imgs_path: 'assets/imgs/fournishop/',
                background_desk: "test.png",
                background_mobile: '',
                imgs: [
                    {
                        name: "0.png",
                        width: true
                    },
                    {
                        name: "1.png",
                        width: true
                    },
                    {
                        name: "2.png",
                        width: true
                    },
                    {
                        name: "3.png",
                        width: true
                    },
                    {
                        name: "4.png",
                        width: true
                    },
                    {
                        name: "5.png",
                        width: true
                    }
                ]
            },
            {
                id: 3,
                name: "Fournishop",
                imgs_path: 'assets/imgs/fournishop/',
                background_desk: "test.png",
                background_mobile: '',
                imgs: [
                    {
                        name: "0.png",
                        width: true
                    },
                    {
                        name: "1.png",
                        width: true
                    },
                    {
                        name: "2.png",
                        width: true
                    },
                    {
                        name: "3.png",
                        width: true
                    },
                    {
                        name: "4.png",
                        width: true
                    },
                    {
                        name: "5.png",
                        width: true
                    }
                ]
            },
            {
                id: 4,
                name: "Fournishop",
                imgs_path: 'assets/imgs/fournishop/',
                background_desk: "test.png",
                background_mobile: '',
                imgs: [
                    {
                        name: "0.png",
                        width: true
                    },
                    {
                        name: "1.png",
                        width: true
                    },
                    {
                        name: "2.png",
                        width: true
                    },
                    {
                        name: "3.png",
                        width: true
                    },
                    {
                        name: "4.png",
                        width: true
                    },
                    {
                        name: "5.png",
                        width: true
                    }
                ]
            },
            {
                id: 4,
                name: "Fournishop",
                imgs_path: 'assets/imgs/fournishop/',
                background_desk: "test.png",
                background_mobile: '',
                imgs: [
                    {
                        name: "0.png",
                        width: true
                    },
                    {
                        name: "1.png",
                        width: true
                    },
                    {
                        name: "2.png",
                        width: true
                    },
                    {
                        name: "3.png",
                        width: true
                    },
                    {
                        name: "4.png",
                        width: true
                    },
                    {
                        name: "5.png",
                        width: true
                    }
                ]
            },
            {
                id: 4,
                name: "Fournishop",
                imgs_path: 'assets/imgs/fournishop/',
                background_desk: "test.png",
                background_mobile: '',
                imgs: [
                    {
                        name: "0.png",
                        width: true
                    },
                    {
                        name: "1.png",
                        width: true
                    },
                    {
                        name: "2.png",
                        width: true
                    },
                    {
                        name: "3.png",
                        width: true
                    },
                    {
                        name: "4.png",
                        width: true
                    },
                    {
                        name: "5.png",
                        width: true
                    }
                ]
            },
        ];
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(".workSidenav").addClass('activeItem');
        const resize_sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize')
            .subscribe((event) => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".projects_commande_space").scrollLeft(0);
            this.verify_slider();
        });
        this.subs.push(resize_sub);
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".projects_space_content").ready(() => {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#cat .projects_commande_space").scroll((event) => {
                    this.verify_slider();
                });
                this.verify_slider();
            });
        }, 500);
    }
    ngOnDestroy() {
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }
    onSwipe(event) {
        console.log(event);
    }
    onSlide(row) {
        if (row == "right") {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#cat .projects_commande_space").scrollLeft(jquery__WEBPACK_IMPORTED_MODULE_2__("#cat .projects_commande_space").scrollLeft() + 220);
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#cat  .projects_commande_space").scrollLeft(jquery__WEBPACK_IMPORTED_MODULE_2__("#cat .projects_commande_space").scrollLeft() - 220);
        }
        this.verify_slider();
        // let left = $("#cat  .projects_space_content").position().left ;
        // let right = ( left + $("#cat  .projects_space_content").width()  ) - $("#cat  .projects_commande_space").width()
        // if(row == 'right') {
        //   if(right  >= 200) {
        //     // $("#cat  .projects_space_content").css({"left" : (left-200)+"px"}) ;
        //     this.slider_left = true ;
        //   }else {
        //     // $("#cat  .projects_space_content").css({"left" : (left-right-50)+"px"}) ;
        //     this.slider_right = false
        //     if($("#cat  .projects_space_content").width()+50 > $("#cat  .projects_commande_space").width()) {
        //       this.slider_left = true ;
        //     }else {
        //       this.slider_right = false ;
        //       this.slider_left = false ;
        //     }
        //   }
        // }
        // else if(row == "left" ) {
        //   if(Math.abs(left)  >= 200) {
        //     // $("#cat  .projects_space_content").css({"left" : (left+200)+"px"}) ;
        //     this.slider_right = true ;
        //   }else {
        //     // $("#cat  .projects_space_content").css({"left" : 50+"px"}) ;
        //     this.slider_left = false
        //     if($("#cat  .projects_space_content").width()+50 > $("#cat  .projects_commande_space").width()) {
        //       this.slider_right = true ;
        //     }else {
        //       this.slider_left = false ;
        //       this.slider_right = false ;
        //   }
        // }
        // }
    }
    verify_slider() {
        let left = jquery__WEBPACK_IMPORTED_MODULE_2__("#cat  .projects_commande_space").scrollLeft();
        let right = jquery__WEBPACK_IMPORTED_MODULE_2__("#cat  .projects_space_content").width() + 20 - jquery__WEBPACK_IMPORTED_MODULE_2__("#cat  .projects_commande_space").width() - jquery__WEBPACK_IMPORTED_MODULE_2__("#cat  .projects_commande_space").scrollLeft();
        // console.log((event.target as Element).scroll);
        console.log(left);
        console.log(right);
        this.slider_left.next(left > 10);
        this.slider_right.next(right > 10);
        // console.log(this.slider_left.value);
        // console.log(this.slider_right.value);
    }
};
NewWorkComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sliderProducts', { static: true })
], NewWorkComponent.prototype, "sliderProducts", void 0);
NewWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-work',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-work/new-work.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-work.component.scss */ "./src/app/new-work/new-work.component.scss")).default]
    })
], NewWorkComponent);



/***/ }),

/***/ "./src/app/new-work/project/project.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/new-work/project/project.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .mat-form-field-infix {\n  padding: 3px !important;\n  font-size: 14px;\n  transform: translateY(-3px);\n}\n\n.one_project_space {\n  position: relative;\n  max-width: 500px;\n  min-width: 120px;\n  width: 100% !important;\n  height: 100% !important;\n  margin-left: 10px;\n  margin-right: 10px;\n  overflow: hidden;\n}\n\n.one_project_space .project_img {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n}\n\n.one_project_space .project_img .sold_item {\n  position: absolute;\n  z-index: 3;\n  top: 20px;\n  left: 5px;\n  width: 40px;\n  height: 40px;\n  background-color: #d2026f;\n  color: white;\n  line-height: 40px;\n  text-align: center;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.one_project_space .project_img .loader_space {\n  position: absolute;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.one_project_space .project_img .loader_space span {\n  font-size: 9px !important;\n}\n\n.one_project_space .project_img img {\n  position: absolute;\n  width: 100%;\n  height: auto;\n  left: 0;\n  top: calc(50%);\n  transform: translateY(-50%);\n  z-index: 2;\n}\n\n.one_project_space .project_img .project_actions {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  background-color: #f15f3e;\n  color: white;\n  height: 40px;\n  width: 100%;\n  direction: ltr !important;\n}\n\n.one_project_space .project_img .project_actions div {\n  display: flex;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n}\n\n.one_project_space .project_img .project_actions div span {\n  cursor: pointer;\n}\n\n.one_project_space .project_img .project_actions .project_fav span:hover {\n  color: #d2026f;\n}\n\n.one_project_space .project_img .project_actions .project_shop span:hover {\n  color: #3c3636;\n}\n\n.one_project_space .project_img .project_actions .project_in_shop {\n  color: #3c3636;\n}\n\n.one_project_space .project_img .project_actions.in_shop {\n  background-color: #5d5d5d;\n}\n\n.one_project_space .project_info {\n  text-align: center;\n}\n\n.one_project_space .project_info .project_name {\n  display: block;\n  /* justify-content: center; */\n  font-size: 16px;\n  height: 20px;\n  width: 100%;\n  padding: 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  /* word-wrap: break-word; */\n  white-space: nowrap;\n}\n\n.one_project_space .project_info .project_price {\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  color: #272727;\n  font-weight: bold;\n  text-align: left;\n  padding-left: 10px;\n  padding-right: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.one_project_space .project_info .sold_price {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #272727;\n}\n\n.one_project_space:hover {\n  box-shadow: 0px 2px 5px 0px #585858;\n  cursor: pointer;\n}\n\n.hidden_panier, .panier_changer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 70px;\n  width: 40px;\n  top: 0;\n  z-index: 1021;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.hidden_panier span, .panier_changer span {\n  font-size: 20px;\n}\n\n@media screen and (max-width: 400px) {\n  .hidden_panier span, .panier_changer span {\n    font-size: 22px;\n  }\n}\n\n.hidden_panier {\n  background-color: whitesmoke;\n  justify-content: start;\n}\n\n.panier_changer {\n  z-index: 1022;\n  height: auto;\n}\n\n.number-input input[type=number] {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldnNoYWRvdy9Eb3dubG9hZHMvcG9ydGVmb2xpby1tYXN0ZXIvc3JjL2FwcC9uZXctd29yay9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ldy13b3JrL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FDREY7O0FERUU7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURHTTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNEVjs7QURJTTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUFXLFFBQUE7RUFDWCxnQ0FBQTtBQ0RWOztBREVVO0VBQ0kseUJBQUE7QUNBZDs7QURJTTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQVMsY0FBQTtFQUNULDJCQUFBO0VBQ0EsVUFBQTtBQ0RWOztBRElNO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDRlY7O0FER1U7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNEZDs7QURFYztFQUNJLGVBQUE7QUNBbEI7O0FESVU7RUFDSSxjQUFBO0FDRmQ7O0FES1U7RUFDSSxjQUFBO0FDSGQ7O0FETVU7RUFDSSxjQUFBO0FDSmQ7O0FET007RUFDSSx5QkFBQTtBQ0xWOztBRFVFO0VBQ0ksa0JBQUE7QUNSTjs7QURTTTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ1BWOztBRFVNO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1JWOztBRFdNO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ1RWOztBRGNBO0VBQ00sbUNBQUE7RUFDQSxlQUFBO0FDWE47O0FEY0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNYRjs7QURZRTtFQUNJLGVBQUE7QUNWTjs7QURZRTtFQUNJO0lBQ0ksZUFBQTtFQ1ZSO0FBQ0Y7O0FEY0E7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0FDWEY7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ1pGOztBRGdCQTtFQUNFLGtDQUFBO0FDYkYiLCJmaWxlIjoic3JjL2FwcC9uZXctd29yay9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcblxuICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG59XG5cbi5vbmVfcHJvamVjdF9zcGFjZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLnByb2plY3RfaW1nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIC8vIGJvcmRlciA6IDFweCBzb2xpZCAjZWRlZGVkIDtcbiAgICAgIC5zb2xkX2l0ZW0ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMjAyNmY7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICAubG9hZGVyX3NwYWNlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgbGVmdDogNTAlOyB0b3A6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMDsgdG9wOiBjYWxjKDUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtIDogdHJhbnNsYXRlWSgtNTAlKSA7XG4gICAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgfVxuICAgICAgLnByb2plY3RfYWN0aW9ucyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEgOTUgNjIpO1xuICAgICAgICAgIGNvbG9yIDogd2hpdGUgO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0ciAhaW1wb3J0YW50O1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcm9qZWN0X2ZhdiBzcGFuOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3IgOiAjZDIwMjZmIDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvamVjdF9zaG9wIHNwYW46aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvciA6ICMzYzM2MzYgO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcm9qZWN0X2luX3Nob3Age1xuICAgICAgICAgICAgICBjb2xvciA6ICMzYzM2MzYgO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5wcm9qZWN0X2FjdGlvbnMuaW5fc2hvcCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkNWQ1ZCA7XG4gICAgICB9XG4gIH1cblxuXG4gIC5wcm9qZWN0X2luZm8ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgICAgIC5wcm9qZWN0X25hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAvKiB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7ICovXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgLnByb2plY3RfcHJpY2Uge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICMyNzI3Mjc7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIC5zb2xkX3ByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgY29sb3I6ICMyNzI3Mjc7XG4gICAgICB9XG4gIH1cbn1cblxuLm9uZV9wcm9qZWN0X3NwYWNlOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDBweCAjNTg1ODU4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbi5oaWRkZW5fcGFuaWVyICwgLnBhbmllcl9jaGFuZ2Vye1xuICBwb3NpdGlvbiA6IGZpeGVkIDtcbiAgdG9wOiAwIDtcbiAgbGVmdCA6IDAgO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMjEgO1xuICBkaXNwbGF5IDogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemUgOiAyMnB4IDtcbiAgICAgIH1cbiAgfVxufVxuXG4uaGlkZGVuX3BhbmllciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbn1cblxuLnBhbmllcl9jaGFuZ2VyIHtcbiAgei1pbmRleDogMTAyMjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi5udW1iZXItaW5wdXQgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiIsIjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG59XG5cbi5vbmVfcHJvamVjdF9zcGFjZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub25lX3Byb2plY3Rfc3BhY2UgLnByb2plY3RfaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vbmVfcHJvamVjdF9zcGFjZSAucHJvamVjdF9pbWcgLnNvbGRfaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjAyNmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm9uZV9wcm9qZWN0X3NwYWNlIC5wcm9qZWN0X2ltZyAubG9hZGVyX3NwYWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm9uZV9wcm9qZWN0X3NwYWNlIC5wcm9qZWN0X2ltZyAubG9hZGVyX3NwYWNlIHNwYW4ge1xuICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xufVxuLm9uZV9wcm9qZWN0X3NwYWNlIC5wcm9qZWN0X2ltZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHRvcDogY2FsYyg1MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDI7XG59XG4ub25lX3Byb2plY3Rfc3BhY2UgLnByb2plY3RfaW1nIC5wcm9qZWN0X2FjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTVmM2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlyZWN0aW9uOiBsdHIgIWltcG9ydGFudDtcbn1cbi5vbmVfcHJvamVjdF9zcGFjZSAucHJvamVjdF9pbWcgLnByb2plY3RfYWN0aW9ucyBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vbmVfcHJvamVjdF9zcGFjZSAucHJvamVjdF9pbWcgLnByb2plY3RfYWN0aW9ucyBkaXYgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vbmVfcHJvamVjdF9zcGFjZSAucHJvamVjdF9pbWcgLnByb2plY3RfYWN0aW9ucyAucHJvamVjdF9mYXYgc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiAjZDIwMjZmO1xufVxuLm9uZV9wcm9qZWN0X3NwYWNlIC5wcm9qZWN0X2ltZyAucHJvamVjdF9hY3Rpb25zIC5wcm9qZWN0X3Nob3Agc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiAjM2MzNjM2O1xufVxuLm9uZV9wcm9qZWN0X3NwYWNlIC5wcm9qZWN0X2ltZyAucHJvamVjdF9hY3Rpb25zIC5wcm9qZWN0X2luX3Nob3Age1xuICBjb2xvcjogIzNjMzYzNjtcbn1cbi5vbmVfcHJvamVjdF9zcGFjZSAucHJvamVjdF9pbWcgLnByb2plY3RfYWN0aW9ucy5pbl9zaG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkNWQ1ZDtcbn1cbi5vbmVfcHJvamVjdF9zcGFjZSAucHJvamVjdF9pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm9uZV9wcm9qZWN0X3NwYWNlIC5wcm9qZWN0X2luZm8gLnByb2plY3RfbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC8qIHdvcmQtd3JhcDogYnJlYWstd29yZDsgKi9cbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5vbmVfcHJvamVjdF9zcGFjZSAucHJvamVjdF9pbmZvIC5wcm9qZWN0X3ByaWNlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzI3MjcyNztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ub25lX3Byb2plY3Rfc3BhY2UgLnByb2plY3RfaW5mbyAuc29sZF9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjMjcyNzI3O1xufVxuXG4ub25lX3Byb2plY3Rfc3BhY2U6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAwcHggIzU4NTg1ODtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGlkZGVuX3BhbmllciwgLnBhbmllcl9jaGFuZ2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAyMTtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGlkZGVuX3BhbmllciBzcGFuLCAucGFuaWVyX2NoYW5nZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5oaWRkZW5fcGFuaWVyIHNwYW4sIC5wYW5pZXJfY2hhbmdlciBzcGFuIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cblxuLmhpZGRlbl9wYW5pZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4ucGFuaWVyX2NoYW5nZXIge1xuICB6LWluZGV4OiAxMDIyO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5udW1iZXItaW5wdXQgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/new-work/project/project.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/new-work/project/project.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectComponent = class ProjectComponent {
    constructor() {
        this.subs = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }
    goToProductPage() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('project')
], ProjectComponent.prototype, "project", void 0);
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-work/project/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.scss */ "./src/app/new-work/project/project.component.scss")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/work/work.component.scss":
/*!******************************************!*\
  !*** ./src/app/work/work.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  margin-left: 0;\n}\n\n.all_work_space {\n  width: 100%;\n  min-height: 100%;\n}\n\n.one_card_div {\n  position: relative;\n  height: 400px;\n  min-width: 220px;\n  transform-style: preserve-3d;\n  transition: transform 1s;\n}\n\n.one_card_div .one_card {\n  position: relative;\n  height: 350px;\n  width: 200px;\n  top: 25px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 5px;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.one_card_div .one_card .one_card_front {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-image: url('back_card.png');\n  background-size: contain;\n  background-color: white;\n  overflow: hidden;\n}\n\n.one_card_div .one_card .one_card_front .backgrounder {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.55);\n  border: 1px solid #dddddd;\n  border-radius: 20px;\n}\n\n.one_card_div .one_card .one_card_front img {\n  position: absolute;\n  width: 100px;\n  height: auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-filter: drop-shadow(0px 0px 3px black);\n          filter: drop-shadow(0px 0px 3px black);\n  display: none;\n}\n\n.one_card_div .one_card_back {\n  position: absolute;\n  height: 350px;\n  width: 200px;\n  top: 25px;\n  left: 50%;\n  border-radius: 5px;\n  background-color: white;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: translateX(-50%) rotateY(180deg);\n  overflow: hidden;\n  border: 1px solid #dddddd;\n  border-radius: 20px;\n  z-index: 2;\n}\n\n.one_card_div .one_card_back mat-progress-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.one_card_div .one_card_back mat-progress-bar .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #d1d0d0 !important;\n}\n\n.one_card_div .one_card_back .one_card_background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: none;\n}\n\n.one_card_div .one_card_back .project_detail {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.72);\n  opacity: 0;\n  transition: ease-in 0.2s;\n}\n\n.one_card_div .one_card_back .project_detail .project_view_btn {\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  top: 150px;\n  left: 0px;\n  line-height: 50px;\n  text-align: center;\n  color: #9dc4d3;\n  background-color: white;\n  cursor: pointer;\n  font-size: 25px;\n  opacity: 1;\n}\n\n.one_card_div .one_card_back .project_detail .project_view_btn:hover {\n  opacity: 1;\n  color: #2d2d2d;\n}\n\n.one_card_div .one_card_back .project_detail .project_title {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  top: 50px;\n  left: 0;\n  line-height: 50px;\n  font-size: 20px;\n  color: white;\n  font-weight: bold;\n  letter-spacing: 1px;\n  text-align: center;\n  font-family: \"Indie Flower\", cursive;\n  text-shadow: -2px -1px 5px black;\n}\n\n.one_card_div .one_card_back .project_detail .project_tech {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  line-height: 35px;\n  bottom: 25px;\n  left: 0;\n  padding-left: 15px;\n  letter-spacing: 15px;\n  text-align: center;\n  color: white;\n  font-size: 25px;\n}\n\n.one_card_div .one_card_back:hover .project_detail {\n  opacity: 1;\n}\n\n.card_p {\n  opacity: 0;\n}\n\n.fake_cards {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.fake_cards .one_card_div {\n  position: absolute;\n  bottom: -400px;\n  left: 20px;\n}\n\n.fake_cards .card_f.card8 .one_card {\n  box-shadow: 0 0 5px 1px white;\n}\n\n.img_viewer {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  min-height: 400px;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.92);\n  display: none;\n}\n\n@media screen and (max-width: 576px) {\n  .img_viewer {\n    height: 100%;\n  }\n}\n\n.img_viewer .img_div {\n  position: absolute;\n  width: calc(100% - 80px);\n  height: calc(100% - 80px);\n  top: 40px;\n  left: 40px;\n  overflow: hidden;\n}\n\n.img_viewer .img_div .one_image {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.img_viewer .img_div .one_image .image_bg {\n  position: absolute;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n  top: 20px;\n  left: 20px;\n  background-size: cover;\n  background-position: center;\n  -webkit-filter: opacity(0.09);\n          filter: opacity(0.09);\n  display: none;\n}\n\n.img_viewer .img_div .one_image mat-progress-spinner {\n  position: absolute;\n  top: calc(50% - 25px);\n  left: calc(50% - 25px);\n}\n\n.img_viewer .img_div .one_image mat-progress-spinner .mat-progress-spinner.mat-accent .mat-progress-spinner-buffer {\n  background-color: #d1d0d0 !important;\n}\n\n.img_viewer .img_div .one_image img {\n  position: absolute;\n  width: 90%;\n  height: auto;\n  top: 50%;\n  left: 5%;\n  transform: translateY(-50%);\n  -webkit-filter: drop-shadow(2px 4px 6px black);\n          filter: drop-shadow(2px 4px 6px black);\n  z-index: 2;\n  display: none;\n}\n\n.img_viewer .img_div .one_image video, .img_viewer .img_div .one_image .iframe_video {\n  z-index: 2;\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  height: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 100%;\n}\n\n.img_viewer .img_div .one_image img.heighted_pic {\n  height: 100%;\n  width: auto;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  max-height: 100%;\n}\n\n.img_viewer .img_div .one_image div.img_one_pro {\n  z-index: 2;\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  height: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 100%;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.img_viewer .closer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  text-align: right;\n  padding-right: 20px;\n  font-size: 25px;\n}\n\n.img_viewer .closer i {\n  color: white;\n  cursor: pointer;\n}\n\n.img_viewer .closer i:hover {\n  color: #9dc4d3;\n}\n\n.img_viewer .slide_left, .img_viewer .slide_right {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  top: 50%;\n  line-height: 40px;\n  text-align: center;\n  font-size: 40px;\n  transform: translateY(-50%);\n  font-size: 35px;\n}\n\n.img_viewer .slide_left i, .img_viewer .slide_right i {\n  color: white;\n  cursor: pointer;\n}\n\n.img_viewer .slide_left i:hover, .img_viewer .slide_right i:hover {\n  color: #9dc4d3;\n}\n\n.img_viewer .slide_right {\n  right: 0;\n}\n\n.img_viewer .control_div {\n  position: absolute;\n  width: 100%;\n  height: 40px;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.img_viewer .control_div .images {\n  position: absolute;\n  width: calc(100% - 80px);\n  height: 100%;\n  left: 40px;\n  padding: 0;\n}\n\n.img_viewer .control_div .images .one_img {\n  height: 100%;\n  width: calc(100% / 5 );\n  display: inline-block;\n  padding: 0;\n  position: relative;\n}\n\n.img_viewer .control_div .images .one_img .img_bord {\n  position: absolute;\n  width: 40%;\n  height: 6px;\n  border-radius: 2px;\n  background-color: white;\n  top: 50%;\n  left: 50%;\n  -webkit-animation: 0.8s ease-in;\n          animation: 0.8s ease-in;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  max-width: 100px;\n}\n\n.img_viewer .control_div .images .one_img_selected {\n  height: 100%;\n  width: calc(100% / 5 );\n  padding: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n}\n\n.img_viewer .control_div .images .one_img_selected .img_bord {\n  position: absolute;\n  width: 40%;\n  height: 6px;\n  border-radius: 2px;\n  top: 50%;\n  left: 50%;\n  -webkit-animation: 0.8s ease-in;\n          animation: 0.8s ease-in;\n  transform: translate(-50%, -50%);\n  background-color: #9dc4d3;\n  max-width: 100px;\n}\n\n.all_this_card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #3c362b, #333232);\n}\n\n.all_this_card i {\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  font-size: 192px;\n  top: 20px;\n  left: 0;\n  text-align: center;\n  color: rgba(181, 175, 175, 0.14);\n}\n\n.all_this_card .content_this_card {\n  position: absolute;\n  height: calc(50% - 40px);\n  bottom: 0;\n  font-size: 11px;\n  line-height: 31px;\n  text-align: center;\n  color: rgba(181, 175, 175, 0.6);\n  font-weight: 500;\n  width: 100%;\n  left: 0;\n}\n\n.all_this_card2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #a8abc5, #d2b6d0);\n}\n\n.all_this_card2 i {\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  font-size: 170px;\n  top: 20px;\n  left: 0;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.31);\n}\n\n.all_this_card2 .content_this_card {\n  position: absolute;\n  height: calc(50% - 40px);\n  bottom: 0;\n  font-size: 11px;\n  line-height: 51px;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 500;\n  width: 100%;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldnNoYWRvdy9Eb3dubG9hZHMvcG9ydGVmb2xpby1tYXN0ZXIvc3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLGNBQUE7QUNFTjs7QUREQTtFQUNFLFdBQUE7RUFBYSxnQkFBQTtBQ0tmOztBREZBO0VBQ0Usa0JBQUE7RUFBb0IsYUFBQTtFQUFlLGdCQUFBO0VBQW9CLDRCQUFBO0VBQStCLHdCQUFBO0FDU3hGOztBRFJFO0VBQ0Usa0JBQUE7RUFBb0IsYUFBQTtFQUFlLFlBQUE7RUFBYSxTQUFBO0VBQVcsU0FBQTtFQUMzRCwyQkFBQTtFQUE2QixrQkFBQTtFQUFvQixnQkFBQTtFQUNqRCw0QkFBQTtFQUE4QixtQ0FBQTtVQUFBLDJCQUFBO0FDaUJsQzs7QURoQkk7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsV0FBQTtFQUFhLE1BQUE7RUFBUSxPQUFBO0VBQ3ZELHNDQUFBO0VBQXdELHdCQUFBO0VBQ3hELHVCQUFBO0VBQ0EsZ0JBQUE7QUN1Qk47O0FEdEJNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxNQUFBO0VBQVEsT0FBQTtFQUN2RCwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUM0QlI7O0FEMUJNO0VBQ0Usa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFlBQUE7RUFBYyxRQUFBO0VBQVUsU0FBQTtFQUMxRCxnQ0FBQTtFQUFrQyw4Q0FBQTtVQUFBLHNDQUFBO0VBQXlDLGFBQUE7QUNrQ25GOztBRDlCRTtFQUNFLGtCQUFBO0VBQW9CLGFBQUE7RUFBZSxZQUFBO0VBQWEsU0FBQTtFQUFXLFNBQUE7RUFDM0Qsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwyQ0FBQTtFQUNDLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNELFVBQUE7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LGtCQUFBO0VBQzlDLFFBQUE7RUFBVSxTQUFBO0VBQVcsK0JBQUE7VUFBQSx1QkFBQTtFQUF5QixnQ0FBQTtFQUM5Qyx5QkFBQTtFQUEyQixnQkFBQTtBQ29KckM7O0FEeklBO0VBQ0Usa0JBQUE7RUFBb0IsTUFBQTtFQUFRLE9BQUE7RUFBUyxXQUFBO0VBQWEsWUFBQTtFQUNsRCxvREFBQTtBQ2dKRjs7QUQvSUU7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsV0FBQTtFQUFhLGdCQUFBO0VBQWtCLFNBQUE7RUFBWSxPQUFBO0VBQzVFLGtCQUFBO0VBQW9CLGdDQUFBO0FDdUp4Qjs7QURySkU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQTJCLFNBQUE7RUFBWSxlQUFBO0VBQWlCLGlCQUFBO0VBQW9CLGtCQUFBO0VBQzVFLCtCQUFBO0VBQWtDLGdCQUFBO0VBQW9CLFdBQUE7RUFBYSxPQUFBO0FDOEp2RTs7QUQxSkE7RUFDRSxrQkFBQTtFQUFvQixNQUFBO0VBQVEsT0FBQTtFQUFTLFdBQUE7RUFBYSxZQUFBO0VBQ2xELG9EQUFBO0FDaUtGOztBRGhLRTtFQUNFLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxXQUFBO0VBQWEsZ0JBQUE7RUFBa0IsU0FBQTtFQUFZLE9BQUE7RUFDNUUsa0JBQUE7RUFBb0IsMEJBQUE7QUN3S3hCOztBRHRLRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFBMkIsU0FBQTtFQUFZLGVBQUE7RUFBaUIsaUJBQUE7RUFBb0Isa0JBQUE7RUFDNUUseUJBQUE7RUFBNEIsZ0JBQUE7RUFBcUIsV0FBQTtFQUFhLE9BQUE7QUMrS2xFIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7bWFyZ2luLWxlZnQ6IDA7fVxuLmFsbF93b3JrX3NwYWNlIHtcbiAgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5vbmVfY2FyZF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogNDAwcHg7IG1pbi13aWR0aDogMjIwcHggOyAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgIHRyYW5zaXRpb24gOiB0cmFuc2Zvcm0gMXMgO1xuICAub25lX2NhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiAzNTBweDsgd2lkdGg6IDIwMHB4O3RvcDogMjVweDsgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgYm9yZGVyLXJhZGl1czogNXB4OyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7IGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAub25lX2NhcmRfZnJvbnQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvYmFja19jYXJkLnBuZyk7IGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC5iYWNrZ3JvdW5kZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDsgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNTUlKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwcHg7IGhlaWdodDogYXV0bzsgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO2ZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAzcHggYmxhY2spIDsgZGlzcGxheTogbm9uZSA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5vbmVfY2FyZF9iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMzUwcHg7IHdpZHRoOiAyMDBweDt0b3A6IDI1cHg7IGxlZnQ6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGVZKDE4MGRlZyk7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgei1pbmRleDogMjtcblxuICAgIG1hdC1wcm9ncmVzcy1iYXIge1xuICAgICAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMGQwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm9uZV9jYXJkX2JhY2tncm91bmQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7IGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5wcm9qZWN0X2RldGFpbCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDsgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gICAgICBvcGFjaXR5OiAwOyB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG4gICAgICAucHJvamVjdF92aWV3X2J0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDUwcHg7IHRvcDogMTUwcHggOyBsZWZ0OiAwcHggO1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogIzlkYzRkMyA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIC5wcm9qZWN0X3ZpZXdfYnRuOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTsgY29sb3I6ICMyZDJkMmQgO1xuICAgICAgfVxuXG4gICAgICAucHJvamVjdF90aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogNTBweDsgdG9wOiA1MHB4OyBsZWZ0OiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDsgZm9udC1zaXplOiAyMHB4OyBjb2xvcjogd2hpdGU7IGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4OyAgdGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6LTJweCAtMXB4IDVweCBibGFjaztcbiAgICAgIH1cblxuICAgICAgLnByb2plY3RfdGVjaCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwcHg7IGxpbmUtaGVpZ2h0OiAzNXB4OyBib3R0b206IDI1cHg7IGxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDsgbGV0dGVyLXNwYWNpbmc6IDE1cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAub25lX2NhcmRfYmFjazpob3ZlciB7XG4gICAgLnByb2plY3RfZGV0YWlsIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cblxufVxuXG4uY2FyZF9wIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZha2VfY2FyZHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDsgbGVmdDogMDsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLm9uZV9jYXJkX2RpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogLTQwMHB4OyBsZWZ0OiAyMHB4O1xuICB9XG4gIC5jYXJkX2YuY2FyZDgge1xuICAgIC5vbmVfY2FyZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLmltZ192aWV3ZXIge1xuICBwb3NpdGlvbiA6IGZpeGVkIDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgdG9wOiAwOyBsZWZ0OiAwOyBtaW4taGVpZ2h0IDogNDAwcHggOyBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgwLCAwLCAwLCAwLjkyKTtcbiAgZGlzcGxheSA6IG5vbmUgO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNTc2cHgpIHtcbiAgICBoZWlnaHQgOiAxMDAlIDtcbiAgfVxuICAuaW1nX2RpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7ICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpOyB0b3A6IDQwcHg7IGxlZnQ6IDQwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAub25lX2ltYWdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgdG9wOiAwOyBsZWZ0OiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC5pbWFnZV9iZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpOyBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpOyB0b3A6IDIwcHg7IGxlZnQ6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgZmlsdGVyOiBvcGFjaXR5KDAuMDkpO1xuICAgICAgICBkaXNwbGF5IDogbm9uZSA7XG4gICAgICB9XG4gICAgICBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1idWZmZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQwZDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogY2FsYyg1MCUgLSAyNXB4KTsgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogOTAlOyBoZWlnaHQ6IGF1dG87IHRvcDogNTAlOyBsZWZ0OiA1JTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4IGJsYWNrKSA7IHotaW5kZXg6IDI7IGRpc3BsYXkgOiBub25lIDtcbiAgICAgIH1cblxuICAgICAgdmlkZW8gLCAuaWZyYW1lX3ZpZGVvIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBsZWZ0OiA1JTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICBpbWcuaGVpZ2h0ZWRfcGljIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgZGl2LmltZ19vbmVfcHJvIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBsZWZ0OiA1JTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jbG9zZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MHB4OyBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgcGFkZGluZy1yaWdodDogMjBweCA7IGZvbnQtc2l6ZTogMjVweDtcbiAgICBpIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTsgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBpOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjOWRjNGQzO1xuICAgIH1cbiAgfVxuXG4gIC5zbGlkZV9sZWZ0ICwgLnNsaWRlX3JpZ2h0IHtcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlIDsgd2lkdGg6IDQwcHggOyBoZWlnaHQ6IDQwcHg7IHRvcDogNTAlOyAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiA0MHB4IDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAgZm9udC1zaXplOiAzNXB4O1xuICAgIGkge1xuICAgICAgY29sb3I6IHdoaXRlOyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIGk6aG92ZXIge1xuICAgICAgY29sb3I6ICM5ZGM0ZDM7XG4gICAgfVxuICB9XG4gIC5zbGlkZV9yaWdodHtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC5jb250cm9sX2RpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MHB4IDtib3R0b206IDA7IGxlZnQ6IDA7IG92ZXJmbG93OiBoaWRkZW47XG4gICAgLmltYWdlcyB7XG4gICAgICBwb3NpdGlvbiA6IGFic29sdXRlIDsgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpOyBoZWlnaHQ6IDEwMCU7IGxlZnQ6IDQwcHg7IHBhZGRpbmc6IDA7XG5cbiAgICAgIC5vbmVfaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB3aWR0aDogY2FsYygxMDAlIC8gNSApIDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAwOyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5pbWdfYm9yZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogNDAlIDsgaGVpZ2h0OiA2cHg7IGJvcmRlci1yYWRpdXM6IDJweDsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgYW5pbWF0aW9uOiAwLjhzIGVhc2UtaW47IHRyYW5zZm9ybSA6IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSA7XG4gICAgICAgICAgY3Vyc29yIDogcG9pbnRlciA7IG1heC13aWR0aCA6IDEwMHB4IDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm9uZV9pbWdfc2VsZWN0ZWQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiBjYWxjKDEwMCUgLyA1ICkgOyAgcGFkZGluZzogMDsgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwOyB0b3A6IDA7IHotaW5kZXg6IDI7XG4gICAgICAgIC5pbWdfYm9yZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogNDAlIDsgaGVpZ2h0OiA2cHg7IGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICB0b3A6IDUwJTsgbGVmdDogNTAlOyBhbmltYXRpb246IDAuOHMgZWFzZS1pbjsgdHJhbnNmb3JtIDogdHJhbnNsYXRlKC01MCUsIC01MCUpIDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjNGQzOyBtYXgtd2lkdGggOiAxMDBweCA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG5cblxufVxuXG4uYWxsX3RoaXNfY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjM2MzNjJiLCAjMzMzMjMyKTtcbiAgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6IDUwJTsgd2lkdGg6IDEwMCU7IGZvbnQtc2l6ZTogMTkycHg7IHRvcDogMjBweCA7IGxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogcmdiYSgxODEsIDE3NSwgMTc1LCAwLjE0KSA7XG4gIH1cbiAgLmNvbnRlbnRfdGhpc19jYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiBjYWxjKDUwJSAtIDQwcHgpIDsgYm90dG9tOiAwIDsgZm9udC1zaXplOiAxMXB4OyBsaW5lLWhlaWdodDogMzFweCA7IHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgxODEsIDE3NSwgMTc1LCAwLjYpIDsgZm9udC13ZWlnaHQgOiA1MDAgOyB3aWR0aDogMTAwJTsgbGVmdDogMDtcbiAgfVxufVxuXG4uYWxsX3RoaXNfY2FyZDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2E4YWJjNSwgI2QyYjZkMCk7XG4gIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiA1MCU7IHdpZHRoOiAxMDAlOyBmb250LXNpemU6IDE3MHB4OyB0b3A6IDIwcHggOyBsZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSkgO1xuICB9XG4gIC5jb250ZW50X3RoaXNfY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogY2FsYyg1MCUgLSA0MHB4KSA7IGJvdHRvbTogMCA7IGZvbnQtc2l6ZTogMTFweDsgbGluZS1oZWlnaHQ6IDUxcHggOyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSA7IGZvbnQtd2VpZ2h0IDogNTAwIDsgIHdpZHRoOiAxMDAlOyBsZWZ0OiAwO1xuICB9XG59XG4iLCIucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5hbGxfd29ya19zcGFjZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ub25lX2NhcmRfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtaW4td2lkdGg6IDIyMHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG4ub25lX2NhcmRfZGl2IC5vbmVfY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkIC5vbmVfY2FyZF9mcm9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvYmFja19jYXJkLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub25lX2NhcmRfZGl2IC5vbmVfY2FyZCAub25lX2NhcmRfZnJvbnQgLmJhY2tncm91bmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm9uZV9jYXJkX2RpdiAub25lX2NhcmQgLm9uZV9jYXJkX2Zyb250IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggM3B4IGJsYWNrKTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgei1pbmRleDogMjtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgbWF0LXByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgbWF0LXByb2dyZXNzLWJhciAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQwZDAgIWltcG9ydGFudDtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLm9uZV9jYXJkX2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIC5wcm9qZWN0X3ZpZXdfYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzlkYzRkMztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBvcGFjaXR5OiAxO1xufVxuLm9uZV9jYXJkX2RpdiAub25lX2NhcmRfYmFjayAucHJvamVjdF9kZXRhaWwgLnByb2plY3Rfdmlld19idG46aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogIzJkMmQyZDtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIC5wcm9qZWN0X3RpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiSW5kaWUgRmxvd2VyXCIsIGN1cnNpdmU7XG4gIHRleHQtc2hhZG93OiAtMnB4IC0xcHggNXB4IGJsYWNrO1xufVxuLm9uZV9jYXJkX2RpdiAub25lX2NhcmRfYmFjayAucHJvamVjdF9kZXRhaWwgLnByb2plY3RfdGVjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBib3R0b206IDI1cHg7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ub25lX2NhcmRfZGl2IC5vbmVfY2FyZF9iYWNrOmhvdmVyIC5wcm9qZWN0X2RldGFpbCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jYXJkX3Age1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmFrZV9jYXJkcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZha2VfY2FyZHMgLm9uZV9jYXJkX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNDAwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG4uZmFrZV9jYXJkcyAuY2FyZF9mLmNhcmQ4IC5vbmVfY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4IHdoaXRlO1xufVxuXG4uaW1nX3ZpZXdlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkyKTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5pbWdfdmlld2VyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IC5vbmVfaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IC5vbmVfaW1hZ2UgLmltYWdlX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBmaWx0ZXI6IG9wYWNpdHkoMC4wOSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIG1hdC1wcm9ncmVzcy1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMjVweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIG1hdC1wcm9ncmVzcy1zcGlubmVyIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMGQwICFpbXBvcnRhbnQ7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjayk7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIHZpZGVvLCAuaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIC5pZnJhbWVfdmlkZW8ge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IC5vbmVfaW1hZ2UgaW1nLmhlaWdodGVkX3BpYyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLmltZ192aWV3ZXIgLmltZ19kaXYgLm9uZV9pbWFnZSBkaXYuaW1nX29uZV9wcm8ge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uaW1nX3ZpZXdlciAuY2xvc2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmltZ192aWV3ZXIgLmNsb3NlciBpIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1nX3ZpZXdlciAuY2xvc2VyIGk6aG92ZXIge1xuICBjb2xvcjogIzlkYzRkMztcbn1cbi5pbWdfdmlld2VyIC5zbGlkZV9sZWZ0LCAuaW1nX3ZpZXdlciAuc2xpZGVfcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRvcDogNTAlO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuLmltZ192aWV3ZXIgLnNsaWRlX2xlZnQgaSwgLmltZ192aWV3ZXIgLnNsaWRlX3JpZ2h0IGkge1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWdfdmlld2VyIC5zbGlkZV9sZWZ0IGk6aG92ZXIsIC5pbWdfdmlld2VyIC5zbGlkZV9yaWdodCBpOmhvdmVyIHtcbiAgY29sb3I6ICM5ZGM0ZDM7XG59XG4uaW1nX3ZpZXdlciAuc2xpZGVfcmlnaHQge1xuICByaWdodDogMDtcbn1cbi5pbWdfdmlld2VyIC5jb250cm9sX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltZ192aWV3ZXIgLmNvbnRyb2xfZGl2IC5pbWFnZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiA0MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmltZ192aWV3ZXIgLmNvbnRyb2xfZGl2IC5pbWFnZXMgLm9uZV9pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA1ICk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmltZ192aWV3ZXIgLmNvbnRyb2xfZGl2IC5pbWFnZXMgLm9uZV9pbWcgLmltZ19ib3JkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYW5pbWF0aW9uOiAwLjhzIGVhc2UtaW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG4uaW1nX3ZpZXdlciAuY29udHJvbF9kaXYgLmltYWdlcyAub25lX2ltZ19zZWxlY3RlZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDUgKTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG59XG4uaW1nX3ZpZXdlciAuY29udHJvbF9kaXYgLmltYWdlcyAub25lX2ltZ19zZWxlY3RlZCAuaW1nX2JvcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGFuaW1hdGlvbjogMC44cyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlkYzRkMztcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmFsbF90aGlzX2NhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjM2MzNjJiLCAjMzMzMjMyKTtcbn1cbi5hbGxfdGhpc19jYXJkIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOTJweDtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDE4MSwgMTc1LCAxNzUsIDAuMTQpO1xufVxuLmFsbF90aGlzX2NhcmQgLmNvbnRlbnRfdGhpc19jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IGNhbGMoNTAlIC0gNDBweCk7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgxODEsIDE3NSwgMTc1LCAwLjYpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbn1cblxuLmFsbF90aGlzX2NhcmQyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2E4YWJjNSwgI2QyYjZkMCk7XG59XG4uYWxsX3RoaXNfY2FyZDIgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3MHB4O1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG59XG4uYWxsX3RoaXNfY2FyZDIgLmNvbnRlbnRfdGhpc19jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IGNhbGMoNTAlIC0gNDBweCk7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogNTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let WorkComponent = class WorkComponent {
    constructor() {
        this.fournishop = {
            name: "Fournishop",
            imgs_path: 'assets/imgs/fournishop/',
            background: "background.png",
            imgs: [
                { name: "0.png", width: true },
                { name: "1.png", width: true },
                { name: "2.png", width: true },
                { name: "3.png", width: true },
                { name: "4.png", width: true },
                { name: "5.png", width: true }
            ]
        };
        this.esi = {
            name: "ESI",
            imgs_path: 'assets/imgs/esi/',
            background: "background.png",
            imgs: [
                { name: "0.png", width: true },
                { name: "1.png", width: true },
                { name: "2.png", width: true },
                { name: "3.png", width: true },
                { name: "4.png", width: true },
                { name: "5.png", width: true },
                { name: "6.png", width: true }
            ]
        };
        this.sits = {
            name: "SITS",
            imgs_path: 'assets/imgs/sits/',
            background: "background.png",
            imgs: [
                { name: "0.png", width: true },
                { name: "1.png", width: true },
                { name: "2.png", width: true },
                { name: "3.png", width: true },
                { name: "4.png", width: true },
                { name: "5.png", width: true },
                { name: "6.png", width: true }
            ]
        };
        this.dictili = {
            name: "Dictili",
            imgs_path: 'assets/imgs/dictili/',
            background: "background.png",
            imgs: [
                { name: "0.png", width: true },
                { name: "1.png", width: false },
                { name: "1_1.png", width: true },
                { name: "2.png", width: true },
                { name: "3_1.png", width: true },
                { name: "3.png", width: true },
                { name: "4.png", width: true },
                { name: "5.png", width: true },
                { name: "6.png", width: true },
                { name: "7.png", width: true },
                { name: "8.png", width: true },
            ]
        };
        this.portfolio = {
            name: "Portfolio",
            imgs_path: 'assets/imgs/portefolio/',
            background: "background.png",
            imgs: [
                { name: "0.png", width: true },
                { name: "1.png", width: true },
                { name: "2.png", width: true },
                { name: "3.png", width: true }
            ]
        };
        this.fullhouse_dash = {
            name: "Fullhouse Backoffice",
            imgs_path: 'assets/imgs/fullhouse_dash/',
            background: "background.png",
            imgs: [
                { name: "1.png", width: true },
                { name: "2.png", width: true },
                { name: "3.png", width: true },
                { name: "4.png", width: true },
                { name: "5.png", width: true },
                { name: "6.png", width: true },
                { name: "7.png", width: true },
                { name: "8.png", width: true },
                { name: "9.png", width: true },
                { name: "10.png", width: true },
                { name: "assets/imgs/fullhouse_dash/FullHouse-merge_.mp4", type: 1 }
            ]
        };
        this.fullhouse = {
            name: "Fullhouse",
            imgs_path: 'assets/imgs/fullhouse/',
            background: "background.png",
            imgs: [
                { name: "1.png", width: false },
                { name: "2.png", width: false },
                { name: "3.png", width: true },
                { name: "4.png", width: true },
                { name: "5.jpg", width: false },
                { name: "6.jpg", width: false },
                { name: "https://drive.google.com/uc?export=download&id=1mAN_0Xs7VF3mavTl6sa1mjhZQddIlQYb", type: 1 }
            ]
        };
        this.megadist = {
            name: "Megadist",
            imgs_path: 'assets/imgs/megadist/',
            background: "background.png",
            imgs: [
                { name: "1.png", width: true },
                { name: "2.png", width: false },
                { name: "3.png", width: true },
                { name: "4.png", width: true },
                { name: "assets/imgs/megadist/Megadist.webm", type: 1 }
            ]
        };
        this.cnas = {
            name: "CNAS",
            imgs_path: 'assets/imgs/cnas/',
            background: "background.png",
            imgs: [
                { name: "1.png", width: true },
                { name: "2.png", width: true },
                { name: "3.png", width: true },
                { name: "4.png", width: true }
            ]
        };
        this.capa = {
            name: "CAPA-ALGERIE",
            imgs_path: 'assets/imgs/capa/',
            background: "background.png",
            imgs: [
                { name: "1.png", width: false },
                { name: "2.png", width: true },
                { name: "3.png", width: true },
                { name: "4.png", width: true },
                { name: "5.png", width: true }
            ]
        };
        this.capa_dash = {
            name: "CAPA-ALGERIE Dashboard",
            imgs_path: 'assets/imgs/capa_dash/',
            background: "background.png",
            imgs: [
                { name: "1.png", width: true },
                { name: "2.png", width: true },
                { name: "3.png", width: false },
                { name: "4.png", width: true },
                { name: "5.png", width: false },
                { name: "assets/imgs/capa_dash/CAPA-ALGERIE.webm", type: 1 }
            ]
        };
        this.makepub = {
            name: "MakePub",
            imgs_path: 'assets/imgs/makepub/',
            background: "background.png",
            imgs: [
                { name: "https://drive.google.com/uc?export=download&id=1BZ3FqS7cyflo7r4sB1YjF_nDN79JAiW0", type: 1 }
            ]
        };
        this.webdoc = {
            name: "Web-Doc",
            imgs_path: 'assets/imgs/webdoc/',
            background: "background.png",
            imgs: [
                { name: "https://drive.google.com/uc?export=download&id=1ldU35gAYQjPFmnuc-SQICsJqI4lXsi5G", type: 1 }
            ]
        };
        this.dpgr = {
            name: "DPGR",
            imgs_path: 'assets/imgs/dpgr/',
            background: "background.png",
            imgs: [
                { name: "https://drive.google.com/uc?export=download&id=1KqgItHgzN1KL8v-d6DVi9D-5TQrdeaM3", type: 1 }
            ]
        };
        this.tchatchet = {
            name: "Tchatchet",
            imgs_path: 'assets/imgs/tchatchet/',
            background: "background.png",
            imgs: ["log.png", "1.png", "2.png", '3.png']
        };
        this.sfsd = {
            name: "SFSD Simulation",
            imgs_path: 'assets/imgs/sfsd/',
            background: "background.png",
            imgs: [
                { name: "0.png", width: false },
                { name: "1.png", width: true },
                { name: "2.png", width: true },
                { name: "3.png", width: true }
            ]
        };
        this.punchword = {
            name: "Punchword",
            imgs_path: 'assets/imgs/punchword/',
            background: "background.png",
            imgs: [
                { name: "assets/imgs/punchword/Punchword.webm", type: 1 }
            ]
        };
        this.npub = {
            name: "NFC PUB",
            imgs_path: 'assets/imgs/npub/',
            background: "background.png",
            imgs: [
                { name: "https://drive.google.com/uc?export=download&id=1FOxbvy-usYFFU8TRAlz8uyUr71YqPgI3", type: 1 },
                { name: "https://drive.google.com/uc?export=download&id=1FQgY3ntlib13cM6jr-Wet9hipvAgWXHh", type: 1 },
                { name: "https://drive.google.com/uc?export=download&id=1FR9Afv7IEjDjQBcRvfYdrZDmwY5Jn7yl", type: 1 },
            ]
        };
        this.proximity = {
            name: "Proximity App",
            imgs_path: 'assets/imgs/proximity/',
            background: "background.jpg",
            imgs: [
                { name: "", type: 2 },
            ]
        };
        this.selected_work = this.portfolio;
        this.current_img = 0;
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".activeItem").removeClass('activeItem');
        jquery__WEBPACK_IMPORTED_MODULE_2__(".workSidenav").addClass('activeItem');
    }
    OnCloseSlider() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".img_viewer").fadeOut(500);
        this.current_img = 0;
        jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg , .one_image img").fadeOut(500);
        jquery__WEBPACK_IMPORTED_MODULE_2__(".all_work_space").fadeIn(0);
        jquery__WEBPACK_IMPORTED_MODULE_2__("video").trigger('pause');
        this.selected_work = this.portfolio;
    }
    OnViewWork(selected_work) {
        this.selected_work = selected_work;
        this.current_img = 0;
        jquery__WEBPACK_IMPORTED_MODULE_2__(".all_work_space").fadeOut(0);
        jquery__WEBPACK_IMPORTED_MODULE_2__(".img_viewer").fadeIn(500);
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".one_image img").fadeIn(500);
            jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeIn(1000);
        }, 500);
        for (let i = 0; i < this.selected_work.imgs.length; i++) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).css('left', i * 100 + '%');
        }
        jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").css('left', '0');
    }
    OnClickBord(index) {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeOut(0);
        jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").animate({ 'left': jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").width() * (index) + 'px' }, 500, function () { });
        let time_round = 200 * Math.abs(index - this.current_img);
        if (index < this.current_img) {
            for (let i = this.current_img; i >= index; i--) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).animate({ 'left': (i - index) * 100 + '%' }, 200, function () { });
            }
        }
        else {
            for (let i = this.current_img; i <= index; i++) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).animate({ 'left': (i - index) * 100 + '%' }, 200, function () { });
            }
        }
        setTimeout(() => {
            this.current_img = index;
            for (let j = 0; j < this.selected_work.imgs.length; j++) {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + j).css('left', (j - this.current_img) * 100 + '%');
            }
            jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeIn(500);
        }, time_round);
    }
    OnSlideRight() {
        if (this.current_img + 1 < this.selected_work.imgs.length) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("video").trigger('pause');
            jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeOut(500);
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").animate({ 'left': jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").width() * (this.current_img + 1) + 'px' }, 300, function () { });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + this.current_img).animate({ 'left': '-100%' }, 600, function () { });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + (this.current_img + 1)).animate({ 'left': '0%' }, 600, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeIn(500);
                });
                for (let i = 0; i < this.selected_work.imgs.length; i++) {
                    if (i == this.current_img || i == (this.current_img + 1)) {
                        continue;
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).css('left', (i - this.current_img - 1) * 100 + '%');
                }
                this.current_img++;
            }, 500);
        }
    }
    OnSlideLeft() {
        if (this.current_img > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("video").trigger('pause');
            jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeOut(500);
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").animate({ 'left': jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").width() * (this.current_img - 1) + 'px' }, 300, function () { });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + this.current_img).animate({ 'left': '100%' }, 600, function () { });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + (this.current_img - 1)).animate({ 'left': '0%' }, 600, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".image_bg").fadeIn(500);
                });
                for (let i = 0; i < this.selected_work.imgs.length; i++) {
                    if (i == this.current_img || i == (this.current_img - 1)) {
                        continue;
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_2__("#i" + i).css('left', (i - this.current_img + 1) * 100 + '%');
                }
                this.current_img--;
            }, 500);
        }
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected") != undefined) {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").css({ 'left': jquery__WEBPACK_IMPORTED_MODULE_2__(".one_img_selected").width() * (this.current_img) + 'px' });
            }
        });
        setTimeout(() => {
            this.showPage();
            // setTimeout(() => {
            //   this.hidePage() ;
            //   setTimeout(() => {
            //     this.showPage() ;
            //     setTimeout(() => {
            //       this.hidePage() ;
            //       setTimeout(() => {
            //         this.showPage() ;
            //       }, 2500);
            //     }, 2500);
            //   }, 2500);
            // }, 2500);
            // $(".card_f.card1").animate({
            //   'top' : ($(".card_p.card1").offset()).top+'px' ,
            //   'left' : ($(".card_p.card1").offset()).left+'px'
            // } , timer , function(){
            //     $(window).resize(()=> {
            //       if ($(".fake_cards") != undefined) {
            //         $(".card_f.card1").css({ 'top' : ($(".card_p.card1").offset()).top+'px' , 'left' : ($(".card_p.card1").offset()).left+'px'  }) ;
            //       }
            //     });
            //     $(".card_f.card2").animate({
            //       'top' : ($(".card_p.card2").offset()).top+'px' ,
            //       'left' : ($(".card_p.card2").offset()).left+'px'
            //     } , timer , function(){
            //       $(window).resize(()=> {
            //         if ($(".fake_cards") != undefined) {
            //           $(".card_f.card2").css({ 'top' : ($(".card_p.card2").offset()).top+'px' , 'left' : ($(".card_p.card2").offset()).left+'px'  }) ;
            //         }
            //       });
            //       $(".card_f.card3").animate({
            //         'top' : ($(".card_p.card3").offset()).top+'px' ,
            //         'left' : ($(".card_p.card3").offset()).left+'px'
            //       } , timer , function(){
            //         $(window).resize(()=> {
            //           if ($(".fake_cards") != undefined) {
            //             $(".card_f.card3").css({ 'top' : ($(".card_p.card3").offset()).top+'px' , 'left' : ($(".card_p.card3").offset()).left+'px'  }) ;
            //           }
            //         });
            //         $(".card_f.card4").animate({
            //           'top' : ($(".card_p.card4").offset()).top+'px' ,
            //           'left' : ($(".card_p.card4").offset()).left+'px'
            //         } , timer , function(){
            //           $(window).resize(()=> {
            //             if ($(".fake_cards") != undefined) {
            //               $(".card_f.card4").css({ 'top' : ($(".card_p.card4").offset()).top+'px' , 'left' : ($(".card_p.card4").offset()).left+'px'  }) ;
            //             }
            //           });
            //           $(".card_f.card9").animate({
            //             'top' : ($(".card_p.card9").offset()).top+'px' ,
            //             'left' : ($(".card_p.card9").offset()).left+'px'
            //           } , timer , function(){
            //               $(window).resize(()=> {
            //                 if ($(".fake_cards") != undefined) {
            //                   $(".card_f.card9").css({ 'top' : ($(".card_p.card9").offset()).top+'px' , 'left' : ($(".card_p.card9").offset()).left+'px'  }) ;
            //                 }
            //               });
            //               $(".card_f.card6").animate({
            //                 'top' : ($(".card_p.card6").offset()).top+'px' ,
            //                 'left' : ($(".card_p.card6").offset()).left+'px'
            //               } , timer , function(){
            //                 $(window).resize(()=> {
            //                   if ($(".fake_cards") != undefined) {
            //                     $(".card_f.card6").css({ 'top' : ($(".card_p.card6").offset()).top+'px' , 'left' : ($(".card_p.card6").offset()).left+'px'  }) ;
            //                   }
            //                 });
            //                 $(".card_f.card7").animate({
            //                   'top' : ($(".card_p.card7").offset()).top+'px' ,
            //                   'left' : ($(".card_p.card7").offset()).left+'px'
            //                 } , timer , function(){
            //                   $(window).resize(()=> {
            //                     if ($(".fake_cards") != undefined) {
            //                       $(".card_f.card7").css({ 'top' : ($(".card_p.card7").offset()).top+'px' , 'left' : ($(".card_p.card7").offset()).left+'px'  }) ;
            //                     }
            //                   });
            //                   $(".card_f.card12 .one_card").css({"box-shadow": "0 0 0px 0px white"}) ;
            //                   $(".card_f.card12").animate({
            //                     'top' : ($(".card_p.card12").offset()).top+'px' ,
            //                     'left' : ($(".card_p.card12").offset()).left+'px'
            //                   } , timer , function(){
            //                     $(".card_p").css("opacity" , "1") ;
            //                     $(".fake_cards").remove() ;
            //                     $(".card_r").ready(()=> {
            //                       $(".card_r").css('transform' , 'rotateY(180deg)') ;
            //                       $(".card12 .one_card").mouseenter(()=>{
            //                         $(".card12").css('transform' , 'rotateY(180deg)' ) ;
            //                       }) ;
            //                       $(".card12").mouseleave(()=>{
            //                         $(".card12").css('transform' , 'rotateY(0deg)' ) ;
            //                       }) ;
            //                       $(".card9 .one_card").mouseenter(()=>{
            //                         $(".card9").css('transform' , 'rotateY(180deg)' ) ;
            //                       }) ;
            //                       $(".card9").mouseleave(()=>{
            //                         $(".card9").css('transform' , 'rotateY(0deg)' ) ;
            //                       }) ;
            //                       $(".one_card_background").fadeIn(500) ;
            //                     });
            //                   } ) ;
            //                 } ) ;
            //               } ) ;
            //           } ) ;
            //         } ) ;
            //       } ) ;
            //     } ) ;
            // } ) ;
        }, 2500);
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).keyup((e) => {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(".img_viewer").attr('class') != undefined && jquery__WEBPACK_IMPORTED_MODULE_2__(".img_viewer").css('display') != 'none') {
                if (e.keyCode === 27)
                    this.OnCloseSlider();
                if (e.keyCode === 37)
                    this.OnSlideLeft();
                if (e.keyCode === 39)
                    this.OnSlideRight();
            }
        });
    }
    showPage() {
        let timer = 300;
        if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() < 768) {
            timer = 0;
        }
        jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards").fadeIn(0);
        for (let index = 1; index < 17; index++) {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card" + index).animate({
                'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card" + index).offset()).top + 'px',
                'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card" + index).offset()).left + 'px'
            }, timer, function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                    if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card" + index).css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card" + index).offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card" + index).offset()).left + 'px' });
                    }
                });
            });
        }
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p").css("opacity", "1");
            jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards").fadeOut(0);
            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_r").ready(() => {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_r").css('transform', 'rotateY(180deg)');
                jquery__WEBPACK_IMPORTED_MODULE_2__(".card12 .one_card").mouseenter(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card12").css('transform', 'rotateY(180deg)');
                });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".card12").mouseleave(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card12").css('transform', 'rotateY(0deg)');
                });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".card9 .one_card").mouseenter(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card9").css('transform', 'rotateY(180deg)');
                });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".card9").mouseleave(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card9").css('transform', 'rotateY(0deg)');
                });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_card_background").fadeIn(500);
            });
        }, timer);
    }
    hidePage() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_r").css('transform', 'rotateY(0deg)');
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p").animate({ "opacity": "0" }, 500, function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards .one_card_div").css({ "bottom": '-400px', "left": "20px" });
            });
        }, 1000);
    }
};
WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work.component.scss */ "./src/app/work/work.component.scss")).default]
    })
], WorkComponent);



/***/ }),

/***/ "./src/app/work/work.module.ts":
/*!*************************************!*\
  !*** ./src/app/work/work.module.ts ***!
  \*************************************/
/*! exports provided: WorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkModule", function() { return WorkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_teximate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-teximate */ "./node_modules/ngx-teximate/fesm2015/ngx-teximate.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _work_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _new_work_new_work_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../new-work/new-work.component */ "./src/app/new-work/new-work.component.ts");
/* harmony import */ var _new_work_project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../new-work/project/project.component */ "./src/app/new-work/project/project.component.ts");















const router = [
    {
        path: '', component: _work_component__WEBPACK_IMPORTED_MODULE_12__["WorkComponent"]
    }
];
let WorkModule = class WorkModule {
};
WorkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_work_component__WEBPACK_IMPORTED_MODULE_12__["WorkComponent"],
            _new_work_new_work_component__WEBPACK_IMPORTED_MODULE_13__["NewWorkComponent"],
            _new_work_project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(router),
            ngx_teximate__WEBPACK_IMPORTED_MODULE_4__["TeximateModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__["NgScrollbarModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_8__["NgImageSliderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        ]
    })
], WorkModule);



/***/ })

}]);
//# sourceMappingURL=work-work-module-es2015.js.map