const anchor = document.querySelector("a");

// console.log(anchor.href);

if (anchor) {
  console.log(anchor.href);
}

const link = document.querySelector("a")!; //mean not null
console.log(link.href);

// const form = document.querySelector("form")!;
const form = document.querySelector("form.new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
