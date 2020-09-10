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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"all_work_space row\">\n      <div class=\"one_card_div card_p card_r card1 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n          <div class=\"one_card_back\">\n            <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n            <img src=\"{{fournishop.imgs_path + fournishop.background}}\" alt=\"\" class=\"one_card_background\">\n            <div class=\"project_detail\">\n              <div class=\"project_view_btn\" (click)='OnViewWork(fournishop)'>\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"project_title\">{{fournishop.name}}</div>\n              <div class=\"project_tech\">\n                <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n                <i class=\"fab fa-js    \"></i>\n                <i class=\"fab fa-angular\"></i>\n                <br>\n                <i class=\"fab fa-laravel\"></i>\n                <i class=\"fab fa-php\"></i>\n  \n              </div>\n            </div>\n          </div>\n      </div>\n  \n      <div class=\"one_card_div card_p card_r card2 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n  \n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{esi.imgs_path + esi.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(esi)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{esi.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <br>\n              <i class=\"fab fa-laravel\"></i>\n              <i class=\"fab fa-php\"></i>\n  \n            </div>\n          </div>\n  \n        </div>\n  \n      </div>\n  \n      <div class=\"one_card_div  card_p card_r card3 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card \">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n  \n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{sits.imgs_path + sits.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(sits)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{sits.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <br>\n              <i class=\"fab fa-php\"></i>\n  \n            </div>\n          </div>\n  \n        </div>\n  \n      </div>\n  \n      <div class=\"one_card_div card_p card_r card4 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n  \n          <img src=\"{{dictili.imgs_path + dictili.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(dictili)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{dictili.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <i class=\"fab fa-angular\"></i>\n              <br>\n              <i class=\"fab fa-php\"></i>\n  \n            </div>\n          </div>\n  \n        </div>\n  \n      </div>\n  \n      <div class=\"one_card_div card_p  card5 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"one_card_back\">\n          <div class=\"all_this_card2\">\n            <i class=\"material-icons\">cloud_upload</i>\n            <div class=\"content_this_card\">\n              I own more projects , <br>  I will upload them soon .\n            </div>\n          </div>\n  \n        </div>\n  \n  \n      </div>\n  \n      <div class=\"one_card_div card_p card_r card6 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n  \n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{portfolio.imgs_path + portfolio.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(portfolio)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{portfolio.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <br>\n              <i class=\"fab fa-angular\"></i>\n  \n            </div>\n          </div>\n  \n        </div>\n  \n      </div>\n  \n      <div class=\"one_card_div card_p card_r card7 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n  \n        <div class=\"one_card_back\">\n          <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n          <img src=\"{{sfsd.imgs_path + sfsd.background}}\" alt=\"\" class=\"one_card_background\">\n          <div class=\"project_detail\">\n            <div class=\"project_view_btn\"  (click)='OnViewWork(sfsd)'>\n              <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"project_title\">{{sfsd.name}}</div>\n            <div class=\"project_tech\">\n              <i class=\"fab fa-html5\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-css3\" aria-hidden=\"true\"></i>\n              <i class=\"fab fa-js    \"></i>\n              <br>\n              <i class=\"fab fa-php\"></i>\n  \n            </div>\n          </div>\n  \n        </div>\n  \n      </div>\n  \n      <div class=\"one_card_div card_p card8 col-12 col-md-4 col-lg-3\">\n        <div class=\"one_card\">\n          <div class=\"one_card_front\">\n            <div class=\"backgrounder\"></div>\n            <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n          </div>\n        </div>\n  \n        <div class=\"one_card_back\">\n          <div class=\"all_this_card\">\n            <i class=\"material-icons\">code</i>\n            <div class=\"content_this_card\">\n              I have a Large experience in Backend development , <br>\n              I have worked in many projects .\n            </div>\n          </div>\n  \n        </div>\n      </div>\n    </div>\n<div class=\"fake_cards row\">\n  <div class=\"one_card_div card_f card1\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card2\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card3\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card4\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card5\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card6\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card7\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"one_card_div card_f card8\">\n    <div class=\"one_card\">\n      <div class=\"one_card_front\">\n        <div class=\"backgrounder\"></div>\n        <img src=\"assets/imgs/dark_dark.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"img_viewer\">\n  <div class=\"closer\"> <i class=\"fa fa-times\" (click)='OnCloseSlider()' aria-hidden=\"true\"></i>  </div>\n  <div class=\"img_div\">\n    <div *ngFor=\"let image of selected_work.imgs ; let i = index ;\" id=\"i{{i}}\"  class=\"one_image\" [ngStyle]=\"{'left': 100*i+'%' }\" >\n      <div class=\"image_bg\" [ngStyle]=\"{'background-image' : 'url(../../'+selected_work.imgs_path+image.name+')'}\"></div>\n      <mat-progress-spinner color=\"accent\" mode=\"indeterminate\" diameter='50' strokeWidth='5'> </mat-progress-spinner>\n      <img src=\"{{selected_work.imgs_path+image.name}}\" alt=\"\" [ngClass]=\"{'heighted_pic' : !image.width}\" >\n    </div>\n\n  </div>\n  <div class=\"slide_left\" *ngIf=\"current_img > 0 \"> <i class=\"fa fa-angle-left\" (click)= 'OnSlideLeft()' aria-hidden=\"true\"></i> </div>\n\n  <div class=\"slide_right\"  *ngIf=\"current_img < selected_work.imgs.length - 1  \"> <i class=\"fa fa-angle-right\" (click)= 'OnSlideRight()' aria-hidden=\"true\"></i> </div>\n\n  <div class=\"control_div\">\n\n    <div class=\"images\">\n      <div class=\"one_img\" id=\"p{{i}}\" *ngFor=\"let image of selected_work.imgs ; let i = index ;\" [ngStyle]=\"{'width': 'calc(100% /'+ selected_work.imgs.length +')' }\" >\n        <div (click)='OnClickBord(i)' class=\"img_bord\"></div>\n      </div>\n      <div class=\"one_img_selected\"  [ngStyle]=\"{'width': 'calc(100% /'+ selected_work.imgs.length +')' }\" > <div class=\"img_bord\"></div> </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/work/work.component.scss":
/*!******************************************!*\
  !*** ./src/app/work/work.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  margin-left: 0;\n}\n\n.all_work_space {\n  width: 100%;\n  min-height: 100%;\n}\n\n.one_card_div {\n  position: relative;\n  height: 400px;\n  min-width: 220px;\n  transform-style: preserve-3d;\n  transition: transform 1s;\n}\n\n.one_card_div .one_card {\n  position: relative;\n  height: 350px;\n  width: 200px;\n  top: 25px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 15px;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.one_card_div .one_card .one_card_front {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-image: url('back_card.png');\n  background-size: contain;\n  background-color: #0b0b0b;\n  overflow: hidden;\n}\n\n.one_card_div .one_card .one_card_front .backgrounder {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(5, 5, 5, 0.55);\n}\n\n.one_card_div .one_card .one_card_front img {\n  position: absolute;\n  width: 100px;\n  height: auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-filter: drop-shadow(0px 0px 3px black);\n          filter: drop-shadow(0px 0px 3px black);\n}\n\n.one_card_div .one_card_back {\n  position: absolute;\n  height: 350px;\n  width: 200px;\n  top: 25px;\n  left: 50%;\n  border-radius: 15px;\n  background-color: white;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: translateX(-50%) rotateY(180deg);\n  -webkit-filter: drop-shadow(2px 4px 6px black);\n          filter: drop-shadow(2px 4px 6px black);\n  overflow: hidden;\n  z-index: 2;\n}\n\n.one_card_div .one_card_back mat-progress-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.one_card_div .one_card_back mat-progress-bar .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #d1d0d0 !important;\n}\n\n.one_card_div .one_card_back .one_card_background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: none;\n}\n\n.one_card_div .one_card_back .project_detail {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.72);\n  opacity: 0;\n  transition: ease-in 0.2s;\n}\n\n.one_card_div .one_card_back .project_detail .project_view_btn {\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  top: 150px;\n  left: 0px;\n  line-height: 50px;\n  text-align: center;\n  color: #a67e2d;\n  background-color: #fdb72b;\n  cursor: pointer;\n  font-size: 25px;\n  opacity: 0.7;\n}\n\n.one_card_div .one_card_back .project_detail .project_view_btn:hover {\n  opacity: 1;\n  color: #2d2d2d;\n}\n\n.one_card_div .one_card_back .project_detail .project_title {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  top: 50px;\n  left: 0;\n  line-height: 50px;\n  font-size: 20px;\n  color: white;\n  font-weight: bold;\n  letter-spacing: 1px;\n  text-align: center;\n  font-family: \"Indie Flower\", cursive;\n  text-shadow: -2px -1px 5px black;\n}\n\n.one_card_div .one_card_back .project_detail .project_tech {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  line-height: 50px;\n  bottom: 25px;\n  left: 0;\n  padding-left: 15px;\n  letter-spacing: 15px;\n  text-align: center;\n  color: white;\n  font-size: 25px;\n}\n\n.one_card_div .one_card_back:hover .project_detail {\n  opacity: 1;\n}\n\n.card_p {\n  opacity: 0;\n}\n\n.fake_cards {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.fake_cards .one_card_div {\n  position: absolute;\n  bottom: -400px;\n  left: 20px;\n}\n\n.fake_cards .card_f.card8 .one_card {\n  box-shadow: 0 0 5px 1px white;\n}\n\n.img_viewer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  min-height: 400px;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.92);\n  display: none;\n}\n\n@media screen and (max-width: 576px) {\n  .img_viewer {\n    height: calc(100% - 60px);\n    top: 60px;\n  }\n}\n\n.img_viewer .img_div {\n  position: absolute;\n  width: calc(100% - 80px);\n  height: calc(100% - 80px);\n  top: 40px;\n  left: 40px;\n  overflow: hidden;\n}\n\n.img_viewer .img_div .one_image {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.img_viewer .img_div .one_image .image_bg {\n  position: absolute;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n  top: 20px;\n  left: 20px;\n  background-size: cover;\n  background-position: center;\n  -webkit-filter: opacity(0.09);\n          filter: opacity(0.09);\n  display: none;\n}\n\n.img_viewer .img_div .one_image mat-progress-spinner {\n  position: absolute;\n  top: calc(50% - 25px);\n  left: calc(50% - 25px);\n}\n\n.img_viewer .img_div .one_image mat-progress-spinner .mat-progress-spinner.mat-accent .mat-progress-spinner-buffer {\n  background-color: #d1d0d0 !important;\n}\n\n.img_viewer .img_div .one_image img {\n  position: absolute;\n  width: 90%;\n  height: auto;\n  top: 50%;\n  left: 5%;\n  transform: translateY(-50%);\n  -webkit-filter: drop-shadow(2px 4px 6px black);\n          filter: drop-shadow(2px 4px 6px black);\n  z-index: 2;\n  display: none;\n}\n\n.img_viewer .img_div .one_image img.heighted_pic {\n  height: 100%;\n  width: auto;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n}\n\n.img_viewer .closer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  text-align: right;\n  padding-right: 20px;\n  font-size: 25px;\n}\n\n.img_viewer .closer i {\n  color: #777474;\n  cursor: pointer;\n}\n\n.img_viewer .closer i:hover {\n  color: #fdb82c;\n}\n\n.img_viewer .slide_left, .img_viewer .slide_right {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  top: 50%;\n  line-height: 40px;\n  text-align: center;\n  font-size: 40px;\n  transform: translateY(-50%);\n  font-size: 35px;\n}\n\n.img_viewer .slide_left i, .img_viewer .slide_right i {\n  color: #777474;\n  cursor: pointer;\n}\n\n.img_viewer .slide_left i:hover, .img_viewer .slide_right i:hover {\n  color: #fdb82c;\n}\n\n.img_viewer .slide_right {\n  right: 0;\n}\n\n.img_viewer .control_div {\n  position: absolute;\n  width: 100%;\n  height: 40px;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n\n.img_viewer .control_div .images {\n  position: absolute;\n  width: calc(100% - 80px);\n  height: 100%;\n  left: 40px;\n  padding: 0;\n}\n\n.img_viewer .control_div .images .one_img {\n  height: 100%;\n  width: calc(100% / 5 );\n  display: inline-block;\n  padding: 0;\n  position: relative;\n}\n\n.img_viewer .control_div .images .one_img .img_bord {\n  position: absolute;\n  width: 40%;\n  height: 6px;\n  border-radius: 2px;\n  background-color: #191919;\n  top: 50%;\n  left: 50%;\n  -webkit-animation: 0.8s ease-in;\n          animation: 0.8s ease-in;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  max-width: 100px;\n}\n\n.img_viewer .control_div .images .one_img_selected {\n  height: 100%;\n  width: calc(100% / 5 );\n  padding: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n}\n\n.img_viewer .control_div .images .one_img_selected .img_bord {\n  position: absolute;\n  width: 40%;\n  height: 6px;\n  border-radius: 2px;\n  top: 50%;\n  left: 50%;\n  -webkit-animation: 0.8s ease-in;\n          animation: 0.8s ease-in;\n  transform: translate(-50%, -50%);\n  background-color: #fdb82c;\n  max-width: 100px;\n}\n\n.all_this_card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #3c362b, #333232);\n}\n\n.all_this_card i {\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  font-size: 192px;\n  top: 20px;\n  left: 0;\n  text-align: center;\n  color: rgba(181, 175, 175, 0.14);\n}\n\n.all_this_card .content_this_card {\n  position: absolute;\n  height: calc(50% - 40px);\n  bottom: 0;\n  font-size: 11px;\n  line-height: 31px;\n  text-align: center;\n  color: rgba(181, 175, 175, 0.6);\n  font-weight: 500;\n  width: 100%;\n  left: 0;\n}\n\n.all_this_card2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #a8abc5, #d2b6d0);\n}\n\n.all_this_card2 i {\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  font-size: 170px;\n  top: 20px;\n  left: 0;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.31);\n}\n\n.all_this_card2 .content_this_card {\n  position: absolute;\n  height: calc(50% - 40px);\n  bottom: 0;\n  font-size: 11px;\n  line-height: 51px;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 500;\n  width: 100%;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldnNoYWRvdy9Eb3dubG9hZHMvcG9ydGVmb2xpby1tYXN0ZXIvc3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFNLGNBQUE7QUNFTjs7QUREQTtFQUNFLFdBQUE7RUFBYSxnQkFBQTtBQ0tmOztBREZBO0VBQ0Usa0JBQUE7RUFBb0IsYUFBQTtFQUFlLGdCQUFBO0VBQW9CLDRCQUFBO0VBQStCLHdCQUFBO0FDU3hGOztBRFJFO0VBQ0Usa0JBQUE7RUFBb0IsYUFBQTtFQUFlLFlBQUE7RUFBYSxTQUFBO0VBQVcsU0FBQTtFQUMzRCwyQkFBQTtFQUE2QixtQkFBQTtFQUFxQixnQkFBQTtFQUNsRCw0QkFBQTtFQUE4QixtQ0FBQTtVQUFBLDJCQUFBO0FDaUJsQzs7QURoQkk7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsV0FBQTtFQUFhLE1BQUE7RUFBUSxPQUFBO0VBQ3ZELHNDQUFBO0VBQXdELHdCQUFBO0VBQ3hELHlCQUFBO0VBQ0EsZ0JBQUE7QUN1Qk47O0FEdEJNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxNQUFBO0VBQVEsT0FBQTtFQUN2RCxxQ0FBQTtBQzRCUjs7QUQxQk07RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsWUFBQTtFQUFjLFFBQUE7RUFBVSxTQUFBO0VBQzFELGdDQUFBO0VBQWtDLDhDQUFBO1VBQUEsc0NBQUE7QUNpQzFDOztBRDdCRTtFQUNFLGtCQUFBO0VBQW9CLGFBQUE7RUFBZSxZQUFBO0VBQWEsU0FBQTtFQUFXLFNBQUE7RUFDM0QsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFBeUMsZ0JBQUE7RUFDekMsVUFBQTtBQ29DSjs7QURsQ0k7RUFJRSxrQkFBQTtFQUFvQixN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QkFBQTtFQUFvQixnQ0FBQTtBQzZKeEI7O0FEM0pFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUEyQixTQUFBO0VBQVksZUFBQTtFQUFpQixpQkFBQTtFQUFvQixrQkFBQTtFQUM1RSwrQkFBQTtFQUFrQyxnQkFBQTtFQUFvQixXQUFBO0VBQWEsT0FBQTtBQ29LdkU7O0FEaEtBO0VBQ0Usa0JBQUE7RUFBb0IsTUFBQTtFQUFRLE9BQUE7RUFBUyxXQUFBO0VBQWEsWUFBQTtFQUNsRCxvREFBQTtBQ3VLRjs7QUR0S0U7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsV0FBQTtFQUFhLGdCQUFBO0VBQWtCLFNBQUE7RUFBWSxPQUFBO0VBQzVFLGtCQUFBO0VBQW9CLDBCQUFBO0FDOEt4Qjs7QUQ1S0U7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQTJCLFNBQUE7RUFBWSxlQUFBO0VBQWlCLGlCQUFBO0VBQW9CLGtCQUFBO0VBQzVFLHlCQUFBO0VBQTRCLGdCQUFBO0VBQXFCLFdBQUE7RUFBYSxPQUFBO0FDcUxsRSIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge21hcmdpbi1sZWZ0OiAwO31cbi5hbGxfd29ya19zcGFjZSB7XG4gIHdpZHRoOiAxMDAlOyBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ub25lX2NhcmRfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDQwMHB4OyBtaW4td2lkdGg6IDIyMHB4IDsgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7ICB0cmFuc2l0aW9uIDogdHJhbnNmb3JtIDFzIDtcbiAgLm9uZV9jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogMzUwcHg7IHdpZHRoOiAyMDBweDt0b3A6IDI1cHg7IGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IGJvcmRlci1yYWRpdXM6IDE1cHg7IG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC5vbmVfY2FyZF9mcm9udCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMDsgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1ncy9iYWNrX2NhcmQucG5nKTsgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMGIwYjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAuYmFja2dyb3VuZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgNSwgNSwgMC41NSk7XG4gICAgICB9XG4gICAgICBpbWd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IGF1dG87IHRvcDogNTAlOyBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlKTtmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggM3B4IGJsYWNrKSA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5vbmVfY2FyZF9iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMzUwcHg7IHdpZHRoOiAyMDBweDt0b3A6IDI1cHg7IGxlZnQ6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSgxODBkZWcpO1xuICAgIGZpbHRlciA6ZHJvcC1zaGFkb3coMnB4IDRweCA2cHggYmxhY2spIDsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgbWF0LXByb2dyZXNzLWJhciB7XG4gICAgICAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQwZDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAub25lX2NhcmRfYmFja2dyb3VuZCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDsgbGVmdDogMDsgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnByb2plY3RfZGV0YWlsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgdG9wOiAwOyBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgICAgIG9wYWNpdHk6IDA7IHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbiAgICAgIC5wcm9qZWN0X3ZpZXdfYnRuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMjAwcHg7IGhlaWdodDogNTBweDsgdG9wOiAxNTBweCA7IGxlZnQ6IDBweCA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjYTY3ZTJkIDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsIDE4MywgNDMsIDEpOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxuICAgICAgLnByb2plY3Rfdmlld19idG46aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxOyBjb2xvcjogIzJkMmQyZCA7XG4gICAgICB9XG5cbiAgICAgIC5wcm9qZWN0X3RpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1MHB4OyB0b3A6IDUwcHg7IGxlZnQ6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4OyBmb250LXNpemU6IDIwcHg7IGNvbG9yOiB3aGl0ZTsgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7ICB0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgICAgICB0ZXh0LXNoYWRvdzotMnB4IC0xcHggNXB4IGJsYWNrO1xuICAgICAgfVxuXG4gICAgICAucHJvamVjdF90ZWNoIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDBweDsgbGluZS1oZWlnaHQ6IDUwcHg7IGJvdHRvbTogMjVweDsgbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4OyBsZXR0ZXItc3BhY2luZzogMTVweDsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5vbmVfY2FyZF9iYWNrOmhvdmVyIHtcbiAgICAucHJvamVjdF9kZXRhaWwge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuXG59XG5cbi5jYXJkX3Age1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmFrZV9jYXJkcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgdG9wOiAwOyBsZWZ0OiAwOyBvdmVyZmxvdzogaGlkZGVuO1xuICAub25lX2NhcmRfZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAtNDAwcHg7IGxlZnQ6IDIwcHg7XG4gIH1cbiAgLmNhcmRfZi5jYXJkOCB7XG4gICAgLm9uZV9jYXJkIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4uaW1nX3ZpZXdlciB7XG4gIHBvc2l0aW9uIDogYWJzb2x1dGUgOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB0b3A6IDA7IGxlZnQ6IDA7IG1pbi1oZWlnaHQgOiA0MDBweCA7IG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3IgOiByZ2JhKDAsIDAsIDAsIDAuOTIpO1xuICBkaXNwbGF5IDogbm9uZSA7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1NzZweCkge1xuICAgIGhlaWdodCA6IGNhbGMoMTAwJSAtIDYwcHgpIDsgdG9wIDogNjBweCA7XG4gIH1cbiAgLmltZ19kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpOyAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTsgdG9wOiA0MHB4OyBsZWZ0OiA0MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLm9uZV9pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDsgbGVmdDogMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAuaW1hZ2VfYmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTsgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTsgdG9wOiAyMHB4OyBsZWZ0OiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IGZpbHRlcjogb3BhY2l0eSgwLjA5KTtcbiAgICAgICAgZGlzcGxheSA6IG5vbmUgO1xuICAgICAgfVxuICAgICAgbWF0LXByb2dyZXNzLXNwaW5uZXIge1xuICAgICAgICAubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLXNwaW5uZXItYnVmZmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMGQwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IGNhbGMoNTAlIC0gMjVweCk7IGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDkwJTsgaGVpZ2h0OiBhdXRvOyB0b3A6IDUwJTsgbGVmdDogNSU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjaykgOyB6LWluZGV4OiAyOyBkaXNwbGF5IDogbm9uZSA7XG4gICAgICB9XG4gICAgICBpbWcuaGVpZ2h0ZWRfcGljIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB3aWR0aDogYXV0bzsgbGVmdDogNTAlOyB0b3A6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2xvc2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogNDBweDsgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IHBhZGRpbmctcmlnaHQ6IDIwcHggOyBmb250LXNpemU6IDI1cHg7XG4gICAgaSB7XG4gICAgICBjb2xvcjogIzc3NzQ3NDsgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBpOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmRiODJjO1xuICAgIH1cbiAgfVxuXG4gIC5zbGlkZV9sZWZ0ICwgLnNsaWRlX3JpZ2h0IHtcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlIDsgd2lkdGg6IDQwcHggOyBoZWlnaHQ6IDQwcHg7IHRvcDogNTAlOyAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiA0MHB4IDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAgZm9udC1zaXplOiAzNXB4O1xuICAgIGkge1xuICAgICAgY29sb3I6ICM3Nzc0NzQ7IGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgaTpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZkYjgyYztcbiAgICB9XG4gIH1cbiAgLnNsaWRlX3JpZ2h0e1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmNvbnRyb2xfZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDQwcHggO2JvdHRvbTogMDsgbGVmdDogMDsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAuaW1hZ2VzIHtcbiAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGUgOyB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7IGhlaWdodDogMTAwJTsgbGVmdDogNDBweDsgcGFkZGluZzogMDtcblxuICAgICAgLm9uZV9pbWcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiBjYWxjKDEwMCUgLyA1ICkgOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IDA7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLmltZ19ib3JkIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiA0MCUgOyBoZWlnaHQ6IDZweDsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xuICAgICAgICAgIHRvcDogNTAlOyBsZWZ0OiA1MCU7IGFuaW1hdGlvbjogMC44cyBlYXNlLWluOyB0cmFuc2Zvcm0gOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgO1xuICAgICAgICAgIGN1cnNvciA6IHBvaW50ZXIgOyBtYXgtd2lkdGggOiAxMDBweCA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5vbmVfaW1nX3NlbGVjdGVkIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB3aWR0aDogY2FsYygxMDAlIC8gNSApIDsgIHBhZGRpbmc6IDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDsgdG9wOiAwOyB6LWluZGV4OiAyO1xuICAgICAgICAuaW1nX2JvcmQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDQwJSA7IGhlaWdodDogNnB4OyBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgYW5pbWF0aW9uOiAwLjhzIGVhc2UtaW47IHRyYW5zZm9ybSA6IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjgyYzsgbWF4LXdpZHRoIDogMTAwcHggO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuXG5cbn1cblxuLmFsbF90aGlzX2NhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzNjMzYyYiwgIzMzMzIzMik7XG4gIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaGVpZ2h0OiA1MCU7IHdpZHRoOiAxMDAlOyBmb250LXNpemU6IDE5MnB4OyB0b3A6IDIwcHggOyBsZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHJnYmEoMTgxLCAxNzUsIDE3NSwgMC4xNCkgO1xuICB9XG4gIC5jb250ZW50X3RoaXNfY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogY2FsYyg1MCUgLSA0MHB4KSA7IGJvdHRvbTogMCA7IGZvbnQtc2l6ZTogMTFweDsgbGluZS1oZWlnaHQ6IDMxcHggOyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMTgxLCAxNzUsIDE3NSwgMC42KSA7IGZvbnQtd2VpZ2h0IDogNTAwIDsgd2lkdGg6IDEwMCU7IGxlZnQ6IDA7XG4gIH1cbn1cblxuLmFsbF90aGlzX2NhcmQyIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNhOGFiYzUsICNkMmI2ZDApO1xuICBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogNTAlOyB3aWR0aDogMTAwJTsgZm9udC1zaXplOiAxNzBweDsgdG9wOiAyMHB4IDsgbGVmdDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpIDtcbiAgfVxuICAuY29udGVudF90aGlzX2NhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IGNhbGMoNTAlIC0gNDBweCkgOyBib3R0b206IDAgOyBmb250LXNpemU6IDExcHg7IGxpbmUtaGVpZ2h0OiA1MXB4IDsgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgOyBmb250LXdlaWdodCA6IDUwMCA7ICB3aWR0aDogMTAwJTsgbGVmdDogMDtcbiAgfVxufVxuIiwiLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uYWxsX3dvcmtfc3BhY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm9uZV9jYXJkX2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWluLXdpZHRoOiAyMjBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xufVxuLm9uZV9jYXJkX2RpdiAub25lX2NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLm9uZV9jYXJkX2RpdiAub25lX2NhcmQgLm9uZV9jYXJkX2Zyb250IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1ncy9iYWNrX2NhcmQucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIwYjBiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm9uZV9jYXJkX2RpdiAub25lX2NhcmQgLm9uZV9jYXJkX2Zyb250IC5iYWNrZ3JvdW5kZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA1LCA1LCAwLjU1KTtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkIC5vbmVfY2FyZF9mcm9udCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDNweCBibGFjayk7XG59XG4ub25lX2NhcmRfZGl2IC5vbmVfY2FyZF9iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHRvcDogMjVweDtcbiAgbGVmdDogNTAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWSgxODBkZWcpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4IGJsYWNrKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMjtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgbWF0LXByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgbWF0LXByb2dyZXNzLWJhciAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQwZDAgIWltcG9ydGFudDtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLm9uZV9jYXJkX2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIC5wcm9qZWN0X3ZpZXdfYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2E2N2UyZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjcyYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIC5wcm9qZWN0X3ZpZXdfYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICMyZDJkMmQ7XG59XG4ub25lX2NhcmRfZGl2IC5vbmVfY2FyZF9iYWNrIC5wcm9qZWN0X2RldGFpbCAucHJvamVjdF90aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkluZGllIEZsb3dlclwiLCBjdXJzaXZlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAtMXB4IDVweCBibGFjaztcbn1cbi5vbmVfY2FyZF9kaXYgLm9uZV9jYXJkX2JhY2sgLnByb2plY3RfZGV0YWlsIC5wcm9qZWN0X3RlY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm90dG9tOiAyNXB4O1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLm9uZV9jYXJkX2RpdiAub25lX2NhcmRfYmFjazpob3ZlciAucHJvamVjdF9kZXRhaWwge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2FyZF9wIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZha2VfY2FyZHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mYWtlX2NhcmRzIC5vbmVfY2FyZF9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQwMHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuLmZha2VfY2FyZHMgLmNhcmRfZi5jYXJkOCAub25lX2NhcmQge1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCB3aGl0ZTtcbn1cblxuLmltZ192aWV3ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45Mik7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW1nX3ZpZXdlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICB0b3A6IDYwcHg7XG4gIH1cbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IC5vbmVfaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWdfdmlld2VyIC5pbWdfZGl2IC5vbmVfaW1hZ2UgLmltYWdlX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBmaWx0ZXI6IG9wYWNpdHkoMC4wOSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIG1hdC1wcm9ncmVzcy1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMjVweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIG1hdC1wcm9ncmVzcy1zcGlubmVyIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMGQwICFpbXBvcnRhbnQ7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjayk7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW1nX3ZpZXdlciAuaW1nX2RpdiAub25lX2ltYWdlIGltZy5oZWlnaHRlZF9waWMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmltZ192aWV3ZXIgLmNsb3NlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5pbWdfdmlld2VyIC5jbG9zZXIgaSB7XG4gIGNvbG9yOiAjNzc3NDc0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1nX3ZpZXdlciAuY2xvc2VyIGk6aG92ZXIge1xuICBjb2xvcjogI2ZkYjgyYztcbn1cbi5pbWdfdmlld2VyIC5zbGlkZV9sZWZ0LCAuaW1nX3ZpZXdlciAuc2xpZGVfcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRvcDogNTAlO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuLmltZ192aWV3ZXIgLnNsaWRlX2xlZnQgaSwgLmltZ192aWV3ZXIgLnNsaWRlX3JpZ2h0IGkge1xuICBjb2xvcjogIzc3NzQ3NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltZ192aWV3ZXIgLnNsaWRlX2xlZnQgaTpob3ZlciwgLmltZ192aWV3ZXIgLnNsaWRlX3JpZ2h0IGk6aG92ZXIge1xuICBjb2xvcjogI2ZkYjgyYztcbn1cbi5pbWdfdmlld2VyIC5zbGlkZV9yaWdodCB7XG4gIHJpZ2h0OiAwO1xufVxuLmltZ192aWV3ZXIgLmNvbnRyb2xfZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nX3ZpZXdlciAuY29udHJvbF9kaXYgLmltYWdlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDQwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uaW1nX3ZpZXdlciAuY29udHJvbF9kaXYgLmltYWdlcyAub25lX2ltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDUgKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW1nX3ZpZXdlciAuY29udHJvbF9kaXYgLmltYWdlcyAub25lX2ltZyAuaW1nX2JvcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGFuaW1hdGlvbjogMC44cyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuLmltZ192aWV3ZXIgLmNvbnRyb2xfZGl2IC5pbWFnZXMgLm9uZV9pbWdfc2VsZWN0ZWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA1ICk7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuLmltZ192aWV3ZXIgLmNvbnRyb2xfZGl2IC5pbWFnZXMgLm9uZV9pbWdfc2VsZWN0ZWQgLmltZ19ib3JkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBhbmltYXRpb246IDAuOHMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGI4MmM7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5hbGxfdGhpc19jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzNjMzYyYiwgIzMzMzIzMik7XG59XG4uYWxsX3RoaXNfY2FyZCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTkycHg7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgxODEsIDE3NSwgMTc1LCAwLjE0KTtcbn1cbi5hbGxfdGhpc19jYXJkIC5jb250ZW50X3RoaXNfY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMTgxLCAxNzUsIDE3NSwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG5cbi5hbGxfdGhpc19jYXJkMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNhOGFiYzUsICNkMmI2ZDApO1xufVxuLmFsbF90aGlzX2NhcmQyIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNzBweDtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzEpO1xufVxuLmFsbF90aGlzX2NhcmQyIC5jb250ZW50X3RoaXNfY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDUxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG59Il19 */");

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
        };
        this.esi = {
            name: "ESI",
            imgs_path: 'assets/imgs/esi/',
            background: "background.png",
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
                },
                {
                    name: "6.png",
                    width: true
                }
            ]
        };
        this.sits = {
            name: "SITS",
            imgs_path: 'assets/imgs/sits/',
            background: "background.png",
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
                },
                {
                    name: "6.png",
                    width: true
                }
            ]
        };
        this.dictili = {
            name: "Dictili",
            imgs_path: 'assets/imgs/dictili/',
            background: "background.png",
            imgs: [
                {
                    name: "0.png",
                    width: true
                },
                {
                    name: "1.png",
                    width: false
                },
                {
                    name: "1_1.png",
                    width: true
                },
                {
                    name: "2.png",
                    width: true
                },
                {
                    name: "3_1.png",
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
                },
                {
                    name: "6.png",
                    width: true
                },
                {
                    name: "7.png",
                    width: true
                },
                {
                    name: "8.png",
                    width: true
                },
            ]
        };
        this.portfolio = {
            name: "Portfolio",
            imgs_path: 'assets/imgs/portefolio/',
            background: "background.png",
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
                }
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
                {
                    name: "0.png",
                    width: false
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
                }
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
    }
    OnViewWork(selected_work) {
        this.selected_work = selected_work;
        this.current_img = 0;
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
            let timer = 300;
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() < 768) {
                timer = 0;
            }
            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card1").animate({
                'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card1").offset()).top + 'px',
                'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card1").offset()).left + 'px'
            }, timer, function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                    if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card1").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card1").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card1").offset()).left + 'px' });
                    }
                });
                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card2").animate({
                    'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card2").offset()).top + 'px',
                    'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card2").offset()).left + 'px'
                }, timer, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                        if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card2").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card2").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card2").offset()).left + 'px' });
                        }
                    });
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card3").animate({
                        'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card3").offset()).top + 'px',
                        'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card3").offset()).left + 'px'
                    }, timer, function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                            if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card3").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card3").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card3").offset()).left + 'px' });
                            }
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card4").animate({
                            'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card4").offset()).top + 'px',
                            'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card4").offset()).left + 'px'
                        }, timer, function () {
                            jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                                if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card4").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card4").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card4").offset()).left + 'px' });
                                }
                            });
                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card5").animate({
                                'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card5").offset()).top + 'px',
                                'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card5").offset()).left + 'px'
                            }, timer, function () {
                                jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                                    if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card5").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card5").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card5").offset()).left + 'px' });
                                    }
                                });
                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card6").animate({
                                    'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card6").offset()).top + 'px',
                                    'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card6").offset()).left + 'px'
                                }, timer, function () {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                                        if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card6").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card6").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card6").offset()).left + 'px' });
                                        }
                                    });
                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card7").animate({
                                        'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card7").offset()).top + 'px',
                                        'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card7").offset()).left + 'px'
                                    }, timer, function () {
                                        jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(() => {
                                            if (jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards") != undefined) {
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card7").css({ 'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card7").offset()).top + 'px', 'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card7").offset()).left + 'px' });
                                            }
                                        });
                                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card8 .one_card").css({ "box-shadow": "0 0 0px 0px white" });
                                        jquery__WEBPACK_IMPORTED_MODULE_2__(".card_f.card8").animate({
                                            'top': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card8").offset()).top + 'px',
                                            'left': (jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p.card8").offset()).left + 'px'
                                        }, timer, function () {
                                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_p").css("opacity", "1");
                                            jquery__WEBPACK_IMPORTED_MODULE_2__(".fake_cards").remove();
                                            jquery__WEBPACK_IMPORTED_MODULE_2__(".card_r").ready(() => {
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card_r").css('transform', 'rotateY(180deg)');
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card8 .one_card").mouseenter(() => {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card8").css('transform', 'rotateY(180deg)');
                                                });
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card8").mouseleave(() => {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card8").css('transform', 'rotateY(0deg)');
                                                });
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card5 .one_card").mouseenter(() => {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card5").css('transform', 'rotateY(180deg)');
                                                });
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".card5").mouseleave(() => {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2__(".card5").css('transform', 'rotateY(0deg)');
                                                });
                                                jquery__WEBPACK_IMPORTED_MODULE_2__(".one_card_background").fadeIn(500);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
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













const router = [
    {
        path: '', component: _work_component__WEBPACK_IMPORTED_MODULE_12__["WorkComponent"]
    }
];
let WorkModule = class WorkModule {
};
WorkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_work_component__WEBPACK_IMPORTED_MODULE_12__["WorkComponent"]],
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