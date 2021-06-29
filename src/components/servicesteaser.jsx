import {useState, useEffect} from "react";
import Card from "./servicecardteaser";
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
	});


	return(
		<div id="servicesteaser" className="container-fluid" style={{marginTop:"2em"}}>
			<div className="row">
				{device==="mobile" || width<768 ?<>
					<div className="col-md-6">
						<img src="question.png" id="kryptonite"/>					
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
					<div className="col-md-6">
						<img src="question.png" id="kryptonite"/>					
					</div>
				</>
				}
			</div>
		</div>
	)

}

// function ServicesTeaser(){
// 
// 	const [hoverover, sethoverover] = useState(0);
// 
// 	const [device, setDevice]=useState("laptop");
// 
// 	useEffect(() => {
// 	
// 		if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
// 		  setDevice("mobile");
// 		} else {
// 		  	setDevice("laptop");
// 		}
// 
// 		const userAgent = navigator.userAgent.toLowerCase();
// 		const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
// 		if (isTablet){
// 			setDevice("mobile")
// 		}
// 	});
// 
// 	return(
// 		<div id="servicesteaser" className="container">
// 			<h1 className="Heading">RayDM are Specialists in:</h1>
// 			{device==="laptop"?<div className="row" style={{marginTop:"69px"}}>
// 				<div className="col-md-5" style={{margin:"auto"}}>
// 					<div id="s1" className="steasers" onMouseOver={() => sethoverover(0)}><h1 style={hoverover===0?{color:"#0f0"}:{}}>{hoverover===0?<i className="fas fa-caret-right"></i>:<div/>}Web Development</h1></div>
// 					<div id="s2" className="steasers" onMouseOver={() => sethoverover(1)}><h1 style={hoverover===1?{color:"#0f0"}:{}}>{hoverover===1?<i className="fas fa-caret-right"></i>:<div/>}Graphic Design</h1></div>
// 					<div id="s3" className="steasers" onMouseOver={() => sethoverover(2)}><h1 style={hoverover===2?{color:"#0f0"}:{}}>{hoverover===2?<i className="fas fa-caret-right"></i>:<div/>}Marketing</h1></div>
// 					<div id="s4" className="steasers" onMouseOver={() => sethoverover(3)}><h1 style={hoverover===3?{color:"#0f0"}:{}}>{hoverover===3?<i className="fas fa-caret-right"></i>:<div/>}Virtual Assistance</h1></div>
// 				</div>
// 				
// 					{device==="laptop"?<div className="col-md-7"><Card service={hoverover}/></div>:<div />}
// 			</div>:
// 			<div className="row" style={{marginTop:"69px"}}>
// 				<div className="col-md-6">
// 					<div style={{marginLeft:"20px"}}><Card service="0" /></div>
// 				</div>
// 				<div className="col-md-6">
// 					<div style={{marginLeft:"20px"}}><Card service="1" /></div>
// 				</div>
// 				<div className="col-md-6">
// 					<div style={{marginLeft:"20px"}}><Card service="2" /></div>
// 				</div>
// 				<div className="col-md-6">
// 					<div style={{marginLeft:"20px"}}><Card service="3" /></div>
// 				</div>
// 			</div>
// 		}
// 		</div>
// 	)
// }

export default ServicesTeaser;