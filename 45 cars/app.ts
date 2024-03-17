// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type cars={
    manufacture:string;
    model:string;
    [key:string]:any;
}
function creativecar(manufacture:string,model:string,optional:Record<string,any>):cars{
    return{
        manufacture,
        model,
        ...optional

    }
}
const mycar : cars = creativecar("toyota","corolla",{color:"black",year:"2024"})
console.log(mycar);
    

