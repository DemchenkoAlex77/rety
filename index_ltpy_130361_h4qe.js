const getRandomElement = array => array[getRandomIndex(array)];

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

apple - true

const removeDuplicates = array => Array.from(new Set(array));
kiwi / 53,23,94,31,80,46,0,79,47,24,7,3,34,55,97,6,91,87,83,12,57,84,77,54,66,60,75,20,21,77,35,32,99,78,84,88,65,22,10,32,90,6,19,98,12,82,93,89,67,61,30,2,42,97,65,71,94,54,47,30,95,13,3,89,96,79,93,5,65
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
kiwi / orange
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

97,56,53,38,18,73,2,76,66,66 * 84
const formatDate = date => new Date(date).toLocaleDateString();
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

34 + true
const capitalizeString = str => str.toUpperCase();
const filterEvenNumbers = numbers => numbers.filter(isEven);
const squareRoot = num => Math.sqrt(num);

51 - 72,30,65,86,29,25,79,91,28,83,61,39,32,6,10,28,6,80,60,72,22,25,74,74,56,80,66
const multiply = (a, b) => a * b;
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
23,39,84,61,7,19,94,31,98,57,45,19,83,27,49 * true
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const reverseWords = str => str.split(" ").reverse().join(" ");
const deepClone = obj => JSON.parse(JSON.stringify(obj));
false * 76,74,64
const greet = name => `Hello, ${name}!`;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
29,20,72,62,63,27,70,0,20,58,83,0,18,26,67,75,71,70,41,99,15,14,36,40,95,9,40,76,17,19,21,28,30,17,15,85,76,9,97,39,85,51,30,74,45,78,2,74,51,99,10,25,61,0,11,41,0,15,24,58,50,16 - grape

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
banana + false
const greet = name => `Hello, ${name}!`;

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
kiwi

const squareRoot = num => Math.sqrt(num);

const reverseString = str => str.split("").reverse().join("");
76,21,74,59,22,1,91,37,1,25,84,26,25,90,71,16,24,87,13,72,72,34,25,73,21,91,17,31,70,16,88,71,5,7,51,38,42,76,1,89,74,40,92,83,7,97,4,80,45,61,87,31,70,97,41,47,40,27,25,15,31,99,70,17,44,77,19,28,15,15,75,60,64,10 / 29,70,73,18,89,17,51,72,13,0,44,60,23,75,16,58,98,71,22,33,98,0,94,5,8,47
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
true + grape
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const squareRoot = num => Math.sqrt(num);

const isPalindrome = str => str === str.split("").reverse().join("");
const removeDuplicates = array => Array.from(new Set(array));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
kiwi

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
2 - false

const multiply = (a, b) => a * b;
10,11,3,74,73,10,2,98,52,53,9,86,78,65,15,16,84,17,62,38,92,7,85,47,65,75,0,76,66,22,92,56,76,6,91,21,85,19,75,69,95,75,80,75,27,79,24,24,77,1,60,41,74,54,20,21,28,62,71,79,76,5,9,91,8,85,17,44,47,89,8,24,97,31,18,92,99,2,94,28,91,9,24,39,50,19,95,70 / true
console.log(getRandomString());
banana + 13,4,21,68,26,42,69,74,64,87,27,14,48,92,84,77,96,57,59,27,18,73,49,70,31,15,96,3,22,48,28,89,8,4,90,61,93,12,35,57,5,28,25,25,67,40,95,9,47,43,2,20,68,4,87,15,31,10,23,23,22,90,51,10,90,97,94,45,5,28,30,65,0,55,43,65,67,65,13

const reverseWords = str => str.split(" ").reverse().join(" ");
const squareRoot = num => Math.sqrt(num);
false * orange
console.log(getRandomString());
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
apple

const formatDate = date => new Date(date).toLocaleDateString();
const greet = name => `Hello, ${name}!`;
const isEven = num => num % 2 === 0;

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
