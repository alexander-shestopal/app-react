import React from 'react';

function App() {
let tmp, sum1 = 0; 
function getDigitsSum(num){
  while(num){
    tmp  = num%10;
    num = (num - tmp)/10;
    sum1 += tmp;
  }
  return sum1;

}
	
	return <div>
		{getDigitsSum(12345)}
	</div>
}

export default App;
