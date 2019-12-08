


$(document).ready(function(){
		$('.main_image').slick(
			{
				slidesToShow:1,
				slidesToScroll:1,
				autoplay:true,
				autoplaySpeed:2000,
			});
	});


	

	$(".language>span").click(()=>{
		$(".submenu").toggle(100);
 		$("#first_span").toggle();
 		$("#second_span").toggle();
});

$(".hamburger").click(()=>{
	$(".navigation").toggle();
});



