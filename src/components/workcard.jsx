function Workcard(props){
	return(
		<div className="workcards" style={{textAlign:"center", marginTop:"3em", position:"relative", textAlign:"center"}}>
			<img src="webdesign.jpg" style={{height:"100%", width:"100%", maxHeight:"35vh"}}/>
			<div style={{position:"absolute", bottom:"0", width:"100%", backgroundColor:"transparent", backgroundImage:"linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1))"}}>
				<h3 style={{ backgroundColor:"transparent"}}>SOme work</h3>
				<p style={{ backgroundColor:"transparent"}}>ABout it</p>
			</div>
		</div>
	)
}

export default Workcard;