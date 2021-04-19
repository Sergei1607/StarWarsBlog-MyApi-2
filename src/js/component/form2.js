import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export function Form2(props) {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let backstyle = {
		backgroundColor: "lightgrey"
	};

	let fontstyle = {
		fontSize: "30px"
	};

	let fontstyle2 = {
		fontSize: "17px"
	};

	let buttonstyle = {
		backgroundColor: "goldenrod",
		color: "black",
		width: "150px"
	};

	function loginUser() {
		actions.loginUser(email, password);
		console.log(store.token);
	}

	return (
		<div className="container p-5">
			<div className="row justify-content-center" style={backstyle}>
				<form>
					<div className="form-group pt-4">
						<label htmlFor="exampleInputEmail1" style={fontstyle}>
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<small id="emailHelp" className="form-text text-muted" style={fontstyle2}>
							Well never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1" style={fontstyle} value={password}>
							Password
						</label>
						<input
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							type="password"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<button type="submit" className="btn btn-primary mb-4" style={buttonstyle} onClick={loginUser}>
						{props.label}
					</button>
				</form>
			</div>
		</div>
	);
}

Form2.propTypes = {
	label: PropTypes.string
};
