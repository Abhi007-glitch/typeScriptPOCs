
const add =(a:number,b:number):number=>{
  return a+b;
}

const subtract =(a:number,b:number)=>{
 // return a-b; // based on this return type return type is set as a number
 a-b; // function will have a void return type as no return statement
}

function multi(a:number,b:number):number{
  return a*b;
}

const div = function(a:number,b:number):number{
  return a*b;
}

const throwError =(message:string):never=>{ // tells typescript to not to look for the end of the function in aim to find a return type of the function (by inference)
  throw new Error(message);
}

// passing a object literal as param
const forecast = {
  date:new Date(),
  weather:'sunny'
}

const logWeather = (forecast:{date:Date,weather:string}):void=>{
  console.log(forecast.date);
  console.log(forecast.weather);
}


const onFlyDestructure = ({date,weather}:{date:Date,weather:string}):void=>{
  console.log(date);
  console.log(weather);
}

onFlyDestructure(forecast);