$(".profile .profile_left ul li").on("click",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

$(".left-memu3 .news_left ul li").on("click",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});
$(".left-memu2 .contact_left ul li").on("click",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

// $(".left-memu .product_left ul li").each(function(){
//     var num=0;
//     $(this).children("a").on("click",function(){
//         num++;
//         if(num%2==0){
//             $(this).parent().children("p").addClass("hide").removeClass("show");
//             num=0;
//         }else{
//             $(this).parent().children("p").addClass("show").removeClass("hide");
//             num=1;
//         }
//     })
// })
// $(".left-memu .product_left ul li p a").on("click",function(){
//     $(this).addClass("active");
//     $(this).siblings().removeClass("active");
//     $(this).parent().parent().siblings().children("p").children("a").removeClass("active");
// })
// $(".left-memu .product_right .productInfo ul li").on("mouseover",function(){
//     $(this).children("p").addClass("active");
//     $(this).siblings().children("p").removeClass("active");
// });
$('.left-memu .product_left li a').on('click',function(){
    var _this=$(this);
    if(_this.siblings('.spread').attr('src')=='img/add.png'){
        _this.siblings('.spread').attr('src','img/red.png').css('height','3px');
        _this.siblings('p').stop(true,true).slideDown("slow").parent().siblings('').children('p').slideUp("slow").siblings('.spread').attr('src','img/add.png').css('height','12px');
    }else{
        _this.siblings('.spread').attr('src','img/add.png').css('height','12px');
        _this.siblings('p').stop(true,true).slideUp("slow");
    }
});
$(".left-memu1.case_right .caseInfo ul li").on("mouseover",function(){
    $(this).children("p").addClass("active");
    $(this).siblings().children("p").removeClass("active");
});
$(".left-memu3 .news_right .newsInfo ul li").on("mouseover",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});