import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form2 } from "../component/form2.js";

import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return <Form2 label={"Login"} />;
};
