import {useState, useEffect} from "react";
import Card from "./servicecardteaser"

function ServicesTeaser(){

	const [hoverover, sethoverover] = useState(0);

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
	});

	return(
		<div id="servicesteaser" className="container">
			<h1 className="Heading">RayDM are Specialists in:</h1>
			<div className="row" style={{marginTop:"69px"}}>
				<div className="col-md-6" style={{margin:"auto"}}>
					<div id="s1" onMouseOver={() => sethoverover(0)}><h1 style={hoverover===0?{color:"black"}:{}}>{hoverover===0?<i class="fas fa-caret-right"></i>:<div/>}Web Design</h1></div>
					{device==="mobile" && hoverover===0?<div style={{marginLeft:"20px"}}><Card service={hoverover}/></div>:<div></div>}
					<div id="s2" onMouseOver={() => sethoverover(1)}><h1 style={hoverover===1?{color:"black"}:{}}>{hoverover===1?<i class="fas fa-caret-right"></i>:<div/>}Web Dev.</h1></div>
					{device==="mobile" && hoverover===1?<div style={{marginLeft:"20px"}}><Card service={hoverover}/></div>:<div></div>}
					<div id="s3" onMouseOver={() => sethoverover(2)}><h1 style={hoverover===2?{color:"black"}:{}}>{hoverover===2?<i class="fas fa-caret-right"></i>:<div/>}Advertisements</h1></div>
					{device==="mobile" && hoverover===2?<div style={{marginLeft:"20px"}}><Card service={hoverover}/></div>:<div></div>}
					<div id="s4" onMouseOver={() => sethoverover(3)}><h1 style={hoverover===3?{color:"black"}:{}}>{hoverover===3?<i class="fas fa-caret-right"></i>:<div/>}Branding</h1></div>
					{device==="mobile" && hoverover===3?<div style={{marginLeft:"20px"}}><Card service={hoverover}/></div>:<div></div>}
				</div>
				
					{device==="laptop"?<div className="col-md-6"><Card service={hoverover}/></div>:<div />}
			</div>
		</div>
	)
}

export default ServicesTeaser;