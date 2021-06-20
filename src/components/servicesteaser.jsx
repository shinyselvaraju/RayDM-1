import {useState, useEffect} from "react";

function ServicesTeaser(){

	const [hoverover, sethoverover] = useState(0);

	const [device, setDevice]=useState("laptop");

	useEffect(() => {
	
		if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  setDevice("mobile");
		} else {
		  	setDevice("laptop");
		}
	});

	return(
		<div id="servicesteaser" className="container">
			<h1 className="Heading">Services</h1>
			<div className="row">
				<div className="col-md-6">
					<div onMouseOver={() => sethoverover(0)} className="col-md-6">Web Design</div>
					{device==="mobile" && hoverover===0?<div>{hoverover}</div>:<div></div>}
					<div onMouseOver={() => sethoverover(1)} className="col-md-6">Web Development</div>
					{device==="mobile" && hoverover===1?<div>{hoverover}</div>:<div></div>}
					<div onMouseOver={() => sethoverover(2)} className="col-md-6">Service 3</div>
					{device==="mobile" && hoverover===2?<div>{hoverover}</div>:<div></div>}
					<div onMouseOver={() => sethoverover(3)} className="col-md-6">Service 4</div>
					{device==="mobile" && hoverover===3?<div>{hoverover}</div>:<div></div>}
				</div>
				<div className="col-md-6">
					{device==="laptop"?hoverover:<div />}
				</div>
			</div>
		</div>
	)
}

export default ServicesTeaser;