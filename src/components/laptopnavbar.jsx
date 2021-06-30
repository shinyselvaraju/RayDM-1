import {NavLink, useLocation} from "react-router-dom";
import StartProject from "./startproject";

function Laptopnavbar(){

	const location = useLocation();

	return(
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark" style={{zIndex:"100", position: "fixed", width:"100vw"}}>
			  <div className="container-fluid">
			    <NavLink className="navbar-brand color1" exact to="/"><img style={{height:"50px"}} src="logo.png"/></NavLink>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
			      <div className="navbar-nav">
			        <NavLink className="nav-link color1" exact to="/">Home</NavLink>
						<NavLink className="nav-link color1" exact to="/about">About</NavLink>
			        <NavLink className="nav-link color1" exact to="/work">Work</NavLink>
			        <NavLink className="nav-link color1" exact to="/service">Services</NavLink>
			        <NavLink className="nav-link color1" exact to="/contact">Contact</NavLink>
			      </div>
			    </div>
			  </div>
			</nav>
			{location.pathname==="/contact"?<></>:<StartProject/>}
		</div>
		
		)
}

export default Laptopnavbar;