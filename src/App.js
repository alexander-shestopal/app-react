import React from 'react';

function App() {
		function show1(name) {
		alert('hello'+ name);
	}
	
	function show2(family) {
		alert('hello' + family);
	}
	return <div>
		<button onClick={()=>show1('Alex')}>show Name</button>
    	<button onClick={()=>show2('Shestopal')}>show Family</button>
	</div>;
}

export default App;
