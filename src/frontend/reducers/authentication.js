let localstoragetoken = localStorage.getItem("token");

const initialState = {
	token: localstoragetoken ? localstoragetoken : false,
	userInfo: null,
};

const authentication = (state = initialState, action) => {
	switch (action.type) {
		case "AUTHENTICATION":
			return {
				...state,
				token: action.payload.token,
				userInfo: action.payload.userInfo,
			};
		case "LOGOUT":
			return { ...state, token: null, userInfo: null };
		default:
			return state;
	}
};

export { authentication };
