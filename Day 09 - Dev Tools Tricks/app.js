

const dogs = [{name: 'Snickers', age: 2}, {name: 'hugo', age: 8}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px'
}


 // Regular
 console.log ('This is the regular to output a message with the console')

 // Interpolated
console.log(' Hello I am a %s string!', '😎🥰😍')

 //styled 
 console.log('%c I am some text styled by Javascript', 'fontsize:20px; background:purple; text-shadow: 10px 10px 0 grey');

 // warning !
console.warn(' Yoh, I am warning you now')

 // Error:
 console.error('ohh shit, where the fu*k is this error coming from');

 // Info 
 console.info('Nothing for you nigga lol');

 // Assertation
 const p = document.querySelector('p');
 console.assert(p.classList.contains('ouch'), 'That is wrong!')
 // Clearing 
 //this will clear all consoles, un-comment to see how it works
// console.clear ()

 // Viewing DOM Elements 
 console.log(p);
 console.dir(p)
 //console.clear()

 // Grouping Together 
 dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
 })
 // Counting 

 console.count('kaycee');
 console.count('nuel');
 console.count('kaycee');
 console.count('nuel');
 console.count('kaycee');
 console.count('nuel');
 console.count('nuel');
 console.count('kaycee');
 console.count('nuel');
 console.count('kaycee');
 console.count('kaycee');
 console.count('kaycee');
 // Timing 

 console.time ('fetching data')
 fetch('https://api.github.com/users/kayceeNuel')
 .then(data => data.json())
 .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
 });

console.table(dogs)