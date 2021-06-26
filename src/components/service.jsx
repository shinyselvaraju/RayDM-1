import Sidebar from "./sidebar";
import WorkCard from "./workcard";
import Footer from "./footer";
import {useEffect} from "react"


function Service(){

	useEffect(() => {
	  window.scrollTo(0, 0);
	}, []);
	
	return(
		<div>
			<Sidebar/>
			<div style={{minHeight:"45vh", display:"flex", alignItems:"flex-end", textAlign:"center"}}>
				<div style={{color:"white", width:"100vw"}}>
					<div className="container">
			 			<div className="row">
			 				<div className="col-md-6">
			 					<iframe src="https://ntmaker.gfto.ru/newneontexten/?image_height=200&image_width=600&image_font_shadow_width=30&image_font_size=100&image_background_color=003B49&image_text_color=FF91A9&image_font_shadow_color=F7406B&image_url=&image_text=Services&image_font_family=Nickainley&" frameborder='no' scrolling='no' width="600" height="200"></iframe>
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
			 					<WorkCard title="Web Design"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Graphic Design"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Marketing"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Virtual Assistance"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Web Develoment"/>
			 				</div>
			 				<div className="col-md-4 col-sm-6">
			 					<WorkCard title="Content Creation"/>
			 				</div>
			 			</div>
			 		</div>
			<Footer />
		</div>
	);
}

export default Service;