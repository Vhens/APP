/**
 *品牌商
 */
$(function(){
        var cur_li=$('#tab li');
        cur_li.on('touchstart',function(){
        var _this=$(this).index();
        $(this).children().addClass('cur-tab').parent().siblings().children().removeClass('cur-tab');
        $('.page').slideUp('2000').eq(_this).slideDown('2000');
        //加载数据
        if(_this==0){
            console.log(0)
        }else if(_this==1){
            console.log(1)
        }else{
            console.log(2)
        }
    });
});