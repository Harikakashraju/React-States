import React,{useState} from "react";

const SimpleForm = ()=>{

   let  [name,setName] = useState("")

   function mangoName(event){
      event.preventDefault();
       console.log(event.target.value);//small letters only
      setName(event.target.value.toUpperCase()); // converts to uppercase
   }
    
   return(
      <div>

            <input type="text" placeholder="Enter your Name" onChange={mangoName}  value={name} />
           
            <button onClick={()=>{setName("")}}>Clear</button>

            <h1>{name.toUpperCase()}</h1>
      </div>
   )

}

export default SimpleForm;