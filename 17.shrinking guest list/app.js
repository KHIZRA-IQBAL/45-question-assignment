var guest_list = ['ali', 'hamza', 'faizan', 'arsalan', 'khizar'];
// for(let i =0; i<guest_list.length; i++){
//     console.log('\nrespected sir/madam:'+guest_list[i]+',\n we invited you on dinner tomorrow ,\n\n THANKYOU');
// }
var not_present = 'hamza';
var new_guest = 'sir zia ';
guest_list[1] = new_guest;
// for(let i =0; i<guest_list.length; i++){
// console.log('\nrespected sir/madam:'+guest_list[i]+',\n we invited you on dinner tomorrow ,\nTHANKYOU \n');
// }
console.log("Mr.".concat(not_present, ",will not coming tomorrow dinner."));
console.log('good News! we find big table So we are inviting 3 more guests');
guest_list.unshift('Daniyal nagori');
guest_list.splice(2, 0, 'Ameen Alam');
guest_list.push('mubasshir sir');
for (var i = 0; i < guest_list.length; i++) {
    console.log('\nrespected sir/madam:' + guest_list[i] + ',\n we invited you on dinner tomorrow ,\nTHANKYOU \n');
}
console.log('\nSorry ! we cna not arrange big table so only two peoples will be  invited');
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry Mr.".concat(removed_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('\nrespected sir/madam:' + guest_list[i] + ',\n\n You are still invited,\n\nTHANKYOU \n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
