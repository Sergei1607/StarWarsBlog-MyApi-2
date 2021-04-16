import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card1 } from "../component/card1.js";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return <Card1 />;
};
