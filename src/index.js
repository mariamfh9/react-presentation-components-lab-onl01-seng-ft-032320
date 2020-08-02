import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


let alertUser = () => {
  alert("Really, I am happy")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={alertUser} />
  </div>,
  document.getElementById('root')
  );