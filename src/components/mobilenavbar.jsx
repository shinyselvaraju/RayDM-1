import {useState, useRef, useEffect} from "react";
import {NavLink, useHistory} from "react-router-dom";

function MobileNavbar(){

	const [menu, menuClicked] = useState(false);

	const history = useHistory();

	const MyComponent = () => {
	const divRef = useRef(null);

	useEffect(() => {
	divRef.current.scrollIntoView({ behavior: 'smooth' });
	});

	return <div ref={divRef} />;
	}

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
					<NavLink style={{fontSize:"1.5em"}}className="nav-link color1" exact to="/home">Home</NavLink>
					<NavLink style={{fontSize:"1.5em"}}className="nav-link color1" exact to="/about">About</NavLink>
			        <NavLink style={{fontSize:"1.5em"}}className="nav-link color1" exact to="/work">Work</NavLink>
			        <NavLink style={{fontSize:"1.5em"}}className="nav-link color1" exact to="/service">Services</NavLink>
			        <NavLink style={{fontSize:"1.5em"}}className="nav-link color1" exact to="/contact">Contact</NavLink>
				</div>
	        	<div style={{color:"white", position:"absolute", zIndex:"100", bottom:"25px", right:"25px", backgroundColor:"transparent"}}> 
					<span className="buttons" onClick={()=>history.push("/contact")}>Start your Project</span>
				</div>
			</div>:<div />}
	</div>)
}

export default MobileNavbar