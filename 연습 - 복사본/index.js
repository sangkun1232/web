$('.wrap').fullpage({
    navigation:true,
    anchors:['1page','2page', '3page', '4page','5page','6page']
    
});

$('.img1').colorbox({
    rel : 'img1', width:1136 , height:768
   

});
$('.img2').colorbox({
    rel : 'img2', width:1280 , height:720
   

});

$('.youtube').colorbox({
      iframe:true, innerWidth:1200 , innerHeight:720 ,rel:'img1' 
});