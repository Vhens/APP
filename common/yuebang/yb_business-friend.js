/**
 * 商友圈
 */
$(function(){
    var status=1;
    $("#love").on('touchstart',function(){
        if(status==1){
            $(this).attr('src','img/love.png');
            status=2;
        }else{
            $(this).attr('src','img/love-h.png');
            status=1;
        };
    });
    $("#msg").on('touchstart',function(){
        var _this= $('input[type="text"]');
        _this.keyup();
        _this.keydown(function(e){
             if(event.ctrlKey && event.which == 13){
                 $('#txt_val').text(_this.val());
             }
        })
    });
});