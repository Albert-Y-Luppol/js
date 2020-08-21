import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test-autostringify",
  templateUrl: "./test-autostringify.component.html",
  styleUrls: ["./test-autostringify.component.scss"],
})
export class TestAutostringifyComponent implements OnInit {
  initStr = `{
    "name": "Text"
  }`;

  constructor() {}

  ngOnInit(): void {}

  convert(str: string) {
    const obj = JSON.parse(str);
    obj["arr"] = [1, 2, 3];
    this.log(obj);
  }

  log(str: string) {
    console.log(str);
  }
}
