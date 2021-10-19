const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
	'./content/result-sync.txt',
	`This is the result of ${first},${second}`,
	{ flag: 'a' }
);

console.log('Task is done');
console.log('Goto next task');
