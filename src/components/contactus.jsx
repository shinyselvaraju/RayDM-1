import {useState, useEffect} from "react";
import axios from "axios";
import Sidebar from "./sidebar"

function ContactUs(){

	const [device, setDevice]=useState("laptop");

	useEffect(() => {
	
		if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  setDevice("mobile");
		} else {
		  	setDevice("laptop");
		}

		const userAgent = navigator.userAgent.toLowerCase();
		const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
		if (isTablet){
			setDevice("laptop")
		}
	}, []);

	const [name, updateName] = useState("");
	const [email, updateEmail] = useState("");
	const [phone, updatePhone] = useState("");
	const [details, updateDetails] = useState("");

	function setName(event){
		updateName(event.target.value)
	}

	function postInfo(){
		const data = {name: name, email: email, phone: phone, details: details};
		console.log(data);
		axios.post("https://formsubmit.co/svaibavbajra@gmail.com", data)
		.then((res) => {alert("Thanks for reaching out to us. We'll get back to you shortly")})
		.catch((err) => {});
		updateName("");
		updateDetails("");
		updateEmail("");
		updatePhone("");
	}

	return(
		<div>
			<Sidebar />
			<div style={{color:"white", height:"100vh", display: "flex", justifyContent: "center"}}>
				<div className="container" style={{margin:"auto"}}>
					<div className="row" style={{fontSize:device==="mobile"?"0.9em":"1.5em"}}>
						<h1><span style={{borderBottom:"2px solid #0f0"}}>Hire us</span></h1>
						<p>
							Hello, I am 
							<input className="inputs" name="name" placeholder="Your Name" onChange={(event) => updateName(event.target.value)} value={name}/>
							and I want to discuss about a project. You can contact me through email at
							<input className="inputs" name="email" placeholder="Your email" onChange={(event) => updateEmail(event.target.value)} value={email}/>
							or phone at
							<input className="inputs" name="phone" placeholder="Your phone" onChange={(event) => updatePhone(event.target.value)} value={phone}/>.
							<br />
						</p>
							<div className="container-fluid">
								<div className="row">
										<p>We want these services from you.</p>
									
										<div className="container-fluid">
											<div className="row">
												<div className="col-md-6" style={device==="laptop"?{fontSize:"1em"}:{fontSize:"1.3em"}}><input className="form-check-input" onChange={(event) => console.log(event.target.checked)}type="checkbox" value="" id="flexCheckChecked1" /> Web dev.<br/></div>
												<div className="col-md-6" style={device==="laptop"?{fontSize:"1em"}:{fontSize:"1.3em"}}><input className="form-check-input" onChange={(event) => console.log(event.target.checked)}type="checkbox" value="" id="flexCheckChecked2" /> Graphic des<br/></div>
												<div className="col-md-6" style={device==="laptop"?{fontSize:"1em"}:{fontSize:"1.3em"}}><input className="form-check-input" onChange={(event) => console.log(event.target.checked)}type="checkbox" value="" id="flexCheckChecked3" /> Advertisement<br/></div>
												<div className="col-md-6" style={device==="laptop"?{fontSize:"1em"}:{fontSize:"1.3em"}}><input className="form-check-input" onChange={(event) => console.log(event.target.checked)}type="checkbox" value="" id="flexCheckChecked4" /> Profile Mgmt	</div>
											</div>
										</div>
								</div>
							</div>
						<p>
							<br />
							More about our project <textarea className="inputs" name="details" placeholder="Enter some details about your project" row="4" value={details} onChange={(event) => updateDetails(event.target.value)}/>
						</p>

						<span style={{ marginTop:"1em"}}>
						<span style={{fontSize:device==="mobile"?"0.5em":"1em"}} className="buttons" onClick={postInfo}> submit</span>
						</span>
							
					</div>
				</div>
			</div>
		</div>
		
	)
}

export default ContactUs;