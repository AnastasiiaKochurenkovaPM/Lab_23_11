//Функція обирає опорний елемент, а інші елементи розміщює по ліву і праву сторону, по відношенню до опорного елемента
function partition(arr, low, high) {
 
    // опорний елемент
    let pivot = arr[high];
 
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
 
// Функція для заміни двох елементів(допоміжна)
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//Функція швидкого сортування
function quickSort(arr, low, high) {
    if (low < high) {
 
        //індекс розподілу
        let pi = partition(arr, low, high);
 
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
 
// Функція друку масиву
function printArray(arr, size) {
    for (let i = 0; i < size; i++)
        console.log(arr[i] + " ");
}
 
let array = [7, 10, 9, 1, 5, 5, 12, 0];
let n = array.length;
 
quickSort(array, 0, n - 1);
console.log(`Введений масив: <${array}>`);
console.log(`Відсортований масив: `);
printArray(array, n);