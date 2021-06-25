import WorkCard from "./workcard";

function Work(){
	return(
		<div id="work" style={{color:"white"}}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<img src="work.jpg" id="workimage"/>
					</div>
					<div className="col-md-6" style={{margin:"auto"}}>
						<div className="container">
							<h1>We are the best at what we do</h1>
							<p>Look what people have to say of us</p>
							<span className="buttons">Testimonials</span>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-6">
						<WorkCard el="0"/>
					</div>
					<div className="col-md-4 col-sm-6">
						<WorkCard el="1"/>
					</div>
					<div className="col-md-4 col-sm-6">
						<WorkCard el="2"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work;