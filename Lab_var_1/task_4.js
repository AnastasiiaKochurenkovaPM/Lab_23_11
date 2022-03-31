function mostFrequent_element_in_array(arr, n) {
           
        // Сортуємо масив для зручного пошуку
        arr.sort();
           
        //Шукаємо максимальний значення за допомогою лінійного обходу
        let max = 1, res = arr[0];
        let curr_count = 1;
           
        for (let i = 1; i < n; i++)
        {
            if (arr[i] == arr[i - 1])
                curr_count++;
            else
            {
                if (curr_count > max)
                {
                    max = curr_count;
                    res = arr[i - 1];
                }
                curr_count = 1;
            }
        }
       
        // Якщо останній елемент більш повторюваний
        if (curr_count > max)
        {
            max = curr_count;
            res = arr[n - 1];
        }
        return res;
    }
 
        let array_1 = [3, 5, 4, 3, 2, 3, 1];
        let n_1 = array_1.length;
        let result_1 = mostFrequent_element_in_array(array_1,n_1);

        let array_2 = [10, 2, 4, 8, 10, 3, 10];
        let n_2 = array_2.length;
        let result_2 = mostFrequent_element_in_array(array_2,n_2);

        console.log(`Найбільш повторюваний елемент у рядку <${array_1}> є <${result_1}>`);
        console.log(`Найбільш повторюваний елемент у рядку <${array_2}> є <${result_2}>`);
        