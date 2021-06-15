import React, { useState } from 'react';

function square(num) {
	return num ** 2;
}
function age(year) {
let date = new Date();
let str = date.getFullYear();
return str - year;
}

function App() {
	const [value, setValue] = useState(0);
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<input value={value} onChange={handleChange} />
		<p>{age(value)}</p>
	</div>;
}

export default App;