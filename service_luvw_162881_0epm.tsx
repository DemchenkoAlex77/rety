grape

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
apple


const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const isEven = num => num % 2 === 0;
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const getRandomSubset = (array, size) => array.slice(0, size);
58,56,1,65,35,8,59,25,72,42,4,90,16,35,89,76,64,89,68 / true
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

true / 5,40,43,84,18,34,95,42,58,90,46,90,29,18,14,90,7,56,71,13,85,92,24,78,2,47,21,73,67,69,24,78,42,85,91,69,99,59,73,49,76,26,29,18,29,30,39,92,34,75,93,33,98,27,50,92,25,87,14,83,47,60,33,40,36,71,12,11,67,90,35,24,95,29,43,40
function addNumbers(a, b) { return a + b; }
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

69 * 34,81,6,45,42,52,73,31,43,80,93,45,74,63,14,31,19,23,35,18,42,18,40,38,9,79,30,31,78,1,90,75,82,95,70,30,92,72,89,8,71,48,67,18,35,89,97,75,14,92,97,94,88,59,87,66,29,15,16,13,30,35,49,9,43,83,59,51,70,81,94,32,21
const findSmallestNumber = numbers => Math.min(...numbers);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
76 + 64
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const deepClone = obj => JSON.parse(JSON.stringify(obj));

35,32,98,1,40,23,56,97,17,78,13,35,64,13,69,72,6,98,83,13,4,47,44,54,58,87,47,4,38,68,2,70 + 12,33,8,1,62
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
true + 8
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
true - grape
class MyClass { constructor() { this.property = getRandomString(); } }
false + grape
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
73 + 77
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

let array = getRandomArray(); array.forEach(item => console.log(item));
banana + grape
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
20 + 86
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
false / true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const deepClone = obj => JSON.parse(JSON.stringify(obj));
false * 88
const isPalindrome = str => str === str.split("").reverse().join("");
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const reverseWords = str => str.split(" ").reverse().join(" ");
79,46,88,42,60,58,70,56,96,68,71,63,82,43,99,54,3,27,18,10,46,27,40,33,6,82,5,91,96,16,83,67,41,20,10,18,2,42,33,40,98,12,42,58,54,52,37,73,13,50,69,71,49,66,2,94,61,66,53,50,16,55,62,27,24,49,70,54,59,12,85,10,53,73 + 95
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

65 * false
const isEven = num => num % 2 === 0;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

40 - 72
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const capitalizeString = str => str.toUpperCase();
const squareRoot = num => Math.sqrt(num);
orange

const sum = (a, b) => a + b;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const isPalindrome = str => str === str.split("").reverse().join("");
orange

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
true / kiwi
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
