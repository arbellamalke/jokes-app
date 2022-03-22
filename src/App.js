import React, {useState, useEffect} from "react";

const jokes = "https://api.icndb.com/jokes/random"


function App() {
	const[joke, setJoke] = useState('');
	
	const getJoke = () => {
		fetch(jokes)
		.then(res => res.json())
		.then(data => setJoke (data.value.joke));
	} 
	useEffect(() => {
		getJoke();
	}, [])
return (
	<div className="box">
		<h1>Welcome to Joy and Arbellas joke generator hhh</h1>
		<p dangerouslySetInnerHTML={{__html: joke}}/>
		<button onClick={getJoke}>Click on me to laugh! </button>
	</div>
)
};
 
export default App;