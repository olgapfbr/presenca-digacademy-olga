// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
// Show the values in the console.

// let cat = {
//    name: "Platão",
//    color: "marrom e branco",
//    age: 11,
// }

// console.log(
//    `O ` + cat.name + ` é ` + cat.color + ` e tem ` + cat.age + ` anos.`
// )

// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.

// cat.toy = "bolinha";
// cat.age = 12;

// console.log(cat)

// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".

// let dog = {
//    name: "Abu",
//    breed: "Lhasa apso",
//    bark: function(){
//        console.log("Woof!")
//    }
//}

//dog.bark()


// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

// let market = [
//    { name: "Pão de forma", price: 10 },
//    { name: "Manteiga", price: 15},
//];

//for (let i = 0; i < market.length; i++) {
//    console.log("Produto: " + market[i].name + ", Preço: R$" + market[i].price);
//}
   

// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

// let movie = {
//    name: "Indiana Jones",
//    director: "Steven Spielberg",
//    review: {
//        rating: 10,
//        comment: "Lindezo"
//    }
//}

//console.log(
//   movie.name + ` de ` + movie.director + ` tem nota ` + movie.review.rating + ` com o comentário: ` + movie.review.comment
//)

// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.

let scores = {
   Alice: 5,
   Bob: 7,
   Charlie: 4,
 };

let total = 0;

for (let player in scores) {
    total += scores[player];
}

console.log("Total: " + total)



let agenda = {
    contacts: [
        { name: "Alice", phone: "1234567"},
        { name: "Bob", phone: "987654321"},
],


    
}