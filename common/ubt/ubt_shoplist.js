/**
 * s商家列表
 * @return {[type]} [description]
 */
(function(){
    /**
     * 地址刷选
     */
    $('#search-btn').on('touchstart',function(){
       $('#pop').toggle(function(){
            $(this).addClass('fadeIn').stop(true);
       },function(){
            $(this).addClass('fadeOut').stop(true);
       });
    });
}());