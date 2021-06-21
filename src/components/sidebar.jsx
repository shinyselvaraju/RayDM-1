import {useState, useEffect} from "react";
import Laptopnavbar from "./laptopnavbar";
import Mobilenavbar from "./mobilenavbar";

function Sidebar(){

	const [device, setDevice]=useState("laptop");

	useEffect(() => {
	
		if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  setDevice("mobile");
		} else {
		  	setDevice("laptop");
		}

		const userAgent = navigator.userAgent.toLowerCase();
		const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
		if (isTablet){
			setDevice("laptop")
		}
	}, []);

	return(device==="laptop"?<Laptopnavbar/>:<Mobilenavbar />);

}

export default Sidebar;