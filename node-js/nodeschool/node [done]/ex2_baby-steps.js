console.log(process.argv.splice(2).reduce((sum, cur) => sum + Number(cur), 0));
