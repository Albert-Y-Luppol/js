const dataProcessing = require("./dataPreparation");

const fs = require("fs");

let inputDir;

const inputDirPath = "./inputJSONs",
  outputDirPath = "./outputJSONs";

try {
  inputDir = fs.readdirSync(inputDirPath);
} catch (err) {
  console.log(
    "There was error in testJSONs file reading, check it. Also check 'fs' module or run 'npm i fs' in console."
  );
  console.error(err);
  process.exit("Stopped!");
}

try {
  fs.readdirSync(outputDirPath);
} catch (err) {
  fs.mkdirSync(outputDirPath);
}

inputDir.forEach((file) => {
  console.log(file);
  let [input, rule, local] = JSON.parse(
    fs.readFileSync(`${inputDirPath}/${file}`)
  );
  let outputArr = dataProcessing(input, rule, local);
  console.log(outputArr);
  fs.writeFileSync(`${outputDirPath}/${file}`, JSON.stringify(outputArr));
});
