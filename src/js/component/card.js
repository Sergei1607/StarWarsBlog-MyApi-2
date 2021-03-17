import React, { Component } from "react";

export function Card() {
	return (
		<div className="col-3">
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Learn more!
					</a>
					<a href="#" className="btn btn-primary ml-5">
						Like
					</a>
				</div>
			</div>
		</div>
	);
}
