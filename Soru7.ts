function updateUser(
  id: number,
  updates: Partial<User>
): Readonly<User> | undefined {
  const user = users.find((u) => u.id === id);
  if (!user) return undefined;
  const updated = { ...user, ...updates };
  return updated;
}

console.log("Eski: ", users[0]);
const updatedUser = updateUser(1, { email: "ali.yeni@mail.com" });
console.log("Yeni: ", updatedUser);