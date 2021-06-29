import {useHistory} from "react-router-dom";

function Workcard(props){

	const history = useHistory();

	return(
		<div className="workcards" style={{textAlign:"center", marginTop:"3em", position:"relative", textAlign:"center", cursor:"pointer"}} onClick={() => window.open(props.url, '_blank')}>
			<img src={props.img} style={{height:"100%", width:"100%", height:"35vh"}}/>
			<div style={{position:"absolute", bottom:"0", width:"100%", backgroundColor:"transparent", backgroundImage:"linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,1))", borderRadius:"0 0 10px 10px"}}>
				<h3 style={{ backgroundColor:"transparent", color:"black"}}>{props.title}</h3>
				{/* <p style={{ backgroundColor:"transparent"}}>ABout it</p> */}
			</div>
		</div>
	)
}

export default Workcard;