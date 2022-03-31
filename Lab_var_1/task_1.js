//Функція перетворення стрічки в масив слів
function string_to_word(array)
{
    //Ініціалізація масиву слів
    let words = [];
    let word = "";
    //Цилк розбиття стрічки в масив слів
    for (let i = 0; i < array.length + 1; i++)
    {
        //Перевірка на пробіл
        if (array[i] === ' ' || i === array.length)
        {
            words.push(word);
            word = "";
        }
        else
            word += array[i];
    }
    //Повернення масиву слів
    return words;
}


let str1 = "The Times Higher Education World University Rankings is one of the three top university rankings in the world.";
let str2 = "Students have another reason to be proud of studying at a leading Ukrainian University. ";
let str3 = "One more Ukrainian university entered the category";

console.log("\nСтрічки : \n\n" + str1 + "\n" + str2 + "\n"+ str3 + "\n");
console.log("Масив слів із стрічок : \n\n" + string_to_word(str1) + "\n\n" + string_to_word(str2) + "\n\n"+ string_to_word(str3) + "\n");