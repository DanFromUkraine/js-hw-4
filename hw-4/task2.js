const managers = ["Petro", "Viktor", "Anna", "Olga"];
const sales = [20000, 34000, 17000, 23000];
let matrix = [];
matrix.push(managers, sales);
console.table(matrix);
let string = '';
for( let data of managers) {
    string += matrix[0][managers.indexOf(data)] + '-';
    string += matrix[1][managers.indexOf(data)] + '; ';
    console.log(string);
}