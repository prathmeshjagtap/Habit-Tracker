import React from "react";
import { Routes, Route } from "react-router-dom";
import {
	Home,
	Login,
	Signup,
	Pomodoro,
	Archive,
	UserProfile,
	Habits,
} from "../screens";
import Mockman from "mockman-js";

function AllRoutes() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/pomodoro" element={<Pomodoro />} />
				<Route path="/archive" element={<Archive />} />
				<Route path="/userProfile" element={<UserProfile />} />
				<Route path="/habits" element={<Habits />} />
				{/* Remove later */}
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export { AllRoutes };
