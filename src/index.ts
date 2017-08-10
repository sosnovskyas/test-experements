export class First {
    pow(a: number, b: number): number {
        return a * b;
    }
}

const first = new First();

console.log(first.pow(2, 3));