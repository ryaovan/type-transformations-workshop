import { Equal, Expect } from "../helpers/type-utils";

type YouSayGoodbyeAndISayHello<T = "hello" | "goodbye"> = T extends "hello"
  ? "goodbye"
  : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>
];
