/**
 * Внутренняя сортировка каждого элемента списка
 * @param {string[]} list
 * @returns {string[]}
 */
function innerSort(list) {
    const result = [];
    list.forEach((value, index) => {
        // разбить строку на буквы, отсортировать и слить обратно
        const sorted = list[index].split('').sort().join('');
        result.push(sorted);
    });

    return result;
}

/**
 * Поиск индексов дубликатов в списке
 * @param {string[]} list
 * @returns {Array<[int, int]>}
 */
function getDuplicatesIndex(list) {
    const result = {};
    for (let i = 0; i < list.length; i++) {
        if (result.hasOwnProperty(list[i])) {
            result[list[i]].push(i);
        } else if (list.lastIndexOf(list[i]) !== i) {
            result[list[i]] = [i];
        }
    }
    return Object.values(result);
}

/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getAnagrams(list) {
    const result = [];

    const innerSortedList = innerSort(list);
    const duplicatesIndex = getDuplicatesIndex(innerSortedList);

    duplicatesIndex.forEach(array => {
        const resultSubArray = [];
        array.forEach(index => resultSubArray.push(list[index]));
        result.push(resultSubArray);
    });

    return result;
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
