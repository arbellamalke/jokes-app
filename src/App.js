import React , {useState, useEffect} from "react";
import GetLocalStorage from './Component/GetLocalStorage';

const jokes = "https://api.icndb.com/jokes/random"


function App() {
	const[joke, getJoke] = useState('');
	
	const fetchJoke = () => {
		fetch(jokes)
		.then(res => res.json())
		.then(data => getJoke (data.value.joke));
	} 

	useEffect(() => {
		getJoke();
	}, [])

return (
	<div className="box" ><meta charset="UTF-8"/>
		<h1>Welcome to Joy and Arbellas joke generator</h1>
		<p dangerouslySetInnerHTML={{__html: joke}}/>
		<button onClick={fetchJoke}>Click on me to laugh!🤣 </button>
		<GetLocalStorage></GetLocalStorage>	
	</div>
)};
 
export default App;