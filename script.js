
var a = false;
var b = false;

document.write(a && b)
document.write(a || b)
// document.write(a++);
document.write("<hr>");
// document.write(++b);
// document.write("<hr>");

// document.write(a);
// document.write(b);


//Null va Undefined
let unde
let Unde
let Unded

let rong = null
document.writeln(unde)
document.writeln(rong)
document.write("<hr>")

//Kieu so number
let number1
document.writeln(number1)



number1 = 11;
document.writeln(number1)

const number2 = 10
document.writeln(number2)

// let number2 = 20;
document.writeln(number1 + number2)
document.write("<hr>")


//Kieu so string
let chuoi1 = 'aa';
document.writeln(chuoi1)
document.write("<hr>")

//Boolean
let boolean1 = true;
let boolean2 = false;

document.writeln(boolean1)
document.writeln(!boolean1)
document.writeln(boolean2)
document.writeln(!boolean2)
document.write("<hr>")

// Object 
let Khanh = {
    name: "Khanh",
    age: 33,
    address: '24 Tran Phu',
    married: true,
}

// console.log(Khanh);
document.writeln(Khanh.age)

//Mang Array
let mang = new Array();
mang[0] = 'Ky';
mang[1] = 'Quang';
mang[2] = 10;
mang[3] = false;
mang[4] = {
    name: "Khanh",
    age: 33,
    address: '24 Tran Phu',
    married: true,
};
mang[5] = 'Ky';
mang[6] = 'Ky';
mang[7] = 'Ky';
mang[8] = 'Ky';

document.write(mang)

document.write("<hr>")

var a = 100;
var b = 998;
document.write("Gia tri cua bien a la"+ ++a);
document.write("<hr>")
document.write("Gia tri cua bien a la"+ ++b);

document.write("<hr>")

var result_1 = (5 > 3) && (5 > 7); //False
var result_2 = (5 > 3) || (5 > 7); //true
var result_3 = !(5 < 3); //True
var result_4 = (5 > 3) && (5> 7) || (7 >5); //True

document.write(result_1 + "<hr>");
document.write(result_2 + "<hr>");
document.write(result_3 + "<hr>");
document.write(result_4 + "<hr>");



