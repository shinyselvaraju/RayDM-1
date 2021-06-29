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
		<div style={device==="laptop"?{minHeight:"48vh", display:"flex", alignItems:"flex-end", textAlign:"center"}:tablet?{minHeight:"25vh", display:"flex", alignItems:"flex-center"}:{minHeight:"15vh", display:"flex", alignItems:"flex-end"}}>
				<div style={{color:"white", width:"97vw"}}>
					<img src="about.png" style={{maxWidth:"100vw"}}></img>
				</div>
		</div>
		<div className="container" style={{color:"white", marginBottom:"1em"}}>
			<h2 style={{margin:"2em 0"}}>
				Our Boring Story
			</h2>
			<p>
				Hey There!
RayDM is a creative design company that offers services like website development, Marketing, and visual assistance required with a personal touch. The founders Shiny Selvaraj, Vaibav, and Charan and their teamwork together to design extraordinary work for the people that believe in them. We work with exceptional talent who intend to provoke a sense of inspiration and awe in the person marveling at our designs. As a small startup that is rapidly growing, we wish to empower other small start-ups by helping them grow their businesses with our smart marketing and innovative content.
At RayDM we Love to Create, Customize, and Discover.
	
				<hr />
			</p>
		</div>
		<div className="container" style={{color:"white"}}>
			<h1 style={{marginTop:"2em", marginBottom:"1em"}}>Meet our Team</h1>
			<div className="row" style={{textAlign:"center"}}>
				<div className="col-lg-4 col-md-6 col-sm-6" style={{margin:"1em 0", textAlign:"center"}}>
					<img src={"shinye.jpeg"} style={{height:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Shiny Selvaraju</h3>
					<p>Lead Web Developer and loves meeting new people</p>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-6" style={{margin:"1em 0"}}>
					<img src={"webdesign.jpg"} style={{height:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Charan</h3>
					<p>Marketing and Instagram Strategist while enjoying his cuppa tea</p>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-6" style={{margin:"1em 0"}}>
					<img src={"webdesign.jpg"} style={{height:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Vasantha</h3>
					<p>Graphic designer from NIFT and wants anything japanese or anime</p>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-6" style={{margin:"1em 0"}}>
					<img src={"webdesign.jpg"} style={{height:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Bajra</h3>
					<p>Web Developer and a random dood from the moon</p>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-6" style={{margin:"1em 0"}}>
					<img src={"webdesign.jpg"} style={{height:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Sagar</h3>
					<p>Graphic designer and video editor from the land of rajputs</p>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-6" style={{margin:"1em 0"}}>
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Rishab</h3>
					<p>Social media Manager *awesome bgm intensifies*</p>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-6" style={{margin:"1em 0"}}>
					<img src={"webdesign.jpg"} style={{height:"100%", width:"100%", maxHeight:"35vh"}}/>
					<h3 className="Heading">Ariyana</h3>
					<p>Social media Manager *hello i am ariyana*</p>
				</div>
			</div>
		</div>
		<Footer />
		</div>
	)
}

export default AboutUs;