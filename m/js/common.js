$(document).ready(function(){
	//아이원소프트 모바일 김진수 18.05.09

	var innerH = $('body').height();
	var dep1 = $('.depth1 > li'); // depth1
	var dep2 = $('.depth2');

	//gnb 높이설정
	$('.gnb').css({'height':innerH});
	$('.depth1').css({'height': '100' + '%'});

	//gnb 실행
	$('.gnb_btn').click(function(){
		lnbClose();
		$('.black').css({'display':'block'}); //body 어둡게
		$('.gnb').stop().animate({'right':0},'200');
	})

	//gnb 닫기
	$('.close_btn').click(function(){
		$('.black').css({'display':'none'}); //body 밝게
		$('.gnb').stop().animate({'right':-360},'50');
		dep2.removeClass('active').hide();
	});
	$('.black').click(function(){
		$('.black').css({'display':'none'}); //body 밝게
		$('.gnb').stop().animate({'right':-360},'50');
		dep2.removeClass('active').hide();
	});

	//gnb 토글서브메뉴
	dep1.click(function(){
		var clkList = $(this).children('ul');
		if(clkList.hasClass('active')) {}
		else {
			//선택한 li의 서브메뉴가 펼쳐져있지 않을때
			dep2.removeClass('active');
			clkList.slideDown();
		}
		$(this).children('ul').toggleClass('active').slideDown();
		dep2.not('.active').slideUp();
	})

	//lnb
	$('.lnb_sub01').click(function(){ //해당하는 서브메뉴 펼쳐지게,열려있는건 접히게
		$('.lnb_sub02').children('dd').slideUp();
		$(this).children('dd').slideToggle(300);
	})
	$('.lnb_sub02').click(function(){ //해당하는 서브메뉴 펼쳐지게,열려있는건 접히게
		$('.lnb_sub01').children('dd').slideUp();
		$(this).children('dd').slideToggle(300);
	})
	$('.container_wrap').click(function asd(){ //본문클릭했을때 접히게
		$('.lnb_sub02').children('dd').slideUp();
		$('.lnb_sub01').children('dd').slideUp();
	})
})

function lnbClose() {
	$('.lnb_sub02').children('dd').slideUp(200);
	$('.lnb_sub01').children('dd').slideUp(200);
}
