import React from "react";
// Types - primitive
let nameGlobe: string;
let age: number | string; //union make it possible to have multiple types
let isStudent: boolean;

// Type - Array
let hobbies: string[];

// Type - Tuple
let role: [number, string];

// Type - Object
// Method 1 - type (alias)
type Person = {
  name: string;
  age?: number; // "?" makes the variable optional
};

// Method 2 - interface (alias)
interface NewPerson {
  name: string;
  age?: number;
}

let person: Person = {
  name: "Snoopy",
};

let lotsOfPeople: Person[];

// Differences between type and interface
// example of type
type X = {
  a: string;
  b: number;
};

type Y = X & {
  c: string;
  d: number;
};
// Y will contain all X properties

let y: Y = {
  c: "dodo",
  d: 42,
  a: "meme",
  b: 73,
};

// example interface

interface AnotherPerson {
  name: string;
  age: number;
}

interface Guy extends AnotherPerson {
  profession: string;
}

// can mix and match interface and type
// example properties of AnotherPerson inside of type K
type K = AnotherPerson & {};

// example properties of X inside of AnotherPerson

interface SomePerson extends K {}

// Type - function

let printName: (name: string) => void;
// void returns undefined, never returns nothing
// function printName(name: string):void/number/string/boolean/never/or any custom types{
//   console.log(name);
// }

// Type - unknown better than any
let personName: unknown;
