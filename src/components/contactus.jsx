import {useState} from "react";
import axios from "axios";

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
		axios.post("https://formsubmit.co/sollamateneennapannuva@gmail.com", data)
		.then((res) => {})
		.catch((err) => {});
		updateName("");
		updateDetails("");
		updateEmail("");
		updatePhone("");
	}

	return(
		<div style={{color:"white", height:"100vh", margin:"auto"}} className="container">
			<div className="row" style={{margin:"auto"}}>
				<h1>Hire us</h1>
				<p>
					Hello, I am 
					<input name="name" placeholder="Your Name" onChange={(event) => updateName(event.target.value)} value={name}/>
					and I want to discuss about a project. You can contact me through email at
					<input name="email" placeholder="Your email" onChange={(event) => updateEmail(event.target.value)} value={email}/>
					or phone at
					<input name="phone" placeholder="Your phone" onChange={(event) => updatePhone(event.target.value)} value={phone}/>.
					We are want 
					<br />
					<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> Web Development<br/>
					<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> Web Design<br/>
					<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> Advertisement<br/>
					<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> Profile Mgmt
					<br />
					services from you.
					<br />
					More about our project <textarea name="details" placeholder="Enter some details about your project" row="4" onChange={(event) => updateDetails(event.target.value)}/>
				</p>

				<span>
				<span className="buttons" onClick={postInfo}> submit</span>
				</span>
					
			</div>
		</div>
	)
}

export default ContactUs;