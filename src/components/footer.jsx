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
						<p  className="lp" onClick={()=>history.push("/about")}>About</p>
						<p  className="lp" onClick={()=>history.push("/service")}>Services</p>
						<p  className="lp" onClick={()=>history.push("/work")}>Work</p>
						<p  className="lp" onClick={()=>history.push("/contact")}>Contact</p>
					</div>
					<div className="col-md-4 col-sm-6 lp">
						<h3 className="lp" >Experts in</h3>
						<p className="lp" >Web Design</p>
						<p className="lp" >Web Development</p>
						<p className="lp" >Instagram ads</p>
						<p className="lp" >Graphic design</p>
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