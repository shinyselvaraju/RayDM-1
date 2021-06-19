import {NavLink} from "react-router-dom";

function Laptopnavbar(){
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={{position: "fixed", width:"99vw"}}>
		  <div className="container-fluid">
		    <NavLink className="navbar-brand" exact to="#">RayDM</NavLink>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
		      <div className="navbar-nav">
		        <NavLink className="nav-link" exact to="/">Home</NavLink>
		        <NavLink className="nav-link" exact to="/projects">Projects</NavLink>
		        <NavLink className="nav-link" exact to="/services">Services</NavLink>
		        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
		      </div>
		    </div>
		  </div>
		</nav>
		)
}

export default Laptopnavbar;