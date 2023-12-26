const anExampleVariable = "Hello World"


let temp = [1,2,3,4,"abhi"];
let temp1 :(string|number)[];
temp1=[];
temp1.push("abhi");
temp1.push(9);
temp1.push("f1");

const val1 = temp1.pop();
const val2 = temp1.pop();
const val3 = temp1.pop();


let tempn :any [] = [1,2,3,4,"abhi"];

// Array with object literal
let  obj :{int:number,nam:string} ;
obj={"int":1,"nam":"abhi"}
console.log("obj "+obj); // ************ ON CONSOLE WE get "obj [object Object]"
                        //         -> it's default result of toString method (toString EXSIST IN JS)

let arr1 : {int:number,nam:string}[]=[];
arr1.push({"int":1,"nam":"abh"});
arr1.push({"int":2,"nam":"jatin"});

console.log(`arr1 ->  ${arr1}`);

// Arrays with custom types
// define a custome type of object 
type t = {int:number,nam:string};
let tempo :t;
let arr2 : t[] =[];
// creating objcet using custrom define type 
tempo ={"int":9,"nam":"abhi"};
arr2.push(tempo);
console.log(`tempo 1 = ${tempo.int},${tempo.nam}`);
tempo = {"nam":"aju","int":9};
arr2.push(tempo);
console.log(`tempo 2 = ${tempo.int},${tempo.nam}`);

console.log(`arr2 ->  ${arr2}`);
console.log(arr1);
console.log(arr2);

console.log("mapping over the values :: ")
arr2.map((item)=>{
  console.log("item "+item);
})

// dealing with multi type arrays 
let multi = [ ["temp",1],3,obj];

// tuple type defined
type mutiT = [string,boolean];


let arr3 : (mutiT| t)[];
arr3=[];
arr3.push(tempo);
let obj1 :mutiT = ["abhi",true];
arr3.push(obj1);

console.log("Multi value "+arr3);


