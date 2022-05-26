//@flow

declare var key : string;

let x = []; // should annot
x[0] = 3;

let y = []; // should annot
y.push(4);

let z = []; // should annot
z = [4, 5];

declare var arr : Array<string>;

let first = []; // annot
let second = first;
let third = true ? first : [];
let fourth = third;
fourth[0] = 3;

let already_annotated : number[] = []; // should not change this

let written_twice = []; // should be Array<number | string>
written_twice[0] = 3;
written_twice.push("foo");

let written_thrice = []; // should be Array<number | string>
written_thrice[0] = 3;
written_thrice[1] = "foo";
written_thrice.push("bar", 4);

let z2 = []; // should not annotate

let arr2 = ["A", "B", "C"];
let x2 = []; // should annot

for (let k of arr2) {
  x2[0] = k
}