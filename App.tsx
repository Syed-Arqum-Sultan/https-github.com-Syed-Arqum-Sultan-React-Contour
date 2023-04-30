import * as React from 'react';
import {useEffect, useState} from 'react';
import './style.css';

export default function Counter() {
  const [show, setShow] = useState(false);


//   const handleToggle = () => {
//     setShow(!show)
//   }
// // 
  return (
    // <div>
      
    //   <button onClick={(e)=> {
    //     e.preventDefault;
    //     setShow(!show);
    //   }}>{show ? 'hide' : 'show'} counter</button>
    // {show ? <DisplayCounter /> : null}
    // </div>

      <div>
        {show? 
         <button onClick={(e)=> {
         e.preventDefault;
         setShow(!show);}}>
             hide counter </button>
          
       :  <button onClick={(e)=> {e.preventDefault;
        setShow(!show);}}>
            show counter </button>}
         {show ? <DisplayCounter /> : null}
        
      </div>


  )
  
}

function DisplayCounter() {
  const [state, setCount] = useState({ count: 0, name: 'John' });

  useEffect(()=>{
    console.log('mount');

     return () => {
       console.log('unmount')
     }
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state.count])
  
  // const handleClick = () => {
  //   setCount({ ...state, count: state.count + 1})
  //  }

   return (
    <div>
      <p>{state.count}</p>
      <button onClick={()=> setCount({...state, count:state.count + 1 })}>Increment</button>
      </div>
  )
}