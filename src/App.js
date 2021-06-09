import React from 'react';
import uuid from 'react-uuid';
import { nanoid } from 'nanoid';

function App() {
const users = [
	{id: 1, name: 'user1', surn: 'surn1', age: 30},
	{id: 2, name: 'user2', surn: 'surn2', age: 31},
	{id: 3, name: 'user3', surn: 'surn3', age: 32},
  	{id: 5, name: 'user5', surn: 'surn5', age: 35},
    	{id: 8, name: 'user8', surn: 'surn8', age: 38},
];
const rows = users.map(function(item) {
		return <tr key={uuid()}>
			<td>{item.name}</td>
			<td>{item.surn}</td>
      <td>{item.age}</td>
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
