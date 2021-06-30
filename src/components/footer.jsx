import SocialBar from "./socialbar";
import {useHistory} from "react-router-dom";

function Footer(){

	const history = useHistory();

	return(
		<div id="footer">
			<div className="container lp">
				<div className="row lp">
					<div className="col-md-4 col-sm-6 lp">
						<h3 className="lp" >Quick Links</h3>
						<p  className="lp" style={{cursor:"pointer"}}onClick={()=>history.push("/about")}>About</p>
						<p  className="lp" style={{cursor:"pointer"}}onClick={()=>history.push("/service")}>Services</p>
						<p  className="lp" style={{cursor:"pointer"}}onClick={()=>history.push("/work")}>Work</p>
						<p  className="lp" style={{cursor:"pointer"}}onClick={()=>history.push("/contact")}>Contact</p>
					</div>
					<div className="col-md-4 col-sm-6 lp">
						<h3 className="lp" >Experts in</h3>
						<p  className="lp" style={{cursor:"pointer"}} onClick={() => history.push("/work#webdev")}>Web Development</p>
						<p  className="lp" style={{cursor:"pointer"}} onClick={() => history.push("/work#graphicdes")}>Graphic Design</p>
						<p  className="lp" style={{cursor:"pointer"}} onClick={() => history.push("/work#marketingig")}>Marketing</p>
						<p  className="lp" style={{cursor:"pointer"}} onClick={() => history.push("/work#marketingig")}>Virtual Assistance</p>
					</div>
					<div className="col-md-4 col-sm-6 lp">
						<SocialBar/>
						<p style={{textAlign:"center"}} className="lp">Have a Great day!</p>								
					</div>
				</div>
			</div>
		</div>
		)
}

export default Footer;