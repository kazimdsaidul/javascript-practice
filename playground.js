//ES6 fat arrow function
function add(a, b) {
    return a + b;
}
console.log(add(10, 20))

//==================================
let adderWithName = (a, b) => {
    return a + b;
}
console.log(adderWithName(10, 20))

let singlaLineOfFunction = (a, b) => a + b
console.log(singlaLineOfFunction(10, 90))

//===================================
// this in for every inside function
// var javascript = {
//     name: "javascript",
//     lib: ["React", "Angular", "Vue"],
//     printLib: function() {
//         var self = this;
//         this.lib.forEach(element => {
//             console.log(element);
//         });
//     }
// }

// javascript.printLib()

//=============================

var javascript = {
    name: "javascript",
    lib: ["React", "Angular", "Vue"],
    printLib: function() {
        this.lib.forEach((a) => console.log('${this.name} loves ${a}'));
    }
}

javascript.printLib();