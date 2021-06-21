import {useState, useEffect} from "react";

function Landingpage(){

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

	return(
		device==="laptop"?
			<div>
				<div id="landingpage">
				<div className="container" style={{height:"100%"}}>
					<div className="row" style={{height:"100%"}}>
						<div className="col-md-6" style={{margin:"auto"}}>
							<h1 style={{marginBottom:"20px"}}>Let Your Brand Breathe.</h1>
							<span className="buttons">Services</span>
							<span className="buttons">Clients</span>
						</div>
						<div className="col-md-6">
							THe illustration goes here
						</div>
					</div>
				</div>
				</div>
			</div>
		:
			<div>
				<div id="landingpage">
					<div className="container" style={{height:"100%"}}>
						<div className="row" style={{height:"100%"}}>
							<div className="col-md-6" style={{margin:"auto"}}>
								<h1 style={{marginBottom:"20px"}}>Let Your Brand Breathe.</h1>
								<span className="buttons">Services</span>
								<span className="buttons">Clients</span>
							</div>
						</div>
					</div>
				</div>
			</div>

	)
}

export default Landingpage;