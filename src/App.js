import React, { useState } from 'react';

function App() {
	let [ban, setBan] = useState(false);
	let [user, setUser] = useState('Petja');
	let [lastName, setLastName] = useState('Petrov');
	let [age, setAge] = useState(18);
	return <div>
		<span>{user}</span>
		<button onClick={()=>setUser('alex')}>changeUser</button>
		<span>{lastName}</span>
		<button onClick={()=>setLastName('Alexandrov')}>changeLastName</button>
		<button onClick={() => setAge(age-1)}>-</button>
		<span>{age}</span>
		<button onClick={() => setAge(age+1)}>+</button>
		<span>{ban?'Ban':'UnBan'}</span>
		<button onClick={() => setBan(!ban)}>Ban/UnBan</button>
	</div>;
}

export default App;