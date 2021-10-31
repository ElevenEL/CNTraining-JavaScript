//问题1
const removeRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    // todo
    return new Set(array);
    // 输出[1, 2, 3, "a", "b"]
}
removeRepeat();

//问题2
const findRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b', 'c'];
    // todo

    //将数组进行排序  
    array.sort();
    //定义结果数组  
    var arr = [];
    for (var i = 1; i < array.length; i++) { //从数组第二项开始循环遍历数组  
        //判断相邻两个元素是否相等，如果相等说明数据重复，否则将元素写入结果数组  
        if (array[i] == array[i - 1]) {
            arr.push(array[i]);
        }
    }
    return new Set(arr);
    // 输出[2, 3, "a"]
}
findRepeat();


//问题3
const clone = () => {
    //todo
    return JSON.parse(JSON.stringify(obj));
}
const obj = {
    arr: [{ a: 1, f: { q: 1 } }, 2, 3],
    obj: { key: 'value' },
    string: 'hello world',
};
const obj1 = clone(obj);
console.log(obj1.string === obj.string);


//问题4
const question4 = () => {
    // todo
    //修改代码输出 5,0,1,2,3,4
    for (var i = 0; i < 5; i++) {
        (function(j) {
            setTimeout(function() {
                console.log(j);
            }, 1000 * j);
        })(i);
    }
    console.log(i)
}
question4();