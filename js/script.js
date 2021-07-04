//event pada saat link di klik

$('.page-scroll').on('click', function(e){
	
	//ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen yg bersangkutan
	var elemenTujuan = $(tujuan);
	
	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	
}, 1000, 'easeInOutExpo');

e.preventDefault();

});


//parallax
// about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
		});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	$('.jumbotron span').css({
		'transform' : 'translate(0px, '+ wScroll/3 +'%)'
	});




	// portfolio
	if(wScroll > $('.gfriend').offset().top - 200) {
		$('.gfriend .thumbnail').each(function(i) {
			setTimeout(function(){
		$('.gfriend .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
			});}

		});


$('document').ready(function(){
			var typed = new Typed('#jum',{
				strings:["Fandy Rachmatulloh","Web Programming"],
				backSpeed: 90,
				typeSpeed: 90,
				loop: true
			});
		});



var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


	
	

