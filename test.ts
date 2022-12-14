import StringBuilder from "./index";

console.time('Without library');

let str = '';

for (let i = 0; i < 100000000; i++) {
    str += 'i';
}

console.log('TEST without library: ' + str.length);

console.timeEnd('Without library');

console.time('With library');

const stringBuilder = new StringBuilder({});

for (let i = 0; i < 100000000; i++) {
    stringBuilder.add('i');
}

let str2 = stringBuilder.toString();

console.log('TEST with library: ' + str2.length);

console.timeEnd('With library');