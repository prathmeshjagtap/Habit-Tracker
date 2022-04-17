import React, { useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions";
import { toast } from "react-toastify";

function Navbar() {
	const { token } = useSelector((state) => state.authentication);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let Links = [
		{ name: "Habits", link: "/habits" },
		{ name: "Pomodoro", link: "/pomodoro" },
		{ name: "Archive", link: "/archive" },
	];

	const [mobileNav, setMobileNav] = useState(false);
	const [theme, setTheme] = useState("Light");

	const { pathname } = useLocation();
	const logoutHandler = (dispatch) => {
		localStorage.removeItem("token");
		dispatch(logout());
		navigate("/");
		toast.success("Logout Successfully ", {
			position: "top-right",
			autoClose: 2000,
		});
	};
	return (
		<div className="shadow-md w-full sticky top-0 left-0 md:flex justify-around  items-center bg-white  py-4 md:px-10 px-7 text-lg font-medium">
			<Link to="/">
				<h2 className="font-bold hover:text-green-500"> ✅ Habit Tracker</h2>
			</Link>
			<div className=" absolute flex right-8 top-4 cursor-pointer md:hidden">
				{theme === "Light" ? (
					<SunIcon
						className="block h-8 w-8 mr-4 md:hidden self-center"
						onClick={() => setTheme("Dark")}
					/>
				) : (
					<MoonIcon
						className="block h-8 w-8 mr-4 md:hidden self-center "
						onClick={() => setTheme("Light")}
					/>
				)}
				{mobileNav ? (
					<XIcon
						className="h-8 w-8"
						onClick={() => setMobileNav((mobileNav) => !mobileNav)}
					/>
				) : (
					<MenuIcon
						className="h-8 w-8"
						onClick={() => setMobileNav((mobileNav) => !mobileNav)}
					/>
				)}
			</div>
			<ul
				className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
					mobileNav ? "top-10 " : "top-[-470px]"
				}`}
			>
				{Links.map((link) => (
					<li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
						<Link to={link.link} className=" hover:text-green-500 duration-500">
							{link.name}
						</Link>
					</li>
				))}
				{!matchPath("/", pathname) ? (
					<li className="md:ml-8 text-l md:my-0 my-7">
						<Link
							to="/userProfile"
							className="hover:text-green-500 duration-500"
						>
							User Profile
						</Link>
					</li>
				) : null}
				{token ? (
					<li
						className="md:ml-8 text-l md:my-0 my-7"
						onClick={(e) => {
							e.preventDefault();
							logoutHandler(dispatch);
						}}
					>
						<p className="hover:text-green-500 duration-500">Logout</p>
					</li>
				) : (
					<li className="md:ml-8 text-l md:my-0 my-7">
						<Link to="/login" className=" hover:text-green-500 duration-500">
							Login
						</Link>
					</li>
				)}
				{theme === "Light" ? (
					<SunIcon
						className="hidden h-6 w-6 ml-10 md:block "
						onClick={() => setTheme("Dark")}
					/>
				) : (
					<MoonIcon
						className="hidden h-6 w-6 ml-10 md:block "
						onClick={() => setTheme("Light")}
					/>
				)}
			</ul>
		</div>
	);
}

export { Navbar };
