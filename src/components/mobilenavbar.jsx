import {useState} from "react";
import {NavLink} from "react-router-dom";

function MobileNavbar(){

	const [menu, menuClicked] = useState(false);

	return(
	<div>
		<div style={{position:"fixed", top:"49vh", right:"0"}} onClick={() => menuClicked(true)}>
			menu
		</div>

		{menu?<div style={{backgroundColor:"white", zIndex:"2", position:"fixed", top:"0", right:"0", height:"100vh", width:"100vw"}}>
			<div onClick={() => menuClicked(false)}>close</div>
			<NavLink className="nav-link" exact to="/home">Home</NavLink>
	        <NavLink className="nav-link" exact to="/projects">Projects</NavLink>
	        <NavLink className="nav-link" exact to="/services">Services</NavLink>
	        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
		</div>:<div />}
	</div>)
}

export default MobileNavbar