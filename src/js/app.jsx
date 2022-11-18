import React from "react";
import Account from "./views/Account.jsx";
import Home from "./views/home.jsx";
import Signin from "./views/Signin.jsx";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/Authcontext.js";

//create your first component
const App = () => {
	return (
		<div>
            <AuthContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/account" element={<Account />} />
            </Routes>
            </AuthContextProvider>
		</div>
	);
};



export default App;
