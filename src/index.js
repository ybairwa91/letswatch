import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
// import StarRating from './StarRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       
//   <StarRating color='blue' onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
  // <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Ok', 'good', 'amazing']} />
  // <StarRating maxRating={5} color='pink' size={24} />
  // <StarRating maxRating={5} size={30} className='test' defaultRating={3} />
  // <Test />
  <
*/}
    <App />
  </React.StrictMode>
);


