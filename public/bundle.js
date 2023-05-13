import './style.css'
import {useEffect} from 'react';




const Render=()=>{
useEffect(() => {
  var temp=  document.getElementById('root')
  console.log('temp: ', temp);


}, [input])



    return(
       <div class='center'>
       <div class="loader"></div>
     </div>
    )
}


export default Render