function calcular (){
			var peso = document.getElementById('peso').value;
			var altura = document.getElementById('altura').value;

			var imc = peso / (altura **2);

			if (imc <= 18.5 ) {
				alert("bajo de peso");
			}else if(imc <= 24.9 ){
				alert("su peso es normal");
			}else if(imc <= 29.9){
				alert("sobre peso grado 1");
			}else if( imc >= 30){
				alert("Obeso");
			}
			document.getElementById("resultado").innerHTML = "su indice corporal es de " +imc ;

		}