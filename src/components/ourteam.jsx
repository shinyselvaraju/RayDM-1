import Sidebar from "./sidebar";
import {useEffect, useState} from "react";
import Footer from "./footer"

function AboutUs(){


	const [device, setDevice]=useState("laptop");
	const [tablet, setTablet] = useState(false);

	useEffect(() => {
	  window.scrollTo(0, 0);


	  if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  setDevice("mobile");
		} else {
		  	setDevice("laptop");
		}

		const userAgent = navigator.userAgent.toLowerCase();
		const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
		if (isTablet){
			setTablet(true);
			setDevice("mobile");
		}

	}, []);

	return(
		<div>
		<Sidebar />
		<div style={device==="laptop"?{minHeight:"45vh", display:"flex", alignItems:"flex-end", textAlign:"center"}:tablet?{minHeight:"25vh", display:"flex", alignItems:"flex-center"}:{minHeight:"15vh", display:"flex", alignItems:"flex-end"}}>
				<div style={{color:"white", width:"97vw"}}>
					<img src="about.png" style={{maxWidth:"100vw"}}></img>
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
					<img src={"webdesign.jpg"} style={{height:"100px", width:"100px", maxHeight:"25vh", borderRadius:"100%"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div>
				<div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"25vh", borderRadius:"150px"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div><div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"25vh", borderRadius:"150px"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div><div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"25vh", borderRadius:"150px"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div><div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"25vh", borderRadius:"150px"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div><div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"25vh", borderRadius:"150px"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>CEO, Web Developer</p>
				</div><div className="col-md-4 col-sm-6">
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"25vh", borderRadius:"150px"}}/>
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