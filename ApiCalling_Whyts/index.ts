import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/1";

 interface obj{
  name:string
  email:string
  id:number
 }

 axios.get(url).then((response)=>{
     const data = response.data as obj;
     
     const id = data.id;
     const name = data.name; // possible typo in property name which will be detected automatically by the typescript
     const email =data.email;
   
     //printDetails(name,id,email); // wrong order of parameter from the order present in the function defination 
     printDetails(id,name,email);
    });


    function printDetails(id:number,name:string,email:string) // defing type of the parameters 
    {
      console.log(`Name : ${name} 
      email: ${email}
      id : ${id}   
  `);
    }