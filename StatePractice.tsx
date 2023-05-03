
import * as React from 'react';
import {useState, useEffect} from 'react';



  
export const StatePractice = () => {
  ///useState own Example
  const [ toggle, setToggle] = useState(false);

const toggleFunctionExpression = ( ) => {
  toggle === true? setToggle(false): setToggle(true);
}

return(
  <div>
   <div className="container-fluid mt-3">
                
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        <a className="navbar-brand text-primary mr-0">Company Logo</a>
                        <div className="form-inline ml-auto">
                            <div className="btn btn-primary" onClick={()=> { toggle === true? setToggle(false): setToggle(true)}}>
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </nav>
  </div>
  </div>
 
  )} 