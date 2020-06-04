module.exports = function dataProcessing(
  inputArr = [],
  processingRule = {},
  localization = {}
) {
  localization = localization ? localization : {};

  let outputArr = [];

  let outputPathsArr = getAllPaths(processingRule);

  outputPathsArr.forEach((path) => {
    outputArr.push(formOutputObject(path, inputArr, localization));
  });

  return outputArr;
};

function getValueByPath(currentObj, path) {
  let result = currentObj[path[0]];
  for (let i = 1; i < path.length; i++) {
    result = result[path[i]];
  }
  return result;
}

function formOutputObject(path, inputArr, localization) {
  let ouputObject = {};

  insertName(ouputObject, path, localization);

  path = path.split(".");

  for (let i = 0; i < inputArr.length; i++) {
    let outputValue = getValueByPath(inputArr[i], path);
    if (typeof outputValue === "boolean") {
      outputValue = outputValue ? "Yes" : "No";
    }

    if (Date.parse(outputValue)) {
      outputValue = normalizeDate(new Date(outputValue));
    }
    ouputObject[`value${i + 1}`] = outputValue;
  }

  return ouputObject;
}

function normalizeDate(dateObj) {
  let date = ("0" + dateObj.getDate()).slice(-2);
  let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  let year = dateObj.getFullYear();

  return `${date}.${month}.${year}`;
}

function insertName(obj, path, localization) {
  if (localization[path]) {
    obj.name = localization[path];
  } else {
    let fieldPath = path.split(".");
    obj.name = fieldPath[fieldPath.length - 1];
  }
}

function getAllPaths(object = {}, path = "", pathsArr = []) {
  for (let field in object) {
    if (typeof object[field] === "object") {
      getAllPaths(object[field], path.concat(field, "."), pathsArr);
    } else if (typeof object[field] === "boolean") {
      if (object[field]) {
        pathsArr.push(path.concat(field));
      }
    } else {
      console.log(
        `There are type problems in 'Rule Object'. Field '${path.concat(
          field
        )}' has wrong type. \n Must be eather 'object' or 'boolean' but you have '${typeof object[
          field
        ]}' here.`
      );
    }
  }
  return pathsArr;
}
