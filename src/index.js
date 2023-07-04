import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Simpson from "./components/SimpsonsComponents/Simpson/Simpson";
import FamilySimpsons from "./components/SimpsonsComponents/FamilySimpsons/FamilySimpsons";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Simpson     name={'Bart'}*/}
    {/*             surname={'Simpson'}*/}
    {/*             age={10}*/}
    {/*             gender={'female'}*/}
    {/*             photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}*/}
    {/*         />*/}
      <FamilySimpsons/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
