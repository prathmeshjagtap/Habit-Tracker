import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
	const { token } = useSelector((state) => state.authentication);
	const { location } = useLocation();
	return token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}

export { PrivateRoute };
