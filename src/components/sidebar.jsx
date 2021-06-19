import {useState, useEffect} from "react";
import Laptopnavbar from "./laptopnavbar";
import Mobilenavbar from "./mobilenavbar";

function Sidebar(){

	const [device, setDevice]=useState("laptop");

	useEffect(() => {
	
		if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  // true for mobile device
		  console.log("mobile device");
		  setDevice("mobile");
		} else {
			console.log("laptop device");
		  	setDevice("laptop");
		}
	});

	return(device==="laptop"?<Laptopnavbar/>:<Mobilenavbar />);

}

export default Sidebar;