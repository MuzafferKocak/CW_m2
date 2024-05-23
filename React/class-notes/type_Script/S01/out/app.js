let multiply = (x, y) => {
    return x * y;
};
function selamla2(mesaj, isim) {
    return `${mesaj + "" + isim}`;
}
console.log(selamla2("Günaydin", "Ahmet"));
console.log(selamla2("Günaydin"));
function greet(name, age) {
    if (age !== undefined) {
        return `Hello my name is ${name} and I am ${age} years old.`;
    }
    else {
        return `Hello my name is ${name}.`;
    }
}
console.log(greet('Mark'));
console.log(greet('Mark', 40));
console.log(greet('Mark', 40));
function selamla4(mesaj, ...isimler) {
    return `${mesaj + " " + isimler.join(", ") + "!"}`;
}
console.log(selamla4("Merhaba"));
console.log(selamla4("Merhaba", "Mark"));
console.log(selamla4("Merhaba", "Mark", "Anthony"));
