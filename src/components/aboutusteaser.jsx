import {useHistory} from "react-router-dom";

function AboutusTeaser(){

	const history = useHistory();

	return(
		<div id="aboutusteaser" className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<img src="questio.jpg" id="kryptonite"/>					
				</div>
				<div className="col-md-6" style={{margin:"auto"}}>
					<div className="container">
						<h1>Who are we?</h1>
						<p>Fam, we're a group of engineers and scientists who believe the the world can be changed with the <u>tap</u> of a button and the stroke of a <u>pen.</u></p>
						<span className="buttons" onClick={() => history.push("/about")}>Our Team</span>
					</div>
					</div>
			</div>
		</div>
	)
}

export default AboutusTeaser;