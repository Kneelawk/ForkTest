const fork = require('child_process').fork;

console.log('Starting child processes...');
for (let i = 0; i < 4; i++) {
  let child = fork(`${__dirname}/child.js`);
  child.on('message', (m) => {
    console.log('Process #' + i + ' is ' + m.progress + '% done.');
  });
}
console.log('Child processes are started.');
