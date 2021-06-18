import React, { useState } from 'react';


function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [value, setValue] = useState('');
	
	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});
	
	function addItem() {
		setNotes([...notes, value]);
		setValue('');
	}
	
	function changeInput(event) {
		setValue(event.target.value);
	}
	
	return <ul>
		{result}
		
		<input value={value} onChange={changeInput} />
		<button onClick={addItem}>add</button>
	</ul>;
}

export default App;