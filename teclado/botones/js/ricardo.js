	function borrarnum() {


		var numbers =  $('.number-area .numbers').text();	
		var numbers2 =  $('.number-area .numbers').text().length;
					
	
		if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
		{
			//alert("xxx");
			return;
		}

	
	
					
		if (numbers2 == 1 || numbers2 == 4 || numbers2 == 7 || numbers2 == 10 || numbers2 == 13)
			{
				borrar = 1;
			}
			else
			{
				borrar = 2;
			}	
		$('.number-area .numbers').text(numbers.substr(0,numbers2-borrar));
		
	
		
		
		if (numbers2 < 2)
		{
			
			//document.body.style.fontSize="24px"
			//document.getElementById('numbers').style.color= '#ff0000'; 
			document.getElementById('numbers').style.fontSize= '28px'; 
			document.getElementById('numbers').style.paddingTop= '15px';
			document.getElementById('numbers').style.height= '35px';
			document.getElementById('numbers').style.color= '#99B3CC';
			$('.number-area .numbers').text('INGRESE SU SERVIDOR');
			//alert("xxx");
		}		
	
			
			
	}





	function red1() {
			var longitud =  $('.number-area .numbers').text().length;
			
			
			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
				
			}
			longitud =  $('.number-area .numbers').text().length;


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
			


			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
			}
			longitud =  $('.number-area .numbers').text().length;




			
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
			
			
			
			
			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
			}
			longitud =  $('.number-area .numbers').text().length;
			
			
			
			
			
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
			
			
			
			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
			}
			longitud =  $('.number-area .numbers').text().length;
			
			
			
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
			
			
			
			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
			}
			longitud =  $('.number-area .numbers').text().length;
			
			
			
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
			
			
			
			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
			}
			longitud =  $('.number-area .numbers').text().length;
			
			
			
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
			
			
			
			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
			}
			longitud =  $('.number-area .numbers').text().length;
			
			
			
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
			
			
			
			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
			}
			longitud =  $('.number-area .numbers').text().length;
			
			
			
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
			
			
			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
			}
			longitud =  $('.number-area .numbers').text().length;
			
			
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
			
			
			if ($('.number-area .numbers').text() == "INGRESE SU SERVIDOR")
			{
				//alert("xxx");
				$('.number-area .numbers').text('');
				document.getElementById('numbers').style.fontSize= '50px'; 
				document.getElementById('numbers').style.paddingTop= '0px';
				document.getElementById('numbers').style.height= '50px';
				document.getElementById('numbers').style.color= '#ffffff';
			}
			longitud =  $('.number-area .numbers').text().length;
			
			
			
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
		
			if ($('.number-area .numbers').text() != "INGRESE SU SERVIDOR")
			{
				// if ($('.number-area .numbers').text() == "3")
				// {
				// 	location= 'http://www.medsyscloud003.byethost11.com/medsysweb/login.php';
				// }
				switch ($('.number-area .numbers').text()){
					case "1":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb01/login.php';
					break;

					case "2":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb02/login.php';
					break;

					case "3":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb03/login.php';
					break;

					case "4":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb04/login.php';
					break;

					case "5":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb05/login.php';
					break;

					case "6":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb06/login.php';
					break;

					case "7":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb07/login.php';
					break;

					case "8":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb08/login.php';
					break;

					case "9":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb09/login.php';
					break;

					case "10 ":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb10/login.php';
					break;

					case "11 ":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb11/login.php';
					break;

					case "12 ":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb12/login.php';
					break;

					case "14 ":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb14/login.php';
					break;

					case "15 ":
					location= 'https://www.medsyscloud002.byethost8.com/medsysweb15/login.php';
					break;

					default:
					//location= 'teclado/default_server.html';
					break;
				}

			}		
		
		//location= 'http://cliobox.hol.es/code/index.php?var1=' + Number(numbers.replace(/\s/g,''));

	}	