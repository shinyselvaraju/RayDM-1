import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

function ServicesTeaser(){

	const history = useHistory();

	const [device, setDevice]=useState("laptop");
	const [tab, setTablet]=useState(false)
	const [width, setWidth] = useState(0);

	let resizeWindow = () => {
    setWidth(window.innerWidth);
	};


	useEffect(() => {
	
		if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  setDevice("mobile");
		} else {
		  	setDevice("laptop");
		}

		const userAgent = navigator.userAgent.toLowerCase();
		const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
		if (isTablet){
			setDevice("laptop");
		}

		resizeWindow();
	    window.addEventListener("resize", resizeWindow);
	    return () => window.removeEventListener("resize", resizeWindow);
	}, []);


	return(
		<div id="servicesteaser" className="container-fluid" style={{marginTop:"2em"}}>
			<div className="row">
				{device==="mobile" || width<768 ?<>
					<div className="col-md-6">
						<img src="specialist2.jpg" id="kryptonite"/>					
					</div>
					<div className="col-md-6" style={{margin:"auto"}}>
						<div className="container">
							<h1 style={{margin:"2em 0 1em 0"}}>RayDM are Specialists in</h1>
							<ul style={{listStyleType:"none", paddingLeft:"0"}}>
								<li>Web Development</li>
								<li>Graphic Design</li>
								<li>Marketing</li>
								<li>Virtual Assistance</li>
								<br></br>
							</ul>
							<span className="buttons" onClick={() => history.push("/about")}>Our Team</span>
						</div>
					</div>
				</>:
				<>
					<div className="col-md-6" style={{margin:"auto", textAlign:"right"}}>
						<div className="container">
							<h1 style={{margin:"1em 0 1em 0"}}>RayDM are Specialists in</h1>
							<ul style={{listStyleType:"none", paddingLeft:"0", fontSize:"1.5em"}}>
								<li style={{cursor:"pointer"}} onClick={() => history.push("/work#webdev")}>Web Development</li>
								<li style={{cursor:"pointer"}} onClick={() => history.push("/work#graphicdes")}>Graphic Design</li>
								<li style={{cursor:"pointer"}} onClick={() => history.push("/work#marketingig")}>Marketing</li>
								<li style={{cursor:"pointer"}} onClick={() => history.push("/work#marketingig")}>Virtual Assistance</li>
								<br />
							</ul>
							<span className="buttons" onClick={() => history.push("/service")}>Services</span>
						</div>
					</div>
					<div className="col-md-6">
						<img src="specialist2.jpg" id="kryptonite"/>					
					</div>
				</>
				}
			</div>
		</div>
	)

}

export default ServicesTeaser;