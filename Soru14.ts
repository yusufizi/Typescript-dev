type DeepReadonly<T> =
  T extends (...args: any[]) => any ? T :
  T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } :
  T;

type Config = { api: { url: string }, features: string[] };
const config: DeepReadonly<Config> = {
  api: { url: "http://..." },
  features: ["A", "B"]
};

// @ts-expect-error
config.api.url = "yeni-url";

// @ts-expect-error
config.features.push("C");

console.log("Soru 14 Başarılı!", config.api.url);