let A = [100, 200];
let B = [[0, 3], [0, 4], [2, 5], [1, 5]];

let result = [];

for (i = 0; i < B.length; i++) {
    result[i] = [A, B[i]]
}

console.log(result)