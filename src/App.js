import React from 'react';
import { Component} from 'react';

import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';

class App extends Component {

  
render() {
  return (
    <div className="App">
        <Topbar/>
      
    <div className={classes.MainContainer}>
      <ProductPreview/>
        <ProductDetails/>
{/*         
      <div className={classes.ProductPreview}>
      </div>

      <div className={classes.ProductData}>
      </div> */}
    </div>



    </div>
  );
}


  
}

export default App;
