function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)) {
        expected = expected.toString();
    }

    if(Array.isArray(result)) {
        result = result.toString();
    }

    if(expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Expected " + expected + " found " + function2test();
    }
}


//----------Exercise 1 ---------//
function max(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
console.log ("Exercise 1");
console.log("Expected output of max(1,2) is 2 " + myFunctionTest(2, function(){
    return max(1,2);
}))

console.log("Expected output of max(300,40) is 300 " + myFunctionTest(300, function(){
    return max(300,40);
}))


//------------------------------//
//----------Exercise 2 ---------//
console.log ("Exercise 2");
function maxOfThree(n1, n2, n3) {
    return max(max(n1,n2),n3);
}
console.log("Expected output of maxOfThree(1,2,3) is 3 " + myFunctionTest(3, function(){
    return maxOfThree(1,2,3);
}))

console.log("Expected output of maxOfThree(9,10,8) is 10 " + myFunctionTest(10, function(){
    return maxOfThree(9,10,8);
}))

console.log ("Expected output of maxOfThree(400,300,200) is 400 "+ myFunctionTest(400,function() {
    return maxOfThree(400,300,200);
}))


//----------Exercise 3 ---------//
console.log ("Exercise 3");
function isVowel(char) {
    let str="AEIOU";
    if (str.indexOf(char.toUpperCase())>=0) {
        return true;
    }
    else return false;
}

console.log ("Expected output of isVowel(U) is true " + myFunctionTest(true,function () {
    return isVowel("U");
}));

console.log ("Expected output of isVowel(u) is true " + myFunctionTest(true,function () {
    return isVowel("u");
}));

console.log ("Expected output of isVowel(B) is false " + myFunctionTest(false,function () {
    return isVowel("B");
}));
console.log ("Expected output of isVowel(t) is false " + myFunctionTest(false,function () {
    return isVowel("t");
}));

console.log ("Exercise 4");
function sum(arr) {

    let sum=arr.reduce(function (a,b) {
        return a+b;
    },0);
    return sum;
}

console.log("Expected output of sum([1,2,3,4,5]) is 15 " + myFunctionTest(15, function(){
    return sum([1,2,3,4,5]);
}))
//------------------------------//

console.log ("Exercise 5");
function mutilply(arr) {
    let result=arr.reduce(function(a,b) {
        return a*b;
    });
    return result;
}

console.log("Expected output of multiply([1,2,3,4,5]) is 120 " + myFunctionTest(120, function(){
    return mutilply([1,2,3,4,5]);
}));

console.log ("Exercise 6");
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log("Expected output of reverse('jag testar') is 'ratset gaj' " + myFunctionTest("jag testar", function(){
    return reverse("ratset gaj");
}))

//----------Exercise 7 ---------//
console.log ("Exercise 7");
function findLongestWord(arr) {
    return Math.max(...(arr.map(e => e.length)));
}

console.log("Expected output of findLongestWord(['Welcome','to','Maharahishi','University']) is 11 " + myFunctionTest(11, function(){
    return findLongestWord(["Welcome","to","Maharahishi","University"]);
}))
//------------
console.log ("Exercise 8");
function filterLongWords(arrWords,i) {
    return arrWords.filter(e => e.length>=parseInt(i));
}
console.log("Expected output of filterLongWords(['Welcome','to','Maharahishi','University'], 9) is ['Maharahishi','University'] " + myFunctionTest(["Maharahishi","University"], function(){
    return filterLongWords(["Welcome","to","Maharahishi","University"],9);
}))

//----------Exercise 9 ---------//
//functional programming: map, filter, reduce can replace many loops
console.log ("Exercise 8");
const a = [1,3,5,3,3];

//translate/map all elements in an array to another set of values
const b = a.map(function(elem, i, array) {
    return elem * 10;
})// [10,30,50,30,30]
console.log(b)

//select elements based on a condition
const c = a.filter(function(elem, i, array) {
    return elem == 3;
});//[3,3,3]
console.log(c);

//return the product of all elements;
const d = a.reduce(function(production, elem, currentIndex, array) {
    return production * elem;
}); //135
console.log(d)
//------------------------------//