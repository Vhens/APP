/**
 * tab
 */
(function(){
    /**
     * 商品列表tab
     * @param  {[type]} ){                     var _this [description]
     * @return {[type]}     [description]
     */
    $('#list-tab .tab-item').on('touchstart',function(){
        var _this= $(this);
        _this.children().addClass('tab-act').parent().siblings().children().removeClass('tab-act');
        if(!_this.find('.arrow').hasClass('active')){
            _this.find('.arrow').addClass('active');
        }else{
            _this.find('.arrow').removeClass('active');
        };
    });
    /**
     * 商品详情tab
     */
     $('#detail-tab .tab-item,#reg-tab .tab-item').on('touchstart',function(){
        var _this= $(this);
        _this.children().addClass('tab-act').parent().siblings().children().removeClass('tab-act');
        $('#good-detail .page').slideUp().eq(_this.index()).slideDown();
        $('#reg .page').fadeIn().eq(_this.index()).fadeOut();
        $('#seller-list .page').slideUp().eq(_this.index()).slideDown();
    });
}());