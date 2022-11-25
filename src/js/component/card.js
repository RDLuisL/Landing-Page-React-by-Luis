import React from "react";
//esto es importar una dependencia de React para que se reconozcan los PropTypes
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = () => {
	return (
		<div className="card h-25 pr-3 mt-4" style={{width: "20rem"}}>
			<img
			style={{width: "auto", height: "25rem", objectFit: "cover"}}
			className = "card-img-top"
			src={props.img}
			alt="Card imagen"
			/>
			<div className="car-body">
				<h3 className="card-title">{props.title}</h3>
				<p classNAme="card-text"></p>
				<a href="#" className="btn btn-primary"> {props.buttonText}</a>
			</div>
		</div>
	);
};
//Comentarios de como son las entradas de la constante Card
Card.propoTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string,
	text: PropTypes.string,
	buttonText: PropTypes.string
}

export default Card;
