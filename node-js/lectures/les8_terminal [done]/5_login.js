"use strict";

const write = (s) => process.stdout.write(s);
process.stdin.on("data", (chunk) => {
  console.log(chunk);
});

console.clear();
console.log("\x1b[5;10H");

setTimeout(() => {
  process.exit(0);
}, 10000);

console.log(`
                        ╔══════════════════════════════╗
                        ║   Login:                     ║
                        ╚══════════════════════════════╝
`);

write("\x1b[3A\x1b[35C");
