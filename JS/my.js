var a, b, c, s;

/* a = 3, b = 4, c = 5;
p = (a + b + c) / 2;
s = Math.sqrt (p * (p - a) * (p - b) * (p - c));
console.log (s); */



var calc = function(a, b, c) {
    var p;
    p = (a + b + c) / 2;
    return s = Math.sqrt (p * (p - a) * (p - b) * (p - c));
}

// 1
a = 3, b = 4, c = 5;
var triangle = calc(a, b, c);
console.log(triangle);

// 2 
a = 11, b = 15, c = 16;
console.log(calc(a, b, c));

// 3 
a = 101, b = 215, c = 163;
console.log(calc(a, b, c));



var d = 10;
test();
function test() {
    d = 30;
    var f = 40;
    console.log(d, f)
}
var f = 20;
console.log(d, f)