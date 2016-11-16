$(".release .choose a").on("click",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});
$(".release .region a").on("click",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});
$(".release .choose .radio").on("click",function(){
    $(this).children("label").addClass("on");
    $(this).siblings().children("label").removeClass("on");
    $(this).children("label").find("span").removeClass("off");
    $(this).siblings().children("label").find("span").addClass("off");
    $(this).children("label").find("span").addClass("on");
    $(this).siblings().children("label").find("span").removeClass("on");
});
