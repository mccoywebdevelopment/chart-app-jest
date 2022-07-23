export function addData(x, y, arr) {
    let index = x.length;

    if (arr[index]) {
        x.push(arr[index].date)
        y.push(arr[index].value)
    }

    return {x,y}
}

export function removeData(x, y) {
    x.pop();
    y.pop();

    return { x, y }
}

export function reverseGraph(x, y, arr) {
    let length = x.length;

    // Have to reset x & y since we are reversing the data
    arr.reverse();
    x = [];
    y = [];

    for (var i = 0; i < length; ++i) {
        if (arr[i]) {
            x.push(arr[i].date);
            y.push(arr[i].value);
        }
    }

    return { x, y, arr }
}
