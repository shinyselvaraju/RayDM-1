import Sidebar from "./sidebar";
import {useEffect} from "react";
import Footer from "./footer"

function AboutUs(){

	useEffect(() => {
	  window.scrollTo(0, 0);
	}, []);

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
		<div className="container" style={{color:"white"}}>
			<h2>
				Our Boring Story
			</h2>
			<p>
				lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molesti
				ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molesti
				ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molesti 
			</p>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div>
				<div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div>
				<div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div>
				<div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div>
				<div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div>
				<div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div>
			</div>
		</div>
		<Footer />
		</div>
	)
}

export default AboutUs;