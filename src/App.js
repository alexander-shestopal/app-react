import React, { useState } from 'react';

function App() {
	let [name, setName] = useState('prod');
	let [cost, setCost] = useState('1000');
	
	return <div>
		<span>{name}</span>
		<span>{cost}</span>
		
		<button onClick={() => setName('xxxx')}>btn1</button>
		<button onClick={() => setCost('2000')}>btn2</button>
	</div>;
}

export default App;