import SocialBar from "./socialbar"

function Footer(){
	return(
		<div id="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-6">
						<h3>Quick Links</h3>
						<p>About</p>
						<p>Services</p>
						<p>Work</p>
						<p>Contact</p>
					</div>
					<div className="col-md-4 col-sm-6">
						<h3>Experts in</h3>
						<p>Web Design</p>
						<p>Web Development</p>
						<p>Instagram ads</p>
						<p>Graphic design</p>
					</div>
					<div className="col-md-4 col-sm-6">
						<SocialBar />
						<p style={{textAlign:"center"}}>Have a Great day!</p>
						<h1 style={{textAlign:"right"}}>R</h1>									
					</div>
				</div>
			</div>
		</div>
		)
}

export default Footer;