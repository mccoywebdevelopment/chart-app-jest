import { addData, removeData, reverseGraph } from './utils/graph';

test('reversing a line graph', () => {
    let allData = [
        {
            value: 1,
            date: 2022
        },
        {
            value: 2,
            date: 2021
        },
        {
            value: 3,
            date: 2020
        },
        {
            value: 4,
            date: 2019
        }
    ]
    let y = [1,2];
    let x = [2022,2021];

    let expectedAllData = Array.from(allData).reverse();
    let expectedY = [4,3]
    let expectedX = [2019,2020];

    // Have to call it once or it will reverse multiple times
    let outPut = reverseGraph(x,y,allData);

    expect(outPut.x).toStrictEqual(expectedX);
    expect(outPut.y).toStrictEqual(expectedY);
    expect(outPut.arr).toStrictEqual(expectedAllData);
})

test('adding data to line graph', () => {
    let allData = [
        {
            value: 1,
            date: 2022
        },
        {
            value: 2,
            date: 2021
        },
        {
            value: 3,
            date: 2020
        },
        {
            value: 4,
            date: 2019
        }
    ]
    let y = [1,2];
    let x = [2022,2021];

    let expectedY = [1,2,3]
    let expectedX = [2022,2021,2020];

    addData(x,y,allData);

    expect(x).toStrictEqual(expectedX);
    expect(y).toStrictEqual(expectedY);
})

test('remove data from line graph', () => {
    let allData = [
        {
            value: 1,
            date: 2022
        },
        {
            value: 2,
            date: 2021
        },
        {
            value: 3,
            date: 2020
        },
        {
            value: 4,
            date: 2019
        }
    ]
    let y = [1,2];
    let x = [2022,2021];

    let expectedY = [1]
    let expectedX = [2022];

    let outPut = removeData(x,y,allData);

    expect(outPut.x).toStrictEqual(expectedX);
    expect(outPut.y).toStrictEqual(expectedY);
})


