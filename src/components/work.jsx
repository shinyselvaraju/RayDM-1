import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";

function Work(){

	const history = useHistory();

	const [device, setDevice] = useState("laptop")

	useEffect(() => {
		if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  setDevice("mobile");
		} else {
		  	setDevice("laptop");
		}
	}, []);


	return(
		<div id="work" style={{color:"white"}}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<img src="work.jpg" id="workimage"/>
					</div>
					<div className="col-md-6" style={{margin:"auto"}}>
						<div className="container">
							<h1 style={{margin:"2em 0 1em 0"}}>We are the best at what we do</h1>
							<p style={device==="laptop"?{fontSize:"1.5em"}:{}}>We operate as a unit built on trust and hard work. We carefully access your needs and make smart decisions that best meet the project goal.</p>
							<br />
							<span className="buttons" onClick={() => history.push("/work")}>Work</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work;