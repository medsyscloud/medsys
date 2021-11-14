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
	
	
	function iracodigo() {
		var numbers =  $('.number-area .numbers').text();
		var longitud =  $('.number-area .numbers').text().length;
		//document.writeln(numbers.replace(/\s/g,''));
		//location= '/' + numbers.replace(/\s/g,'');
		location= 'http://cliobox.hol.es/code/index.php?var1=' + Number(numbers.replace(/\s/g,''));
	}	