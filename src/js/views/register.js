import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form } from "../component/form.js";

import "../../styles/demo.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return <Form label={"Register"} />;
};
