import Sidebar from "./sidebar";
import WorkCard from "./workcard";
import Footer from "./footer";

import {useEffect, useState} from "react";

const works=[
	{
		img:"archer.jpeg",
		name:"Archer Events",
		title: "Web Development",
		url:"http://archerevents.in/",
		id:1
	},
	{
		img:"idiotic.jpeg",
		name:"Idiotic Marketing",
		title: "Web Development",
		url:"https://sxinyy.github.io/idiotic_marketing/",
		id:2
	},
	{
		img:"sumit.jpeg",
		name:"Sumit Mathur",
		title: "Web Development",
		url:"https://sxinyy.github.io/sumit_dancer/",
		id:3
	},
	{
		img:"topsea.jpeg",
		name:"TopSea",
		title: "Web Development",
		url:"https://bajra6.github.io/adityayadav/",
		id:4
	},
	{
		img:"shine.jpeg",
		name:"Shine Industry",
		title: "Web Development",
		url:"https://www.shineindustry.in/",
		id:5
	},
	{
		img:"des (1).jpg",
		title: "Graphic Design",
		url:"https://www.instagram.com/vazandawwww/?hl=en",
		id:6
	},
	{
		img:"des (2).jpg",
		title: "Graphic Design",
		url:"https://www.instagram.com/vazandawwww/?hl=en",
		id:7
	},
	{
		img:"des (3).jpg",
		title: "Graphic Design",
		url:"https://www.instagram.com/vazandawwww/?hl=en",
		id:8
	},
	{
		img:"des (4).jpg",
		title: "Graphic Design",
		url:"https://www.instagram.com/vazandawwww/?hl=en",
		id:9
	},
	{
		img:"des (5).jpg",
		title: "Graphic Design",
		url:"https://www.instagram.com/vazandawwww/?hl=en",
		id:10
	},
	{
		img:"igacc1.png",
		name:"Wealthy with Peter",
		title: "Social Media",
		url:"https://www.instagram.com/peters_world_of_advice/?utm_medium=copy_link",
		id:11
	},
	{
		img:"igacc2.png",
		name:"Kayode Bradnock",
		title: "Social Media",
		url:"https://www.instagram.com/kayode_bradnock/?utm_medium=copy_link",
		id:12
	},
	{
		img:"igacc3.png",
		name:"Success Thinks",
		title: "Social Media",
		url:"https://www.instagram.com/successthinks/?hl=en",
		id:13
	}
]

function Projects(){

	const [device, setDevice]=useState("laptop");
	const [tablet, setTablet] = useState(false);
	const [tile, setTile] = useState(0);

	useEffect(() => {
	  window.scrollTo(0, 0);

	  if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		  setDevice("mobile");
		} else {
		  	setDevice("laptop");
		}

		const userAgent = navigator.userAgent.toLowerCase();
		const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
		if (isTablet){
			setTablet(true);
			setDevice("mobile");
		}
	}, []);

	return(
		<div>
			<Sidebar/>
			<div style={device==="laptop"?{minHeight:"48vh", display:"flex", alignItems:"flex-end", textAlign:"center"}:tablet?{minHeight:"25vh", display:"flex", alignItems:"flex-center"}:{minHeight:"15vh", display:"flex", alignItems:"flex-end"}}>
				<div style={{color:"white", width:"97vw"}}>
					<img src="work.png" style={{maxWidth:"100vw"}}></img>
				</div>
			</div>
			<div className="container">
				<h3 style={{color:"white", marginTop:"1em"}}>Each project is tailored to perfection with close attention to the details by our members who are skilled professionals in their fields.</h3>
	 			<div className="row" id="webdev" >
	 				<h1 style={{marginTop:"2em", color:"white"}}>Web Development</h1>
	 				{works.map((work) =>(work.title==="Web Development"?<div className="col-lg-4 col-md-6 col-sm-6" style={tile===work.id||tile===0?{}:{opacity:"0.3"}} onMouseOver={()=>setTile(work.id)} onMouseOut={()=>setTile(0)}><WorkCard img={work.img} title={work.name} url={work.url}/></div>:<div />))
	 				}
	 			</div>
	 			<div className="row" id="graphicdes" >
	 				<h1 style={{marginTop:"2em", color:"white"}}>Graphic Design</h1>
	 				{works.map((work) =>(work.title==="Graphic Design"?<div className="col-lg-4 col-md-6 col-sm-6" style={tile===work.id||tile===0?{}:{opacity:"0.3"}} onMouseOver={()=>setTile(work.id)} onMouseOut={()=>setTile(0)}><WorkCard img={work.img} title={work.name} url={work.url}/></div>:<div />))
	 				}
	 			</div>
	 			<div className="row" id="marketingig" >
	 				<h1 style={{marginTop:"2em", color:"white"}}>Social Media</h1>
	 				{works.map((work) =>(work.title==="Social Media"?<div className="col-lg-4 col-md-6 col-sm-6" style={tile===work.id||tile===0?{}:{opacity:"0.3"}} onMouseOver={()=>setTile(work.id)} onMouseOut={()=>setTile(0)}><WorkCard img={work.img} title={work.name} url={work.url}/></div>:<div />))
	 				}
	 			</div>
			 </div>
			 <Footer />
		</div>
	)
}

export default Projects;