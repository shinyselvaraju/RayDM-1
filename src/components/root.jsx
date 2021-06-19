import {useHistory} from "react-router-dom";

function Root(props){

	const history = useHistory();

	return(
		<div>
			<h1>What are you?</h1>
			<button onClick={() => {localStorage.setItem("align", "left"); props.setpg("left"); history.push("/home")}}>Left Hander</button>
			<button onClick={() => {localStorage.setItem("align", "right"); props.setpg("right"); history.push("/home")}}>Right Hander</button>
		</div>)
}

export default Root;