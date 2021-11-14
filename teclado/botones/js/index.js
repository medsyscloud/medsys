// Nexus 4 Pure CSS Design
// Author : Erhan Basa ( erhanbasa.com )
// http://erhanbasa.com/blog/css-ile-nexus-4/

$(document).ready(function(){
	
	/*	Current Tab 	*/
	$('.phone-tabs li a').click(function(){
			$('.phone-tabs li').removeClass('current');
			$(this).parent().addClass('current');
	});

	/*	Simple Tab 	*/
	var tabContents = $('.phone-tab-contents');
	$('.phone-tabs .getphone').click(function(){
		tabContents.removeClass('getpeoples');
		tabContents.removeClass('getclock');
	});

	$('.phone-tabs .getclock').click(function(){
		tabContents.removeClass('getpeoples');
		tabContents.addClass('getclock');
	});

	$('.phone-tabs .getpeoples').click(function(){
		tabContents.removeClass('getclock');
		tabContents.addClass('getpeoples');
	});

	/*	Delete */
	$('.delete-btn').click(function(){
		var numbers =  $('.number-area .numbers').text();	
		var numbers2 =  $('.number-area .numbers').text().length;
		
		if (numbers2 == 1 || numbers2 == 4 || numbers2 == 7 || numbers2 == 10 || numbers2 == 13)
			{
				borrar = 1;
			}
			else
			{
				borrar = 2;
			}	
		$('.number-area .numbers').text(numbers.substr(0,numbers2-borrar));
		
	});



					/*	Pusher	*/
					var pusher = {
						number : function(num) 
							{
								$('.numbers-container .pushed' + num + '').click(function()
									{
											var longitud =  $('.number-area .numbers').text().length;
									
											if (longitud <= 13)
											{
													if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
														{
															xxx = " ";
														}
														else
														{
															xxx = "";
														}	
				
														$('.number-area .numbers').append(''+num+xxx);
												
											}
									}
								);		
							}
					}




	pusher.number(1);
	pusher.number(2);
	pusher.number(3);
	pusher.number(4);
	pusher.number(5);
	pusher.number(6);
	pusher.number(7);
	pusher.number(8);
	pusher.number(9);
	pusher.number(0);




	$('.numbers-container .pushedasterisk').click(function(){
		$('.number-area .numbers').append('*');
	});	

	$('.numbers-container .pushednumber').click(function(){
		$('.number-area .numbers').append('#');
	});	



});





	function borrarnum() {

		var numbers =  $('.number-area .numbers').text();	
		var numbers2 =  $('.number-area .numbers').text().length;
		
		if (numbers2 == 1 || numbers2 == 4 || numbers2 == 7 || numbers2 == 10 || numbers2 == 13)
			{
				borrar = 1;
			}
			else
			{
				borrar = 2;
			}	
		$('.number-area .numbers').text(numbers.substr(0,numbers2-borrar));

	}





	function red1() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+1+xxx);
				
			}
	}
	
	function red2() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+2+xxx);
				
			}
	}	
	
	function red3() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+3+xxx);
				
			}
	}
	
	function red4() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+4+xxx);
				
			}
	}
	
	
	function red5() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+5+xxx);
				
			}
	}	
	
	
	function red6() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+6+xxx);
				
			}
	}	
	
	function red7() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+7+xxx);
				
			}
	}
	
	
	function red8() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+8+xxx);
				
			}
	}	
	
	function red9() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+9+xxx);
				
			}
	}	
	
	
	function red0() {
			var longitud =  $('.number-area .numbers').text().length;
			if (longitud <= 13)
			{
					if (longitud == 1 || longitud == 4 || longitud == 7 || longitud == 10 || longitud == 13)
						{
							xxx = " ";
						}
						else
						{
							xxx = "";
						}	

						$('.number-area .numbers').append(''+0+xxx);
				
			}
	}