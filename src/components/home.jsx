import Sidebar from "./sidebar";
import Landingpage from "./landingpage";
import ServicesTeaser from "./servicesteaser";
import AboutusTeaser from "./aboutusteaser"
import Work from "./work";
import Footer from "./footer";
import {useEffect} from "react";

function Home(props){

	useEffect(() => {
	  window.scrollTo(0, 0);
	}, []);

	return(
		<div>
		<Sidebar/>
		<Landingpage />
		<AboutusTeaser />
		<ServicesTeaser />
		<Work />
		<Footer />
		</div>
	);
}

export default Home;