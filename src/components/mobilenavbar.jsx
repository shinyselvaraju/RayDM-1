import {useState} from "react";
import {NavLink} from "react-router-dom";

function MobileNavbar(){

	const [menu, menuClicked] = useState(false);

	return(
	<div>
		<div className="color1 option" style={{position:"fixed", zIndex:"2", top:"49vh", right:"0"}} onClick={() => menuClicked(!menu)}>
			{menu?<div><i className="fas fa-times mobilemenu"></i></div>:<div><i className="fas fa-bars mobilemenu"></i></div>}
		</div>

		{menu?<div id="mobilenavbar">
				<div>
					<NavLink className="nav-link color1" exact to="/home">Home</NavLink>
			        <NavLink className="nav-link color1" exact to="/work">Work</NavLink>
			        <NavLink className="nav-link color1" exact to="/service">Services</NavLink>
			        <NavLink className="nav-link color1" exact to="/contact">Contact</NavLink>
				</div>
			</div>:<div />}
	</div>)
}

export default MobileNavbar