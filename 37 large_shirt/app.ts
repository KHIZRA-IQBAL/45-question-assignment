//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function t_shirt(size:string='large',text:string='i love typescript.') {
    console.log(`Creating a ${size} with the massage : ${text}`);
}
t_shirt();
t_shirt('Medium');
t_shirt('small','i love python');