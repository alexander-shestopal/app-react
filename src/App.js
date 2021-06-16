import React, { useState } from 'react';

function currentDates() {
	const today = new Date();
	let month = today.getMonth()+1;
	let pref = "-0";
	if(month>9){
		let pref = "-";
	}
	const date = today.getFullYear() + pref + month +"-" + today.getDate();
	return date; //firstDate
};
function App() {
	const [value1, setValue1] = useState(currentDates());
	const [value2, setValue2] = useState(currentDates());
	const [result, setResult] = useState(0);
	function diffDates(day_one, day_two) {
		var d1 = new Date(day_one) //firstDate
		var d2 = new Date(day_two) //SecondDate
		var diff = Math.abs(d1-d2)/(1000*3600*24) //in milliseconds/days
    	return diff;
	};

	return <div>
		<input type="date" value={value1} onChange={event => setValue1(event.target.value)} />
		<input type="date" value={value2} onChange={event => setValue2(event.target.value)} />

		<button onClick={() => setResult( diffDates(value2,value1))}>date</button>
		
		<p>result: {result}</p>
	</div>;
}

export default App;