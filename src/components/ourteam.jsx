import Sidebar from "./sidebar";

function AboutUs(){
	return(
		<div>
		<Sidebar />
		<div style={{minHeight:"45vh", display:"flex", alignItems:"flex-end", textAlign:"center"}}>
				<div style={{color:"white", width:"100vw"}}>
					<div className="container">
			 			<div className="row">
			 				<div className="col-md-6">
			 					An image goes here
			 				</div>
			 				<div className="col-md-6" style={{textAlign:"left"}}>
			 					<h2>
			 						We are Shit
			 					</h2>
			 					<p>
			 						And guess what, we are truly a bunch of lazy shit heads
			 					</p>
			 				</div>
			 			</div>
				 	</div>
			 </div>
			</div>
		</div>
	)
}

export default AboutUs;