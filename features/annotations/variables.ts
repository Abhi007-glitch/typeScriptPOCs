let apple : number = 5;

//******** CONCEPT OF -> TYPE INFERENCE (type is automatically gussed by typescrip) */
// case 1: variable decleared and intialized in the single line
let am ="j3"; //  am is assigned type(String) as per the value assigned to it

// case 2 : varible decleared on one line and assigned value on another
let temp ; // variable temp is assinged (any) type as we have not assigned a value to it in the same line
temp="anuj";
temp =1;  
// temp can take all the types of value now as it is any type (acts like noraml js variable )
///Summary -> Rely on Type Inference only when we are declearing and intializing a variable in the same line


let speed : string ="fast";// 5/ true gives error

let nothingMuch : null = null;  // type and value both are same 
let nothing :undefined =undefined;

// built in objects
let now : Date = new Date();


// Array
let color : string [] ;
color =["red",'yellow','blue'];

// classes

class Car{

}

let car: Car;

//object literals
let point :{x:number;y:number}= {x:10,y:20}; // need to define the type of all the properties
// ; -> seprator between types

//Function
const logNumber : (i:number)=>void = (i:number)=>{
  console.log(i);
}


