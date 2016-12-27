$(function(){var i=$("#tab li");i.on("touchstart",function(){var i=$(this).index();$(this).children().addClass("cur-tab").parent().siblings().children().removeClass("cur-tab"),$(".page").slideUp("2000").eq(i).slideDown("2000"),console.log(0==i?0:1==i?1:2)})});

//@koala-prepend '../ubt/ubt_order.js'
//@koala-prepend '../ubt/ubt_shoppingcar.js'
