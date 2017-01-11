$(function(){
    banner('.swiper-container');
     var topSlider=new Swiper('.swiper-container1', {
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: 3000,
            loop: true,
            slidesPerView : 5,
            spaceBetween : 20,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            autoplayDisableOnInteraction: true
        });
     /**
      * nav
      */
     // $("#nav-memu").find('.nav-memu-item').hover(function(){
     //    var _this=$(this);
     //    _this.find('.nav-sub-memu').addClass('cur-nav').parent().siblings().children().removeClass('cur-nav');
     //     _this.find('.nav-memu-page').stop(true,true).slideDown(400);
     // },function(){
     //    var _this=$(this);
     //    // var
     //    // if()
     //    _this.find('.nav-sub-memu').addClass('cur-nav');
     //    _this.find('.nav-memu-page').stop(true,true).slideUp("fast");

     // });
     // $('.nav-sub-item').hover(function(){
     //    $(this).children().addClass('cur-sub-nav').parent().siblings().children().removeClass('cur-sub-nav');
     // })
     /**
      * slide
      */
   $('.banner .swiper-slide').hover(function(){
      $(this).find('img').attr('src',"img/bg1.png").addClass('selectimg');
      $(this).find('a').append('<span class="more fs12">MORE</span>');
   },function(){
      $(this).find('img').attr('src',"img/bg.png").removeClass('selectimg');
       $(this).find('.more').remove();
   });
   //prev
  select('.banner .swiper-button-prev','url(../jsy/img/left-h.png)','url(../jsy/img/left.png)');
  //next
  select('.banner .swiper-button-next','url(../jsy/img/right-h.png)','url(../jsy/img/right.png)');
  //hold-prev、hold-next
  // select('.hold-prev','url(../jsy/img/left-h.png)','url(../jsy/img/left.png)');
  // select('.hold-next','url(../jsy/img/left-h.png)','url(../jsy/img/left.png)');
  //qq wx
    hover('.h-wx','wx','wx-h');
    hover('.h-qq','qq','qq-h');
});
function hover(className,inRemoveUrl,outAddUrl){
    $(className).hover(function(){
      $(this).removeClass(inRemoveUrl);
      $(this).addClass(outAddUrl);
   },function(){
      $(this).removeClass(outAddUrl);
      $(this).addClass(inRemoveUrl);
   });
}
function select(className,newurl,oldurl,type){
    $(className).hover(function(){
        $(this).css('background-image',newurl);
   },function(){
        $(this).css('background-image',oldurl);
   });
};
function banner(className) {
     var topSlider=new Swiper(className, {
            pagination : '.swiper-pagination',
            paginationHide :true,
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: 6000,
            loop: true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            autoplayDisableOnInteraction: true
        });
}
function AddFavorite(siteUrl,siteTitle){
   siteUrl = encodeURI(siteUrl);
   var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd': 'CTRL';
  if(document.all){
    try{
      window.external.addFavorite(siteUrl,siteTitle);
    }catch(e){
      alert("加入收藏失败，请使用"+ctrl+"+D进行添加！");
    }
  }else if(window.sidebar){
    window.sidebar.addPanel(siteTitle, siteUrl, "");
  }else{
    alert("加入收藏失败，请使用"+ctrl+"+D进行添加！");
  }
}
