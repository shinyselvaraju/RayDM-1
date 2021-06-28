function Workcard(props){
	return(
		<div className="workcards" style={{textAlign:"center", marginTop:"3em", position:"relative", textAlign:"center"}}>
			<img src={props.img} style={{height:"100%", width:"100%", height:"35vh"}}/>
			<div style={{position:"absolute", bottom:"0", width:"100%", backgroundColor:"transparent", backgroundImage:"linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.5))", borderRadius:"0 0 10px 10px"}}>
				<h3 style={{ backgroundColor:"transparent", color:"black"}}>{props.title}</h3>
				{/* <p style={{ backgroundColor:"transparent"}}>ABout it</p> */}
			</div>
		</div>
	)
}

export default Workcard;