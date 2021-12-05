console.log('Hello World');
let name ='Yuko';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case-sensitive

let firstName = 'Yuko';
let lastName = 'Ishizu';

const interstRate = 0.3;

console.log(interstRate);

const ul = document.querySelector('.people');
const people = ['yuko', 'kozue', 'masatoshi','toshiko','ken'];
for(let i=0; i<people.length; i++){
    console.log(people[i]);
}
let html = ``;

people.forEach(person =>{
    html += `<li style="color:purple">${person}</li>`;
})
console.log(html);
console.log(ul);
ul.innerHTML = html;

//for loop
let num =0;
for(let i=0; i<5; i++){
    num +=i;
    console.log(num);
}
