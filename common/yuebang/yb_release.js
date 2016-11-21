$(".release .choose a").on("click",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});
$(".status").on("click",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

