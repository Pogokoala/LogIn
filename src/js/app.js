import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar.jsx";
import { AuthContextProvider } from "./context/Authcontext.js";
import Account from "./views/Account.jsx";
import Home from "./views/home.jsx";
import Signin from "./views/Signin.jsx";
import Protected from "./Protected.js";


function App() {
	return (
		<div>
            <AuthContextProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route 
                path="/account" 
                element={
                <Protected>
                    <Account />
                </Protected>
                } 
                />
            </Routes>
            </AuthContextProvider>
		</div>
	);
}



export default App;
