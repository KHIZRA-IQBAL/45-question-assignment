import { reverse } from "dns";

//store the location  in a array,make sure the  array is not in alphabetical order. 
let places:string[]=['burj khalifa','eifal tower','badshahi masjid','soul','tokyo'];

//print your array in its original order.
console.log(places);

//print your array in alphabetical order without modifying the actuall list.
console.log([...places].sort())

//show that your array is still in its original order by printing it.
console.log(places);

//print your array in alphabetical order without changing the order of its original array.
console.log([...places].sort().reverse());

//show that your array is still in its orginal orderd by printing it again .
console.log(places);

//reverse the order of your list. print the array to show that its order has changed.
console.log(places.reverse());

//reverse the order of your list again.print the  list to show its back to its oringal order.
console.log(places.reverse());

//Sort your array so its stored in alphabetical order. print the array to show that its order has been changed.
console.log(places.sort());

//sort to change your array so its stored in reverse alphabetical order. print the list to show that its order has changed.
console.log(places.sort().reverse());
