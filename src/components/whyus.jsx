import {useState} from "react";

function Whyus(){

	let list=["reason1", "reason2", "reason3"];
	const [count, setCount] = useState(0);

	return(
		<div id="whyus">
			<h1>whyus</h1>
			<div className="container">
				<button onClick={() => setCount(count+2)}>&lt;</button>
				<div>{list[count%list.length]}</div>
				<button onClick={() => setCount(count+1)}>&gt;</button>
			</div>
		</div>
	)
}

export default Whyus;