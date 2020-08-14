console.log(process.argv);

console.dir({
  currentDirectory: process.cwd(),
  processId: process.pid,
  platform: process.platform,
  release: process.release,
  title: process.title,
  nodeVersion: process.version,
  versions: process.versions,
});

console.log(process.env);
