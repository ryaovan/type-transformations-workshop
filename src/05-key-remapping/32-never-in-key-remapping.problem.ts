import { Filter } from "ts-toolbelt/out/Object/Filter";
import { Equal, Expect } from "../helpers/type-utils";
import { Contains } from "ts-toolbelt/out/Any/Contains";
import { Includes } from "ts-toolbelt/out/Object/Includes";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: T[K];
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
