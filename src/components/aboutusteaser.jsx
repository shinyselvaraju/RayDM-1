import {useHistory} from "react-router-dom";

function AboutusTeaser(){

	const history = useHistory();

	return(
		<div id="aboutusteaser" className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<img src="question.png" id="kryptonite"/>					
				</div>
				<div className="col-md-6" style={{margin:"auto"}}>
					<div className="container">
						<h1>Who are we?</h1>
						<p>Our team comprises experts, who are passionate about their work. The RayDIATE confidence and quality in the services that we provide. Our Members are sharp young minds who strive for excellence.</p>
						<span className="buttons" onClick={() => history.push("/about")}>Our Team</span>
					</div>
					</div>
			</div>
		</div>
	)
}

export default AboutusTeaser;