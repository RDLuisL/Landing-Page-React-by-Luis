import React from "react";
//esto es importar una dependencia de React para que se reconozcan los PropTypes


import Card from "./card.js";
import Navbar from "./navbar.js";
import Jumbo from "./jumbotron.js";
import Footer from "./footer.js";

const Home = () => {
	return (
		<>
	<Navbar/>
		<div className="container" width="300px">
			<Jumbo/>
			<div className="row">
				<Card
					img="https://i.pinimg.com/564x/c5/bb/8e/c5bb8eced768fe58f9a72d2562af0c4c.jpg"
					title= "Evangelion Unidad 00"
					text= "El Evangelion Unidad 00 (エヴァンゲリオン 零号機, , Evangerion Zerogōki ?) es el Prototipo, el primer intento exitoso de crear una Unidad Evangelion. La unidad fue creada como un arma para combatir a los Ángeles, y es pilotada por la First Children, Rei Ayanami."
					buttonText= "Click to find out about EVA-00"></Card>
				<Card
					img="https://i.pinimg.com/564x/87/dd/75/87dd75a78d35090ebdd93653a9d7d577.jpg"
					title= "Evangelion Unidad 01"
					text= "El Evangelion Unidad 01 (エヴァンゲリオン初号機, Evangerion Shogōki ?) es el primer modelo no-prototipo de Unidad Evangelion. La unidad fue creada como un arma para combatir a los Ángeles, y es pilotada por el Third Children, Shinji Ikari."
					buttonText= "Would you know about EVA-01?"></Card>
				<Card
					img="https://i.pinimg.com/564x/c3/6e/e4/c36ee4f604b329252a1a8aa53c32fcff.jpg"
					title= "Evangelion Unidad 02"
					text= "El Evangelion Unidad 02 (エヴァンゲリオン弐号機, Evangerion Nigōki ?) es la tercera Unidad Evangelion completada, y el primer Modelo de Producción hecho en Alemania. La unidad fue creada como un arma para combatir a los Ángeles, y es pilotada por la Second Children, Asuka Langley Soryu."
					buttonText= "Click here to check out EVA-02"></Card>
				<Card
					img="https://i.pinimg.com/564x/e4/c1/c4/e4c1c43fc3f674769e13a5ba8b0f2338.jpg"
					title= "Evangelion Unidad 03"
					text= "El Evangelion Unidad 03 (3号機, Sangōki ?) fue construido en la Primera Rama de NERV, siendo el segundo Modelo de Producción. Esta unidad fue pilotada durante su prueba de activación por el Fourth Children, Toji Suzuhara."
					buttonText= "Click here to check out EVA-03"></Card>
			</div>
		
			
			</div>
			<Footer/>	
			</>
		);
				
	
};

export default Home;

