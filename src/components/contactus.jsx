import {useState} from "react";
import axios from "axios";
import Sidebar from "./sidebar";

function ContactUs(){

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
					<div className="row" style={{fontSize:"1em"}}>
						<h1>Hire us</h1>
						<p>
							Hello, I am 
							<input className="inputs" name="name" placeholder="Your Name" onChange={(event) => updateName(event.target.value)} value={name}/>
							and I want to discuss about a project. You can contact me through email at
							<input className="inputs" name="email" placeholder="Your email" onChange={(event) => updateEmail(event.target.value)} value={email}/>
							or phone at
							<input className="inputs" name="phone" placeholder="Your phone" onChange={(event) => updatePhone(event.target.value)} value={phone}/>.
							We want 
							<br />
							<input className="form-check-input" onChange={(event) => console.log(event.target.checked)}type="checkbox" value="" id="flexCheckChecked" /> Web Development<br/>
							<input className="form-check-input" onChange={(event) => console.log(event.target.checked)}type="checkbox" value="" id="flexCheckChecked" /> Web Design<br/>
							<input className="form-check-input" onChange={(event) => console.log(event.target.checked)}type="checkbox" value="" id="flexCheckChecked" /> Advertisement<br/>
							<input className="form-check-input" onChange={(event) => console.log(event.target.checked)}type="checkbox" value="" id="flexCheckChecked" /> Profile Mgmt
							<br />
							services from you.
							<br />
							More about our project <textarea className="inputs" name="details" placeholder="Enter some details about your project" row="4" value={details} onChange={(event) => updateDetails(event.target.value)}/>
						</p>

						<span>
						<span className="buttons" onClick={postInfo}> submit</span>
						</span>
							
					</div>
				</div>
			</div>
		</div>
		
	)
}

export default ContactUs;