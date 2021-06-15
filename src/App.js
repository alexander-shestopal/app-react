import React, { useState } from 'react';

function App() {
	let [user, setUser] = useState('Petja');
	let [lastName, setLastName] = useState('Petrov');
	let [age, setAge] = useState(18);
	return <div>
		<span>{user}</span>
		<button onClick={()=>setUser('alex')}>changeUser</button>
		<span>{lastName}</span>
		<button onClick={()=>setLastName('Alexandrov')}>changeLastName</button>
		<span>{age}</span>
		<button onClick={()=>setAge(40)}>changeAge</button>
	</div>
}

export default App;