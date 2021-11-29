import React from 'react';
import { ServiceModel } from '../models/ServiceModel';
interface ForProps<Model,OtroGenerico>{
    list: Model[];
    child: (arg:Model, res:OtroGenerico)=>JSX.Element;
};

export function For <ModelAspero, OtroGenerico>(prop:ForProps<ModelAspero,OtroGenerico> & {children ?: React.ReactNode }):JSX.Element{
    const {child, list} = prop;
    if (!child || !list) return <></>;
    return <>{list.map(child)}</>
}






//aprendiendo genericos
interface Fn<GenericoAspero>{
    (fn:GenericoAspero):GenericoAspero;
}

interface ObjNombre<Type> { 
    name?:string;
    edad?:string;
    callback: Fn<Type>;
    otraFuncion?: <Generico>(ar:Generico)=>Generico;
}
function funcionGenerica<Type>(arg:Type):Type{return arg}

const obj: ObjNombre<string> = {
    callback:funcionGenerica
};
let mistring:string = obj.callback("XXS");
console.log("🚀 ~ file: For.tsx ~ line 31 ~ mistring", mistring)

const obj2 : ObjNombre<number> = {
    callback: funcionGenerica
}
let minumero:number = obj2.callback(123);
console.log("🚀 ~ file: For.tsx ~ line 37 ~ minumero", minumero)

let obj3: ObjNombre<{name:string, apellido:string}> = {
    callback : function<Type>(arg:Type){return arg},
    otraFuncion : <Type extends unknown>(arg:Type)=>arg
}; 
let objeto:Object = obj3.callback({name:"cristian",apellido:"cristianscript"})


// generic function with constraints
//exige que le pase el length
interface LengthWise{
    length : number;
}
function devuelva<Type extends LengthWise>(arg:Type){
    return arg.length;
}

const arregloAspero = devuelva<{length:number,value:number}>({ length: 10, value: 3 }); 

function retorneDosTiposs<EdadP,Namep> (edad:EdadP, name:Namep):Namep|string{
    return String(edad) + name;
}

const name:string = retorneDosTiposs<number,string>(15,"hadas");

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
  let x = { a: 1, b: 2, c: 3, d: 4 };
  getProperty(x, "a");
//   getProperty(x, "m"); //Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.