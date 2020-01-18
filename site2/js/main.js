


$(function(){
    $("#seeyou").fadeIn(1500);
    $("#seeyou").fadeOut(3000);

    $("#back_img").fadeIn(3000);

    $("main").fadeIn(8000);





  window.addEventListener("scroll", () => {
    $("#pagetop").fadeIn(4000);
  });






});

// $(function(){
//   var count = setInterval(changeImg, 1000);
//   i = 1;
//   function changeImg(){
//     $("#animateField").children("img").attr("src","images/onpu" + i + ".jpg");
//     if(i <= 3){
//       i++;
//     }else{
//       i = 1;
//     }

// });




  // $(function(){
  //     // 「ページトップへ戻るボタン」の要素を隠します
  //     $('#pagetop').hide();
  //     // スクロールした場合のアクションが記されています
  //     $(window).scroll(function(){
  //         // スクロール位置が200pxを超えた場合に「ページトップへ戻るボタン」をフェードインで出現させる
  //         if ($(this).scrollTop() &gt; 200) {
  //             $('#pagetop').fadeIn();
  //         }
  //         // スクロール位置が200px以下の場合は「ページトップへ戻るボタン」を消しておく（フェードアウトで消える）
  //         else {
  //             $('#pagetop').fadeOut();
  //         }
  //     });
  //     // 「ページトップへ戻るボタン」をクリックした場合のページトップへ戻るスピードの速さが記されています
  //     $('#pagetop').click(function(){
  //         $('html,body').animate({
  //             scrollTop: 0 }, 500);
  //         return false;
  //     });
  // });
