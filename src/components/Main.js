import { useState } from "react";

const Main = () => {

   const [min, setMin] = useState(0);
   const [max, setMax] = useState(100);
   const [number, setNumber] = useState(Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)));
   const [error, setError] = useState("")

   function generate(e) {
      e.preventDefault();
      if(min > max) {
         setMin(max);
         setMax(min);
      }
      setNumber(Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)));
   }

   return (
      <div className="main">
         <span className="main__header">Number generator</span>
         {error && <span className="error">{error}</span>}
         <form>
            <div className="main__inputs">
               <label htmlFor="minimum">
                  Min
                  <input type="number" id="minimum" name="minimum" value={min} onChange={(e) => {
                     setMin(e.target.value)
                     if (isNaN(parseInt(e.target.value))) {
                        setError("Type a number")
                     }else if (!isNaN(parseInt(e.target.value))) {
                        setError()
                     }
                  } } />
               </label>

               <label htmlFor="maximum" >
                  Max
                  <input type="number" id="maximum" name="maximum" value={max} onChange={(e) => {
                     setMax(e.target.value)
                     if (isNaN(parseInt(e.target.value)) && e.target.value != "") {
                        setError("Type a number")
                     } else if (!isNaN(parseInt(e.target.value))) {
                        setError()
                     }
                  }} />
               </label>
            </div>
            <button className="main__button" onClick={generate}>Generate</button>
         </form>
         <div className="main__output">{number}</div>
      </div>
   );
}
 
export default Main;