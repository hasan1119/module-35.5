// TODO: 
/* 
১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 
*/

// var product = {
//     name: "Laptop",
//     quality: {
//         color: 'red',
//         weight: "1.8kg",
//         arr: [{
//             price: 34000
//         }]
//     },
//     brand: ["hp", "Asser", "lenevo"],
//     printName: function () {
//         return (this.quality.arr[0].price);
//     },
//     isExpensive: false
// }
// console.log(product.quality.arr[0].price);


// TODO: 

/* 

২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর  তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

*/

// var product = {
//     name: "Laptop",
//     quality: {
//         color: 'red',
//         weight: "1.8kg",
//         arr: [{
//             price: 34000
//         }]
//     },
//     brand: ["hp", "Asser", "lenevo"],
//     printName: function () {
//         return (this.quality.arr[0].price);
//     },
//     isExpensive: false
// }



// var templateStr = `color: ${product.quality.color}  brand: ${product.brand[1]} weight: ${product.quality.weight}`
// console.log(templateStr);


//TODO: 
/* ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।  */

/* const func = () => 89;
console.log(func()); */



//TODO: 
/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।  */

/* const divided = num => num / 7;
console.log(divided(21)); */


//TODO: 
/* 
৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 
*/
/* const add = (num1, num2) => (num1 + num2) / 2;
console.log(add(10, 5)); */

// TODO: 
/* 
৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/

//multiline
// const complexArrowFunc = (num, num2) => {
//     num += 7
//     num2 = num2 + 7
//     return num + num2;
// }

//singleline
// const complexArrowFunc = (num, num2) => (num +7)  + (num2+7)
// console.log(complexArrowFunc(7, 7));


//TODO:

/* 
৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/

// var arr = [14, 21, 35, 28, 70, 77, 84]
// // [2,3,]
// var newArr = arr.map((n)=> n/7)
// console.log(newArr);

// var newArr = []
// for (const num of arr) {
//     result = num / 7
//     newArr.push(result)
// }
// console.log(newArr);

TODO:

    /* 
    ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
     */

    //     var arr = [14, 21, 35, 28, 70, 77, 84, 77, 77]
    // /* // arr.forEach(num => console.log(num))
    // // [35,70]
    // // var result = arr.filter(num => num % 2 != 0)
    // // console.log(result); */

    // var result = arr.find(num => num >= 70)
    // console.log(result);

    // TODO:

    /* 
    ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
    */

    //     var obj = {
    //         name: "Hasan",
    //         age: 21
    //     }

    // const {age, name} = obj;

    //     // const {name, age} = obj;

    //     console.log(name , age);
    //     // // console.log(age);


    var arr = [23, 40]

const [a, b] = arr;
console.log(b + a);