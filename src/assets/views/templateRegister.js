import { crearCuentaEmailPass } from "../js/authentication.js";

export const templateRegister = () => {
	const containerRegister = document.createElement("div");
	containerRegister.className = "containerRegister";
	const contentRegister = 
	`		
	
	<input type="text" name="nombreContactoReg" id="nombreContactoReg" placeholder="nombre">
	<input type="text" name="emailContactoReg" id="emailContactoReg" placeholder="correo electronico">
	<input type="password" name="passwordReg" id="passwordReg"placeholder="contraseña">
	
	<button class="button5" id="btnRegistroEmail">Registrarse</button>



	   <!--<label> Pais: </label>
	  <select name="countrylab" id="country-laboratoria">
		<option id="chile" value="chile"> Chile </option>
		<option id="mexico" value="mexico">Mexico</option>
		<option id="peru" value="peru">Perú</option>
		<option id="Brazil" value="brazil">Brazil </option>
	</select name =generation>

	  <label>Generación:</label>
		<select name="numberGeneration" id="generation-lab">
		<option disabled selected value> Ordenar por:</option>
		<option id="1l" value="1g">1°Generación </option>
		<option id="2l" value="2g">2°Generación</option>
		<option id="3l" value="3g">3°Generación</option>
		<option id="4l" value="4g">4°Generación</option>
		<option id="5l" value="5g">5°Generación</option>
		<option id="6l" value="6g">6°Generación</option>
		<option id="7l" value="7g">7°Generación</option>
		<option id="8l" value="8g">8°Generación</option>
		<option id="9l" value="9g">9°Generación</option>
		<option id="10l" value="10g">10°Generación</option>
	</select> -->


	


	`;

	containerRegister.innerHTML = contentRegister;

	const btnRegistroEmail = containerRegister.querySelector("#btnRegistroEmail");

	btnRegistroEmail.addEventListener("click", () => {
		const nombreReg = document.getElementById("nombreContactoReg").value;
		const emailReg = document.getElementById("emailContactoReg").value;
		const passwordReg = document.getElementById("passwordReg").value;
        let countrylab= document. getElementById("country-laboratoria").value;
	    let numberGeneration= document.getElementById("generation-lab").value;

		crearCuentaEmailPass(emailReg, passwordReg, nombreReg,countrylab,numberGeneration );
	});

	return containerRegister;	
}

