import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import StartProject from "./startproject";

function Landingpage(){

	const history = useHistory();

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
				<div className="container lp" style={{height:"100%"}}>
					<div className="row lp" style={{height:"100%"}}>
						<div className="col-md-6 lp" style={{margin:"auto", overflowX:"visible"}}>
							<h1 style={{marginBottom:"20px"}} className="lp">Let Your Brand Breathe.</h1>
							<span className="buttons" onClick={() => history.push("/service")}>Services</span>
						</div>
						<div className="col-md-6 lp">
							
						</div>
					</div>
				</div>
				</div>
				<StartProject />
			</div>
		:
			<div>
				<div id="landingpage">
					<div className="container lp" style={{height:"100%"}}>
						<div className="row lp" style={{height:"100%"}}>
							<div className="col-md-6 lp" style={{margin:"auto"}}>
								<h1 style={{marginBottom:"20px"}} className="lp">Let Your Brand Breathe.</h1>
								<span className="buttons lp" onClick={() => history.push("/service")}>Services</span>
							</div>
						</div>
					</div>
				</div>
			</div>

	)
}

export default Landingpage;