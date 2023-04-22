import React, { useState } from 'react';
import { ReactDOM } from 'react';
// function Example() {
//   // Khai báo 1 biến trạng thái mới đặt tên là "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Bạn đã click {count} lần</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click vào tôi
//       </button>
//     </div>
//   );
// }
// function FavoriteColor(){
//   const [color, setColor] = useState("red");
//   return(
//    <div>
//       <h1> My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() =>setColor("blue")}
//       >Blue
//       </button>
//       <button
//         type="button"
//         onClick={() =>setColor("red")}
//       >red
//       </button>
//       <button
//         type="button"
//         onClick={() =>setColor("pink")}
//       >pink
//       </button>
//       <button
//         type="button"
//         onClick={() =>setColor("green")}
//       >green
//       </button>
//   </div>
//   );
// }'

function Car() {
  const [car,setCar]=  useState({
    brand :"Ford",
    model :"Mustang",
    year :"1544",
    color :"red"
  }); 
  return(
    <div>
      <h1>My{car.brand}</h1>
      <p>It is a{car.color}{car.model}from {car.year}.</p>
    </div>
  )
}
export default Car;
