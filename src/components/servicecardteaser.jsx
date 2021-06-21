function Card(props){

	const services=[
		{
			name: "Web Design",
			desc: "Breathtaking Visuals and Mind Bending experience",
			img: "webdesign.jpg"
		},
		{
			name: "Web Development",
			desc: "Built to last and great UI websites with code/ visual editors",
			img: "webdesign.jpg"
		},
		{
			name: "Instagram, Facebook ads",
			desc: "Breathtaking Visuals and Mind Bending experience",
			img: "webdesign.jpg"
		},
		{
			name: "Personal Branding",
			desc: "Breathtaking Visuals and Mind Bending experience",
			img: "webdesign.jpg"
		}
	];

	return(
		<div>
			{/* {console.log(services[props.service])} */}
			<img src={services[props.service].img} style={{height:"100%", width:"100%", maxHeight:"50vh"}}/>
			<h3 className="Heading">{services[props.service].name}</h3>
			<p>{services[props.service].desc}</p>
		</div>
	)
}

export default Card;