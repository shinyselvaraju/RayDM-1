import Sidebar from "./sidebar";
import Landingpage from "./landingpage";
import ServicesTeaser from "./servicesteaser";
import AboutusTeaser from "./aboutusteaser"

function Home(props){
	return(
		<div>
		<Sidebar/>
		<Landingpage />
		<AboutusTeaser />
		<ServicesTeaser />
		</div>
	);
}

export default Home;