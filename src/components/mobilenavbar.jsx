import {useState} from "react";
import {NavLink, useHistory} from "react-router-dom";

function MobileNavbar(){

	const [menu, menuClicked] = useState(false);

	const history = useHistory();

	return(
	<div>
		<div className="color1 option" style={{position:"fixed", zIndex:"101", top:"49vh", right:"0"}} onClick={() => menuClicked(!menu)}>
			{menu?<div><i className="fas fa-times mobilemenu"></i></div>:<div><i className="fas fa-bars mobilemenu"></i></div>}
		</div>

		{menu?<div id="mobilenavbar" style={{zIndex:"100"}}>
				<div style={{position:"absolute", height:"100px", width:"100px", top:"10px", left:"10px"}}>
					<img src="favicon.svg"/>
				</div>
				<div>
					<NavLink style={{fontSize:"1.5em", textAlign:"center"}} className="nav-link color1" exact to="/home">Home</NavLink>
					<NavLink style={{fontSize:"1.5em", textAlign:"center"}} className="nav-link color1" exact to="/about">About</NavLink>
			        <NavLink style={{fontSize:"1.5em", textAlign:"center"}} className="nav-link color1" exact to="/work">Work</NavLink>
			        <NavLink style={{fontSize:"1.5em", textAlign:"center"}} className="nav-link color1" exact to="/service">Services</NavLink>
			        <NavLink style={{fontSize:"1.5em", textAlign:"center"}} className="nav-link color1" exact to="/contact">Contact</NavLink>
			        <NavLink style={{fontSize:"1.5em", textAlign:"center"}} className="nav-link color1 buttons" exact to="/contact">Start your Project</NavLink>
				</div>
			</div>:<div />}
	</div>)
}

export default MobileNavbar