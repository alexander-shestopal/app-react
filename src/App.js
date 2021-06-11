import React, { useState } from 'react';

function App() {
	let [count, setCount] = useState(0);
	
	return <div>
		<button onClick={()=>setCount(count - 1)}>-</button>
		<span>{count}</span>
		<button onClick={()=>setCount(count + 1)}>+</button>
	</div>
}

export default App;