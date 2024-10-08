import { useState } from 'react'
import './App.css'
import Bulb from './Bulb.jsx'

const makeLights = (width, height) => {
  let a = [];
  for(let i = 0; i<height; i++) {
    let b = [];
    for (let j = 0; j<width; j++) {
      b.push(false);
    }
    a.push(b);
  }
  return(a);
}

const BOARD_WIDTH = 6;
const BOARD_HEIGHT = 5;

function safeFlip(a, i, j) {
  if (i >= 0 && i < BOARD_HEIGHT && j >= 0 && j < BOARD_WIDTH) {
    a[i][j] = !a[i][j];
  }
}

function App() {

  const INIT_ARRAY = makeLights(BOARD_WIDTH, BOARD_HEIGHT);
  INIT_ARRAY[2][2] = true;
  const [ lightsArray, setLightsArray ] = useState(INIT_ARRAY);
  const flip = (i,j) => {

    safeFlip(lightsArray, i, j);
    safeFlip(lightsArray, i-1, j);
    safeFlip(lightsArray, i+1, j);
    safeFlip(lightsArray, i, j-1);
    safeFlip(lightsArray, i, j+1);
    // lightsArray[i][j] = !lightsArray[i][j];

    setLightsArray([...lightsArray]);
  }
  // console.log('make lights:' , lightsArray);
  return (
    <>
      <table>
        <tbody>
          {lightsArray.map((row, i) =>
            <tr>
              {row.map((lit, j) => 
              <td><Bulb lit={lit} flip={() => flip(i,j)}/></td>)}
            </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default App
