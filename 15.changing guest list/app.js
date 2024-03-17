var guest_list = ['ali', 'hamza', 'faizan', 'arsalan', 'khizar'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('\nrespected sir/madam:' + guest_list[i] + ',\n we invited you on dinner tomorrow ,\n\n THANKYOU');
}
var not_present = 'hamza';
var new_guest = 'sir zia ';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('\nrespected sir/madam:' + guest_list[i] + ',\n we invited you on dinner tomorrow ,\nTHANKYOU \n');
}
console.log("Mr.".concat(not_present, ",will not coming tomorrow dinner."));
