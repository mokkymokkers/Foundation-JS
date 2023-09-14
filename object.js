//const person = {
//name: "John",
//age: 20,
//pet: {
//kind: "Rabbit",
//age: 2,
//},
//};

//console.log("Name:", person.name);
//console.log("Name:", person["name"]);

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

data.forEach((item, indx) => {
  console.log("person", indx + 1);
  console.log("name", item.name);
  console.log("age", item.age);
  console.log("job", item.job);
  console.log("-----------------");
});
