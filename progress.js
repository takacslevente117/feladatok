const { captureRejectionSymbol } = require("events");

console.log("szeretnék megtanulni prograozni");

// 2. feladat
let favoriteprograminglangeuge = 'javascript'
console.log(favoriteprograminglanguage)
// 3. fleadat
const firstnumber = 10;
const secondnumber = 12;
console.log(firsumber * secondnumber)
 
//4. fleadat
const statement = 12;
if(statement % 2 === 0) {
} else {
    console.log('páratlan vagyok')
}
//5. fledat
let i = 0;
while (i < 10) {
    console.log(`${i}, hazudni bűn.🐱‍🐉 `)
    i++;
    // i+= 1;
    //i = i + 1;
    //WINDOWS: CTRL + ALT + 7 backtick ``
}
//6. feladat.
for (let j = 10; j <= 500; j ++) {
    if (j %  2 === 0) {
    console.log(j);
    }
}

for (let k = 10;k <= 500; k += 2) {
    console.log(k)
}

// 7.feladat
function greeting(name) {
    return 'hello' + name;
}
console.log(greeting('bence'));



//8.feladat.
function sum(first, second) {
    return first + second;

}
const sumArrowfunction = (first, second ) => {
    return first + second;
}
const sumArrow = (first, second) => first + second;


//palindrome

function ispalindrome(palindrome) {

const withoutspace = palindrome.split('').join('');
const reversedstring = withoutspace.split('').revesre().join('')
return withoutspace === reversedstring;
}


console.log(palindrome('a cápa ette apáca'))
//acápaetteapáca
