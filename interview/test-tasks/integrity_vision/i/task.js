var name = "albert";

const user = {
  name: "artem",
  f: () => console.log(this.name),
};

user.f();
