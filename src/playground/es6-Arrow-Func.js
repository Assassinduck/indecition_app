const squared = (num) => num * num;



const getFirstNameVerbose = (fName) => {
    return fName.split(" ")[0];
}

console.log(getFirstNameVerbose("Maria Pettersen"));

const getFirstName = (name) => name.split(" ")[0];


console.log(getFirstName("Julian Pettersen"));