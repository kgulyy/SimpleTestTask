/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getAnagrams(list) {
    const anagrams = {};

    list.forEach(word => {
        const sorted = word.split('').sort().join('');
        if (anagrams[sorted] != null) {
            anagrams[sorted].push(word);
        } else {
            anagrams[sorted] = [word];
        }
    });

    const result = Object.values(anagrams);

    return result.filter(subArray => subArray.length > 1);
}

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
