
import classes from './Contact.module.css';
import Header from "../components/layout/Header";
import Homefooter from "../components/layout/Homefooter";
import Form from "./Form";

const Contact=(props)=>
{  
    async function addDetailsHandler(userDetails)
    {
      const response=await fetch('https://react-first-6bd48-default-rtdb.firebaseio.com/details.json', 
      {
        method:'POST',
        body:JSON.stringify(userDetails),
        headers : {
          'Content-Type':'application/json'
        }
      }) 
      const data=await response.json()
      console.log(data)
    }
   
    return(
        <div>
         <Header></Header>
         <div>
        <Form onAddUser={addDetailsHandler}></Form>
        </div>
      <Homefooter></Homefooter>
      </div>
    )
}

export default Contact;