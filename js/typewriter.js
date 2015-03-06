// // $(document).ready(function(){
// //   wordCount = 0;
// //   charCount = 0;
// //   function typeWriter(){
// //     var elements = $('.typeWriter .typeWriterEl');
// //     for(var i = 0; i < elements.length; i++){
// //       var el = elements[i].innerHTML;
// //       for(var j = 0; j < el.length; j++){
// //         var char = el.substring(0, j);
// //         console.log(char);
// //         $('.typeWriter').html(char);
// //       }
// //     }
// //   }

// //   typeWriter();
// // });

// function type() {
//     var str = text.substr(0, currentChar);
//     var last = str.substr(str.length - 1, str.length);
//     if (last != '<' && last != '>' & last != '/') {
//         $(".typeWriter").html(str);
//     }
//     currentChar++;
//     if (currentChar <= text.length) {
//         if (last == '<') {
//             htmltag = true;
//         } else if (last == '>') {
//             htmltag = false;
//         }
//         if (htmltag) {
//             setTimeout(type, 1);
//         } else {
//             setTimeout(type, 70);
//         }
//     }
// }

// $(document).ready(function () {
//     text = $(".typeWriter").html();
//     currentChar = 1;
//     htmltag = false;
//     cache = '';
//     $(".typeWriter").html("");
//     setTimeout(type, 100);
// });