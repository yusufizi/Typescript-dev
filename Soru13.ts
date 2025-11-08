type CreateGetters<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K]
};

type UserProps = { id: number; name: string };
type UserGetters = CreateGetters<UserProps>;

const userGetters: UserGetters = {
  getId: () => 1,
  getName: () => "Ali"
};

console.log("Soru 13 Başarılı!", userGetters.getName());