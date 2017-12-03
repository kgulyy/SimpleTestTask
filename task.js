/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getAnagrams(list) {
    const sortedList = [];

    list.forEach((value, index) => {
        // разбить строку на буквы, отсортировать и слить обратно
        const sorted = list[index].split('').sort().join('');
        sortedList.push(sorted);
    });

    // const result = [];


    return sortedList;
}

/*[ 'кот',
    'аилп',
    'абккоор',
    'опст',
    'кот',
    'аккош',
    'аилп',
    'абккоор',
    'опст' ]*/


const inputList = [
    'кот', 'пила', 'барокко',
    'стоп', 'ток', 'кошка',
    'липа', 'коробка', 'пост'
];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));

/*[
    ['кот', 'ток'],
    ['пила', 'липа'],
    ['барокко', 'коробка'],
    ['стоп', 'пост']
];*/
