
//Функція генерування усіх перестановок слова 
function permute(s, answer)
{ 
    if (s.length == 0)
    {
        console.log(answer + "  ");
    }
      
    for(let i = 0 ; i < s.length; i++)
    {
        let ch = s[i];
        let left_substr = s.slice(0, i);
        let right_substr = s.slice(i + 1);
        let rest = left_substr + right_substr;
        permute(rest, answer + ch);
    }
}
 
    let word_1= "сир";
    // let word_2= "вишня";
    // let word_3= "слива";
    let answer="";
      
    console.log(`Варіанти перестановки слова: <${word_1}> : `);
    permute(word_1, answer);
    // console.log(`Варіанти перестановки слова: <${word_2}> : `);
    // permute(word_2, answer);
    // console.log(`Варіанти перестановки слова: <${word_3}> : `);
    // permute(word_3, answer);
    