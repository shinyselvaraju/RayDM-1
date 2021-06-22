import Sidebar from "./sidebar";
import Landingpage from "./landingpage";
import ServicesTeaser from "./servicesteaser";
import AboutusTeaser from "./aboutusteaser"
import Work from "./work";
import Footer from "./footer"

function Home(props){
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