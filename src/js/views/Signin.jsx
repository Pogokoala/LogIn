import React from "react";
import { GoogleButton } from 'react-google-button'
import { UserAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom"
//Create a New user
const Signin = () => {
	const { googleSignIn } = UserAuth ();
	const navigate = useNavigate();
	
	const handleGoogleSignin = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (user != null) {
			navigate('/account');
		}
	}, [user]);
	
	return (
		<div>
			<h1 className="text-center text-3x1 font-bold py-8">Sign in</h1>
			<div className="max-w-[240px] m-auto py-4">
            	<GoogleButton  onClick={handleGoogleSignin} />
			</div>
		</div>
	);
};



export default Signin;
