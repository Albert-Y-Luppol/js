const http = require("http");
const bl = require("bl");

let urls = process.argv.splice(2);

getAllDataFromUrlsArr(null, urls, (err, dataArr) => {
  if (err) return console.error(err);
  dataArr.forEach((data) => console.log(data));
});

function getAllDataFromUrlsArr(err, urls, next) {
  if (err) next(err);
  let datas = [];

  urls.forEach((url, i) => {
    http.get(url, (res) => {
      res.pipe(
        bl((err, data) => {
          if (err) return next(err);

          datas[i] = data.toString();

          if (checkForAllDataReceived(datas, urls)) next(null, datas);
        })
      );
    });
  });
}

function checkForAllDataReceived(dataArr, urlsArr) {
  if (dataArr.length != urlsArr.length) return false;

  return !dataArr.includes(undefined);
}
