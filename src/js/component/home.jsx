import React from "react";
//esto es importar una dependencia de React para que se reconozcan los PropTypes
import PropTypes from "prop-types";

import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import JumboTron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<div className="container-fluid pl-5 pr-5">
			<Navbar/>
			<JumboTron/>
			<Card
				img=(../src/img/Unidad_00.webp);
				title= "Evangelion Unidad 00";
				text: "El Evangelion Unidad 00 (エヴァンゲリオン 零号機, , Evangerion Zerogōki ?) es el Prototipo, el primer intento exitoso de crear una Unidad Evangelion. La unidad fue creada como un arma para combatir a los Ángeles, y es pilotada por la First Children, Rei Ayanami.";
				buttonText: "Click to find out about EVA-00"><Card/>
			<Card
				img=(../src/img/Evangelion_Unit_01_versionTv.webp);
				title= "Evangelion Unidad 01";
				text: "El Evangelion Unidad 01 (エヴァンゲリオン初号機, , Evangerion Shogōki ?) es el primer modelo no-prototipo de Unidad Evangelion. La unidad fue creada como un arma para combatir a los Ángeles, y es pilotada por el Third Children, Shinji Ikari.";
				buttonText: "Would you know about EVA-01?"><Card/>
			<Card
				img=(../src/img/Unidad_02.webp);
				title= "Evangelion Unidad 02";
				text: "El Evangelion Unidad 02 (エヴァンゲリオン弐号機, Evangerion Nigōki ?) es la tercera Unidad Evangelion completada, y el primer Modelo de Producción hecho en Alemania.
				La unidad fue creada como un arma para combatir a los Ángeles, y es pilotada por la Second Children, Asuka Langley Soryu.";
				buttonText: "Click here to check out EVA-02"><Card/>
			<Card
				img=(../src/img/Evangelion_Unit_03_versionTv.webp);
				title= "Evangelion Unidad 03";
				text: "El Evangelion Unidad 03 (3号機, Sangōki ?) fue construido en la Primera Rama de NERV, siendo el segundo Modelo de Producción.
				Esta unidad fue pilotada durante su prueba de activación por el Fourth Children, Toji Suzuhara.";
				buttonText: "Click here to check out EVA-03"><Card/>
		</div>
	);
};

export default Home;
