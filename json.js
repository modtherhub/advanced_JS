var json = '{"a": 1, "b": 2}';

var obj = JSON.parse(json);

console.log(typeof(obj))

var json1 = JSON.stringify(obj);

console.log(typeof(json1))