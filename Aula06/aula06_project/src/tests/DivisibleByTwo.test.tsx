import DivisibleByTwo from "../components/DivisibleByTwo";

test('2 is divisible by two', () => {
    expect(DivisibleByTwo(2)).toBe(true);
});

test('5 is not divisible by two', () => {
    expect(DivisibleByTwo(5)).toBe(false);
});