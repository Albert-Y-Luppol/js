const dataProcessing = require("./dataPreparation");

let input = [
    { fullName: { surname: "xxx", firstName: "yyy", middleName: "zzz" } },
    { fullName: { surname: "XXX", firstName: "YYY", middleName: "ZZZ" } },
    {
      fullName: { surname: "07.21.2009", firstName: "YYY", middleName: "ZZZ" },
    },
    {
      fullName: { surname: false, firstName: "YYY", middleName: "ZZZ" },
    },
    {
      fullName: {
        surname: true,
        firstName: new Date(),
        middleName: "ZZZ",
      },
    },
  ],
  rule = {
    fullName: { surname: true, firstName: true, middleName: false },
  },
  local = {
    "fullName.surname": "Прізвище",
    "fullName.middleName": "По-батькові",
  };

console.log(dataProcessing(input, rule, local));
