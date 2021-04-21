import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export function Card1(props) {
	const [iconcolor, seticonColor] = useState("white");
	const { store, actions } = useContext(Context);
	const [favorite, setFavorite] = useState(props.favorite);
	const [index, setIndex] = useState(props.index);
	let buttonstyles = {
		backgroundColor: "goldenrod",
		borderColor: "black",
		color: "black"
	};
	let marginstyles = {
		marginLeft: "90px",
		backgroundColor: "goldenrod",
		borderColor: "black",
		color: iconcolor
	};

	let bodycolor = {
		backgroundColor: "rgb(159, 158, 155)"
	};

	function addfavoriteplanettodatabase() {
		console.log(sessionStorage.getItem("token"));
		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Access-Control-Allow-Origin", "*");

		console.log(index);

		var raw = JSON.stringify({
			planetid: index + 1
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("https://3000-yellow-horse-zyw3t8nq.ws-us03.gitpod.io/addfavoriteplanet", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	return (
		<div className="col-3 ">
			<div className="card">
				<img src={props.image} className="card-img-top" height="200px" />
				<div className="card-body" style={bodycolor}>
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text"> {"Population: " + props.population}</p>
					<Link to={"/singlep/" + props.index}>
						<button className="btn btn-primary" style={buttonstyles}>
							Learn more!
						</button>
					</Link>
					<button className="btn btn-primary" style={marginstyles}>
						<i
							className="fas fa-star"
							onClick={() => {
								if (sessionStorage.getItem("token") == null) {
									alert("Please Login to add favorites");
								} else if (sessionStorage.getItem("token") != null && iconcolor == "white") {
									seticonColor("yellow");
									setFavorite(props.favorite);
									setIndex(props.index);
									actions.sumFavorites();
									actions.setplanetindex(index);
									actions.setlistFavoritesPlanets(favorite);
									addfavoriteplanettodatabase();
								} else {
									seticonColor("white");
									setFavorite(props.favorite);
									actions.lessFavorites();
									actions.removelistFavoritesPlanets([favorite]);
									actions.removePlanetsindex(index);
									actions.deletefavoritefromdatabase(index);
								}
							}}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

Card1.propTypes = {
	title: PropTypes.string,
	population: PropTypes.number,
	favorite: PropTypes.string,
	index: PropTypes.number,
	image: PropTypes.string
};
