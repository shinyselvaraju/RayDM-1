import Sidebar from "./sidebar";
import Landingpage from "./landingpage";
import AboutusTeaser from "./aboutusteaser";
import ServicesTeaser from "./servicesteaser";
import Whyus from "./whyus";
import Team from "./team";

function Home(props){
	return(
		<div>
		<Sidebar/>
		<Landingpage />
		<AboutusTeaser />
		<ServicesTeaser />
		<Whyus />
		<Team />
		</div>
	);
}

export default Home;