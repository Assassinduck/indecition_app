

const add = (a, b) => {
    //console.log(arguments)
    return a+b;
}

console.log(add(55, 1))



const user = {
    name: 'Julian',
    cities: ["Oslo", "Harstad", "Bergen"],
    printPlacesLived() {
        return cityMessages = this.cities.map((city) => this.name + " has lived in " + city + "!");
        

    }
}

console.log(user.printPlacesLived());



const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((numbers) => (numbers * this.multiplyBy));
    }
}

console.log(multiplier.multiply());