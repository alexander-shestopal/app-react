import React from 'react';
import uuid from 'react-uuid';
import { nanoid } from 'nanoid';

function App() {
const prods = [
	{id: id(), name: 'product1', cost: 100},
	{id: id(), name: 'product2', cost: 200},
	{id: id(), name: 'product3', cost: 300},
];
function id() {
return nanoid();
}
const rows = prods.map(function(item) {
		return <tr key={item.id}>
			<td>{item.id}</td>
			<td>{item.name}</td>
      <td>{item.cost}</td>
		</tr>;
	});
	
return <table>
		<thead>
			<tr>
				<td>Ім'я</td>
				<td>Прізвище</td>
        <td>Вік</td>
			</tr>
		</thead>
		<tbody>
			{rows}
		</tbody>
	</table>;
}

export default App;
