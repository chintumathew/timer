const args = process.argv.slice(2);
let timerArray = [];
if (args.length === 0) {
  console.log("no input");
  process.exit();
}
let timer = args.sort((a, b) => a - b);
timer.forEach(i => {
  timerArray.push(parseInt(i));
});
for (const element of timerArray) {
  if (Number.isNaN(element)) {
    continue;
  }
  if (element < 1 ) 
    continue;
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\x07');
  }, element * 1000);
}