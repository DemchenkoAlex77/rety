const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

class MyClass { constructor() { this.property = getRandomString(); } }
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

