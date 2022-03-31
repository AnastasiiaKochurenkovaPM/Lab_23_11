//Функція, яка повертає факторіал числа
function get_Word_Permutation_Count (n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

let n_1 = 5;
let n_2 = 3;
let n_3 = 1;

let result_1 = get_Word_Permutation_Count(n_1);
let result_2 = get_Word_Permutation_Count(n_2);
let result_3 = get_Word_Permutation_Count(n_3);

console.log(`Факторіал числа <${n_1}> = ${result_1}`);
console.log(`Факторіал числа <${n_2}> = ${result_2}`);
console.log(`Факторіал числа <${n_3}> = ${result_3}`);