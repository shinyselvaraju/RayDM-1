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
	const [wd, updatewd] = useState(false);
	const [gd, updategd] = useState(false);
	const [mar, updatemar] = useState(false);
	const [va, updateva] = useState(false);	
// 
// 	function setName(event){
// 		updateName(event.target.value)
// 	}

	function postInfo(){
		const data = {name: name, email: email, phone: phone, details: details, wd:wd, gd: gd, mar:mar, va:va};
		console.log(data);
		axios.defaults.headers.post['Content-Type'] = 'application/json';
		axios.post("https://formsubmit.co/ajax/bajra1.nyra@gmail.com", data)
		.then((res) => {alert("Thanks for reaching out to us. We'll get back to you shortly")})
		.catch((err) => {});
		updateName("");
		updateDetails("");
		updateEmail("");
		updatePhone("");
		updatewd(false);
		updategd(false);
		updatemar(false);
		updateva(false);		
	}

	return(
		<div>
			<Sidebar />
			<div style={{color:"white", height:"100vh", display: "flex", justifyContent: "center"}}>
				<div className="container" style={{margin:"auto"}}>
					<div className="row" style={{fontSize:device==="mobile"?"0.9em":"1.5em"}}>
						<h1><span style={{borderBottom:"2px solid #0f0"}}>Hire us</span></h1>
						<p style={{marginTop:"1em"}}>
							Hello, I am 
							<input autocomplete="off" className="inputs" name="name" placeholder="Your Name" onChange={(event) => updateName(event.target.value)} value={name}/>
							and I want to discuss about a project. You can contact me through email at
							<input autocomplete="off" className="inputs" name="email" placeholder="Your email" onChange={(event) => updateEmail(event.target.value)} value={email}/>
							or phone at
							<input autocomplete="off" className="inputs" name="phone" placeholder="Your phone" onChange={(event) => updatePhone(event.target.value)} value={phone}/>
							<br />
						</p>
							<div className="container-fluid">
								<div className="row">
										<p>We want these services from you.</p>
									
										<div className="container-fluid">
											<div className="row">
												<div className="col-md-6" style={device==="laptop"?{fontSize:"1em"}:{fontSize:"1.3em"}}><input className="form-check-input" onChange={(event) => updatewd(event.target.checked)} type="checkbox" checked={wd} id="flexCheckChecked1" /> Web development<br/></div>
												<div className="col-md-6" style={device==="laptop"?{fontSize:"1em"}:{fontSize:"1.3em"}}><input className="form-check-input" onChange={(event) => updategd(event.target.checked)} type="checkbox" checked={gd} id="flexCheckChecked2" /> Graphic design<br/></div>
												<div className="col-md-6" style={device==="laptop"?{fontSize:"1em"}:{fontSize:"1.3em"}}><input className="form-check-input" onChange={(event) => updatemar(event.target.checked)} type="checkbox" checked={mar} id="flexCheckChecked3" /> Marketing<br/></div>
												<div className="col-md-6" style={device==="laptop"?{fontSize:"1em"}:{fontSize:"1.3em"}}><input className="form-check-input" onChange={(event) => updateva(event.target.checked)} type="checkbox" checked={va} id="flexCheckChecked4" /> Virtual Assistance</div>
											</div>
										</div>
								</div>
							</div>
						<p>
							<br />
							More about our project <textarea className="inputs" name="details" placeholder="Enter a few details" value={details} onChange={(event) => updateDetails(event.target.value)}/>
						</p>

						<span style={{ marginTop:"1em"}}>
						<span style={{fontSize:"1em"}} className="buttons" onClick={postInfo}>submit</span>
						</span>
							
					</div>
				</div>
			</div>
		</div>
		
	)
}

export default ContactUs;