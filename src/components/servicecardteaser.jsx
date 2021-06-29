function Card(props){

	const services=[
		{
			name: "Web Development",
			desc: "High-Quality responsive UI websites which are customized to cater to you and your business. Designed by exceptional code and visual editors.",
			img: "webdesign.jpg"
		},
		{
			name: "Graphic Design",
			desc: "Our Designs offer stunning Immersive experiences with breathtaking visuals. At RayDM you will find a myriad of options for the perfect design. We create designs that you just can’t ignore. Check out our services to make your brand shine. ",
			img: "webdesign.jpg"
		},
		{
			name: "Marketing",
			desc: " In this rapidly changing world,  make sure your brand is on the top. Let us market your brand by creating a lasting impression by balancing creativity and technology.",
			img: "webdesign.jpg"
		},
		{
			name: "Virtual Assistance",
			desc: "Wondering how to grab the attention of the crowd to your brand? Acing that first impression is the way to go. We recognize the power of good visuals. You can get a memorable first impression for your brand with our strategically curated innovative visual assistance.",
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