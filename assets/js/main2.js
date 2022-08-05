// // document ready than run code
// $(document).ready(function () {
//   // element selector
//   $("p").click(function () {
//     console.log("jQuery works", this);
//   });

//   // class selector
//   $(".first").click(function () {
//     console.log("u click first class");
//   });
//   // id selector
//   $("#button").click(function () {
//     $(".first").hide();
//   });

//   // click event
//   $("h1").click(function () {
//     $(this).hide();
//   });
// });
// // dblclick
// $("h2").dblclick(function () {
//   $(this).hide();
// });
// $('h1').mouseenter(function(){
//     $('.mousenter').text('mousenter huwa');
//   });
// // on methods multiple event handlers
// $('.onmethod').on({
//     mouseenter: function(){
//       $(this).css("background-color", "lightgray");
//     },
//     mouseleave: function(){
//       $(this).css("background-color", "lightblue");
//     },
//     click: function(){
//       $(this).css("background-color", "yellow");
//     }
//   });

//   $("button").click(function(){
//     $("#div1").fadeIn();
//     $("#div2").fadeIn("slow");
//     $("#div3").fadeIn(3000);
//   });

//   $("button").click(function(){
//     $("#p1").css("color", "red").slideUp(100).slideDown(100);
//   });

function readyFn() {
  console.log('ready!');
  $('#myId'); // note IDs must be unique per page
  $('div.myClass'); // performance improves if you specify element type
  $('input[name=first_name]'); // beware, this can be very slow
  $('#contents ul.people li');

  $('a.external:first');
  $('tr:odd');
  $('#myForm :input');   // select all input-like elements in a form
  $('div:visible');
  $('div:gt(2)');        // all except the first three divs
  $('div:animated'); 


  
}

$(document).ready(readyFn);
