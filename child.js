// child.js - send messages back to the parent process evey second for 10 seconds.

let i = 0;

function notifyMainProcess() {
  i++;
  if (i > 10) {
    return;
  }
  process.send({
    type: 'progressUpdate',
    progress: (i * 10)
  });
  setTimeout(notifyMainProcess, 1000);
}

console.log('Child process started.');

setTimeout(notifyMainProcess, 1000);
