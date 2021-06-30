import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";

function AboutusTeaser(){

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
		<div id="aboutusteaser" className="container-fluid" style={{marginTop:"2em"}}>
			<div className="row">
				<div className="col-md-6">
					<img src="question.png" id="kryptonite"/>					
				</div>
				<div className="col-md-6" style={{margin:"auto"}}>
					<div className="container">
						<h1 style={{margin:"2em 0 1em 0"}}>Who are we?</h1>
						<p style={device==="laptop"?{fontSize:"1.5em"}:{}}>Our team comprises experts, who are passionate about their work. The services we provide <u>RayDiate</u> confidence and quality. Our Members are sharp young minds who strive for excellence. <br/><br/></p>
						<span className="buttons" onClick={() => history.push("/about")}>Our Team</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutusTeaser;