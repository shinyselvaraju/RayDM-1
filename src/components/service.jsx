import Sidebar from "./sidebar";
import WorkCard from "./workcard";
import Footer from "./footer";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";


function Service(){

	const [device, setDevice]=useState("laptop");
	const [tablet, setTablet] = useState(false);
	const [tile, setTile] = useState(0);

	const history = useHistory();

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
					<img src="services.png" style={{maxWidth:"100vw"}}></img>
			 </div>
			</div>
		 	<div className="container" style={{marginTop:"2em"}}>
		 		<h3 style={{color:"white"}}>One site to manage all your Creative Projects!</h3>
	 			<div className="row">
	 				<div className="col-lg-4 col-md-6 col-sm-6" style={tile===1||tile===0?{}:{opacity:"0.3"}} onMouseOver={()=>setTile(1)} onMouseOut={()=>setTile(0)}>
	 					<WorkCard title="Web Development" img="webdev.jpg" url="/work#webdev"/>
	 				</div>
	 				<div className="col-lg-4 col-md-6 col-sm-6" style={tile===2||tile===0?{}:{opacity:"0.3"}} onMouseOver={()=>setTile(2)} onMouseOut={()=>setTile(0)}>
	 					<WorkCard title="Graphic Design" img="graphic.jpg"  url="/work#graphicdes"/>
	 				</div>
	 				<div className="col-lg-4 col-md-6 col-sm-6" style={tile===3||tile===0?{}:{opacity:"0.3"}} onMouseOver={()=>setTile(3)} onMouseOut={()=>setTile(0)}>
	 					<WorkCard title="Marketing" img="marketing.jpg" url="/work#marketingig"/>
	 				</div>
	 				<div className="col-lg-4 col-md-6 col-sm-6" style={tile===4||tile===0?{}:{opacity:"0.3"}} onMouseOver={()=>setTile(4)} onMouseOut={()=>setTile(0)}>
	 					<WorkCard title="Virtual Assistance" img="va.jpg" url="/work#marketingig"/>
	 				</div>
	 				<div className="col-lg-4 col-md-6 col-sm-6" style={tile===5||tile===0?{}:{opacity:"0.3"}} onMouseOver={()=>setTile(5)} onMouseOut={()=>setTile(0)}>
	 					<WorkCard title="Branding" img="brand.png" url="/work#marketingig"/>
	 				</div>
	 				<div className="col-lg-4 col-md-6 col-sm-6" style={tile===6||tile===0?{}:{opacity:"0.3"}} onMouseOver={()=>setTile(6)} onMouseOut={()=>setTile(0)}>
	 					<WorkCard title="Content Creation" img="content.jpg" url="/work#graphicdes"/>
	 				</div>
	 			</div>
	 			<h3 style={{color:"white", marginTop:"1em"}}>See RayDM in action: <span style={{fontSize:"1em", cursor:"pointer", borderBottom:"2px solid #0f0"}} onClick={() => history.push("/work")}>Our Works</span></h3>
	 		</div>
			<Footer />
		</div>
	);
}

export default Service;