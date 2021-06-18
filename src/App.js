import React, { useState } from 'react';


function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
	
	const result = notes.map((note, index) => {
		return <li key={index} >
			{note}
		<button onClick={() => remItem(index)}>del</button></li>;
	});
	
	function remItem(index) {
		setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
	}
	
	return <ul>
		{result}
		</ul>
}

export default App;