import * as React from 'react';
import './style.css';

export default function Counter() {
  const [show, setShow] = React.useState(false)


//   const handleToggle = () => {
//     setShow(!show)
//   }
// // 
  return (
    <div>
      <button onClick={(e)=> {
        e.preventDefault;
        setShow(!show);
      }}>{show ? 'hide' : 'show'} counter</button>
    {show ? <DisplayCounter /> : null}
    </div>
  )
  
}

function DisplayCounter() {
  const [state, setCount] = React.useState({ count: 0, name: 'John' });

  React.useEffect(()=>{
    console.log('mount');

    return () => {
      console.log('unmount')
    }
  }, [])

  React.useEffect(() => {
    console.log(state)
  }, [state.count])
  
  const handleClick = () => {
    setCount({ ...state, count: state.count + 1})
   }

   return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleClick}>Increment</button>
      </div>
  )
}