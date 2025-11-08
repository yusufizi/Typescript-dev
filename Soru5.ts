type User = { id: number; name: string; email: string };
const users: User[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];

function search(id: number): User | undefined;
function search(name: string): User[];

function search(param: number | string): User | User[] | undefined {
  if (typeof param === "number") {
    return users.find(u => u.id === param);
  }
  return users.filter(u => u.name === param);
}

console.log(search(1));
console.log(search("Ayşe"));