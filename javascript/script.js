/* $('.handle').on('click', function(){
	$('nav ul').toggleClass('show');
}); */



	$('#nav-icon1').on("click",function(){
		$(this).toggleClass('open');
		$('nav ul').toggleClass('show');
	});
