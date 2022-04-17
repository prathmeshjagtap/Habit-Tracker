const token = (payload) => {
	return {
		type: "AUTHENTICATION",
		payload: payload,
	};
};
const logout = () => {
	return {
		type: "LOGOUT",
	};
};

export { token, logout };
