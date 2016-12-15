//@koala-prepend 'img.js'
//@koala-prepend '../plugins/mobileBUGFix.mini.js'
//@koala-prepend '../plugins/localResizeIMG.js'
//  $(function(){
//     upload(".upload");
//   });
//   function upload(className){

//         var current = $(null)
//       $('input:file').on('click',function(e){
//         e.stopPropagation()
//         current = $(this).parent('p')
//       })

//       $(className).on('click','.lazyUpload',function(){
//         current = $(this)
//        console.log(current)
//         $(this).find('input').trigger('click')
//       })


//       $('input:file').localResizeIMG({
//         //不处理width时,保留原图尺寸
// //             width: 400,
//              quality: 0.5,

//              success: function (result) {

//              var image = new Image();

//              image.src = result.base64;
//                //$('.lazyUpload img') 是用户确认时需要上传到服务器的图片

//                  current.addClass('lazyUpload').find('img').replaceWith(image)
//                  //图片尺寸重调
//                img(className,current)
//              }
//          })
//         //直接上传该字符串格式的图片,在后台如需转回图片格式,参http://www.cnblogs.com/coco1s/p/4375774.html  --解码部分
//   }