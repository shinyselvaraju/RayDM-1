import Sidebar from "./sidebar";
import WorkCard from "./workcard";
import Footer from "./footer";

function Service(){
	return(
		<div>
			<Sidebar/>
			<div style={{minHeight:"45vh", display:"flex", alignItems:"flex-end", textAlign:"center"}}>
				<div style={{color:"white", width:"100vw"}}>
					<div className="container">
			 			<div className="row">
			 				<div className="col-md-6">
			 					An image goes here
			 				</div>
			 				<div className="col-md-6" style={{textAlign:"left"}}>
			 					<h2>
			 						We do all of these Shit
			 					</h2>
			 					<p>
			 						And guess what, we're so lazy about doing this that we do it the best way we can in our first try itself.
			 					</p>
			 				</div>
			 			</div>
				 	</div>
			 </div>
			</div>
				 	<div className="container" style={{marginTop:"2em"}}>
			 			<div className="row">
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard />
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard />
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard />
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard />
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard />
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard />
			 				</div>
			 			</div>
			 		</div>
			<Footer />
		</div>
	);
}

export default Service;