import {useHistory} from "react-router-dom";

function StartProject(){

	const history=useHistory();

	return(
		<div style={{color:"white", position:"fixed", zIndex:"100", bottom:"35px", right:"35px", backgroundColor:"transparent"}}> 
			<span className="buttons" onClick={()=>history.push("/contact")}>Start your Project</span>
		</div>
	)
}

export default StartProject;