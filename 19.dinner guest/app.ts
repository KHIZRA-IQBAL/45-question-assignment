  let guest_list:string[]=['ali','hamza','faizan','arsalan','khizar'];
//for(let i = 0; i<guest_list.length; i++){
   // console.log()
//}
let not_present:string='hamza';
let  new_guest:string='sir zia ';
guest_list[1]=new_guest;
//for(let i =0; i<guest_list.length; i++ ){
   // console.log('dear mr.'+guest_list[i]+',\n\n it is our pleasure to inivite you in our party.\n\n thankyou!\n\n')
//}
//console.log(`Mr.${not_present},will not coming tomorrow dinner.`);
//console.log('good News! we find big table So we are inviting 3 more guests');

//invite three more guest .
guest_list.unshift('Daniyal nagori');
guest_list.splice(2,0,'Ameen Alam');
guest_list.push('mubasshir sir');

//Here i print the six array guest
//for(let i=0; i<guest_list.length; i++){
   // console.log('dear mr.'+guest_list[i]+',\n\n it is our pleasure to invite you in our party.\n\nthankyou!\n\n')
//}
//sorry massage to guest for not inviting
//console.log('\nSorry ! we cna not arrange big table so only two peoples will be  invited');

//Here i removed the guests
while(guest_list.length>2) {
  let removed_guest =guest_list.pop();
   //console.log(`Sorry Mr.${removed_guest} you are not invited for dinner.`);
}
//remaining two guests
//for(let i=0; i<guest_list.length; i++){
   // console.log('Dear mr . ' guest_list[i]+ ',\n\nyou are still invited.\n\n thank you!\n\n')
//}

// I Removed all  guests from the arrays
guest_list.splice(0,2);
console.log(guest_list);




//print a massage  indicating the number of people you are inviting to dinner
console.log(`total number of guest are ${guest_list.length}`);


