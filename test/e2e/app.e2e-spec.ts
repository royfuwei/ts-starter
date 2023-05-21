describe('app.e2e-spec', () => {
    const sum = (a: number, b: number) => a + b;
    it('adds 1 + 2 to equal 3', async () => {
        expect(sum(1, 2)).toBe(3);
    });
});
