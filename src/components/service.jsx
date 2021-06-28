import Sidebar from "./sidebar";
import WorkCard from "./workcard";
import Footer from "./footer";
import {useEffect, useState} from "react"


function Service(){

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
					<img src="services.png" style={{maxWidth:"100vw"}}></img>
			 </div>
			</div>
				 	<div className="container" style={{marginTop:"2em"}}>
			 			<div className="row">
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Web Development" img="webdev.jpg"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Graphic Design" img="graphic.jpg"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Marketing" img="marketing.jpg"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Virtual Assistance" img="va.jpg"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Branding" img="brand.png"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Content Creation" img="content.jpg"/>
			 				</div>
			 			</div>
			 		</div>
			<Footer />
		</div>
	);
}

export default Service;

// {<div className="container">
// 			 			<div className="row">
// 			 				<div className="col-md-6">
// 			 					<iframe src="https://ntmaker.gfto.ru/newneontexten/?image_height=200&image_width=600&image_font_shadow_width=30&image_font_size=100&image_background_color=003B49&image_text_color=FF91A9&image_font_shadow_color=F7406B&image_url=&image_text=Services&image_font_family=Nickainley&" frameborder='no' scrolling='no'></iframe>
// 			 				</div>
// 			 				<div className="col-md-6" style={{textAlign:"left"}}>
// 			 					<h2>
// 			 						We do all of these Shit
// 			 					</h2>
// 			 					<p>
// 			 						And guess what, we're so lazy about doing this that we do it the best way we can in our first try itself.
// 			 					</p>
// 			 				</div>
// 			 			</div>
// 				 	</div>}