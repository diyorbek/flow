/* @flow */

interface IFoo { foo: string }

class C1 implements IFoo {} // error: property `foo` not found
class C2 implements IFoo { foo: number } // error: number <~> string
class C3 implements IFoo { foo: string } // ok

(new C1: IFoo); // ok, we already errored at def site

interface IBar { bar: number }

class C4 implements IFoo, IBar {} // error: properties `foo`, `bar` not found
(new C4: IBar); // ok, we already errored at def site

interface IFooBar extends IFoo { bar: number }

class C5 implements IFooBar {} // error: properties `foo`, `bar` not found
(new C5: IFooBar); // ok, already errored at def site
(new C5: IFoo); // ok, already errored at def site
(new C5: IBar); // error: property `bar` not found (despite IBar < IFooBar)

class C6 extends C1 {}
(new C6: IFoo); // ok, C1 implements IFoo

class C7 implements C1 {} // error: C1 is a class, expected an interface

// ensure BoundT substituted appropriately
interface IPoly<T> { x: T }
class C8<T> implements IPoly<T> { x: T }
