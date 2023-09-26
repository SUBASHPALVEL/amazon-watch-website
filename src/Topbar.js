import React from "react";
import classes from "./Topbar.module.css"
const Topbar = ()=>{
    return(
        <header className="App-header">
        <nav className= {classes.Topbar}>
          <img src ="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" alt= "Amazon Logo" />
        </nav>
        </header>
    )
}

export default Topbar;