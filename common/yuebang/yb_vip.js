$(".vip_box ul li").on("click",function(){
    $(this).children("p").addClass("cur-dredge");
    $(this).siblings().children("p").removeClass("cur-dredge");
    var month,price;
    month=$(this).find("#coin_month").text();
    price=$(this).find("#coin_price").text();
    $('#month').val(month);
    $('#price').val(price);
})
