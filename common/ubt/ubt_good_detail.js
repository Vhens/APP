(function(){
    /**
     * 添加、减少数量
     */
    var add=$('#add');
    var lessen=$('#lessen');
    var _val=$('#val');
    var num=1;
    var arr=[];
    var str='';
    var str1='';
    var str2='';
    add.on('touchstart',function(){
        num++;
        _val.text(num);
    });
    lessen.on('touchstart',function(){
        if(_val.text()<=1){
            _val.text(num);
            return false;
        }else{
            num--;
            _val.text(num);
        }
    });
    /**
     *下单
     */
    var orderDown=$('#order-down');
    var sreen_h=$(window).height();
    var container=$('.container');

     $('#buy-btn').on('touchstart',function(){
        orderDown.css({
            'height':sreen_h
        });
        orderDown.fadeIn();
        container.hide();
     });
    $('#sure-btn,#close').on('touchstart',function(){
        orderDown.fadeOut();
        container.fadeIn();
     });
    $('#color li,#size li').on('touchstart',function(){
        $(this).children().addClass('select-color').parent().siblings().children().removeClass('select-color');
    });
    $('#color li').on('touchstart',function(){
        str1=$(this).children().text();
    });
     $('#size li').on('touchstart',function(){
        str2=$(this).children().text();
    });
    $('#sure-btn').on('touchstart',function(){
        var str3=_val.text();
        str=str1+" "+str2+" "+str3;
        arr=str.split(' ');
        var new_arr=$.grep(arr, function(n) {return $.trim(n).length > 0;});
        $('#order-val').val(new_arr)
    });
}());
