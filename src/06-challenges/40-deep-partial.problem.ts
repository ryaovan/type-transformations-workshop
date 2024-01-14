import { Equal, Expect } from "../helpers/type-utils";

type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : {
      [K in keyof T]?: DeepPartial<T[K]>;
    };

// when a type function gets to a function that it cant resolve, it acts as a noop.
// This is likely a source of confusion when seeing this, would not actually recommend
// doing something like this in an actual codebase.
type thing = DeepPartial<string>;

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

type Result = DeepPartial<MyType>;

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string;
        b?: number;
        c?: {
          d?: string;
          e?: {
            f?: string;
            g?: {
              h?: string;
              i?: string;
            }[];
          };
        };
      }
    >
  >
];
