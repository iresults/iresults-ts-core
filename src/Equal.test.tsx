import {Equal} from './Equal';

class A implements Equal {
    public value: number;

    constructor(value: number) {
        this.value = value;
    }

    equals<T>(other: T): boolean {
        if (!(other instanceof A)) {
            return false;
        }

        return this.value === other.value;
    }
}

class B implements Equal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    equals<T>(other: T): boolean {
        if (other instanceof A) {
            return this.name === '' + other.value;
        } else if (other instanceof B) {
            return this.name === other.name;
        }
        return false;
    }
}

it('Class A should compare the types', () => {
    const a1 = new A(100);
    const a2 = new A(100);
    const a3 = new A(300);
    const b1 = new B('100');

    expect(a1.equals(a2)).toBeTruthy();
    expect(a1.equals(a3)).toBeFalsy();
    expect(a1.equals(b1)).toBeFalsy();
});

it('Class B should except different types', () => {
    const a1 = new A(100);
    const b1 = new B('100');
    const b2 = new B('100');
    const b3 = new B('300');

    expect(b1.equals(b2)).toBeTruthy();

    expect(b1.equals(a1)).toBeTruthy();

    expect(b1.equals(b3)).toBeFalsy();
    expect(b2.equals(b3)).toBeFalsy();
    expect(b3.equals(b1)).toBeFalsy();
    expect(b3.equals(b2)).toBeFalsy();
});
