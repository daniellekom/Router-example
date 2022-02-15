import React,{useState} from "react";
//create a function called onsbmit
//e.preventDefault prevents the browser on localhost from reloading
//e for event b for browser. "prevent the action of this event"
function Form() {
    const [name,setName] = useState('');

const onSubmit =(e) => {
    e.preventDefault();
};

return(
  <>
   <form onSubmit={onSubmit}>
<h1>Fill out this form</h1>
    </form>
    <input type ="text" 
    placeholder="Type your name here"
    value={name}
    //onchange gets called everytime a new name gets inputed
    onChange = {(e) =>setName(e.target.value)}
    />
    <button type="submit">Submit</button>
    </> 
)

}

export default Form;