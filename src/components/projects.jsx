import Sidebar from "./sidebar";
import WorkCard from "./workcard";
import Footer from "./footer";

import {useEffect, useState} from "react";

const works=[
	{
		img:"webdesign.jpg",
		id: "webdesign",
		url:""
	},
	{
		img:"webdesign.jpg",
		id: "webdesign",
		url:""
	},
	{
		img:"webdesign.jpg",
		id: "webdev",
		url:""
	},
	{
		img:"webdesign.jpg",
		id: "webdev",
		url:""
	},
	{
		img:"webdesign.jpg",
		id: "ads",
		url:""
	},
	{
		img:"webdesign.jpg",
		id: "ads",
		url:""
	},
	{
		img:"webdesign.jpg",
		id: "ads",
		url:""
	},
	{
		img:"webdesign.jpg",
		id: "branding",
		url:""
	},
	{
		img:"webdesign.jpg",
		id: "branding",
		url:""
	}
]

function Projects(){

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
			<Sidebar/>
			<div style={device==="laptop"?{minHeight:"48vh", display:"flex", alignItems:"flex-end", textAlign:"center"}:tablet?{minHeight:"25vh", display:"flex", alignItems:"flex-center"}:{minHeight:"15vh", display:"flex", alignItems:"flex-end"}}>
				<div style={{color:"white", width:"97vw"}}>
					<img src="work.png" style={{maxWidth:"100vw"}}></img>
				</div>
			</div>
			<div className="container" style={{marginTop:"2em"}}>
	 			<div className="row">
	 				{works.map((work) =>(<div className="col-md-4 col-sm-6"><WorkCard /></div>))
	 				}
	 			</div>
			 </div>
			 <Footer />
		</div>
	)
}

export default Projects;