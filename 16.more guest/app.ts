let guest_list:string[]=['ali','hamza','faizan','arsalan','khizar'];
// for(let i =0; i<guest_list.length; i++){
//     console.log('\nrespected sir/madam:'+guest_list[i]+',\n we invited you on dinner tomorrow ,\n\n THANKYOU');
// }
let not_present:string='hamza';
let  new_guest:string='sir zia ';
guest_list[1]=new_guest;

for(let i =0; i<guest_list.length; i++){
    console.log('\nrespected sir/madam:'+guest_list[i]+',\n we invited you on dinner tomorrow ,\nTHANKYOU \n');
}
console.log(`Mr.${not_present},will not coming tomorrow dinner.`);

console.log('good News! we find big table So we are inviting 3 more guests');
guest_list.unshift('Daniyal nagori');
guest_list.splice(2,0,'Ameen Alam');
guest_list.push('mubasshir sir');

for(let i =0; i<guest_list.length; i++){
    console.log('\nrespected sir/madam:'+guest_list[i]+',\n we invited you on dinner tomorrow ,\nTHANKYOU \n');
}