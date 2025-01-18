describe("Union", () => {
    it("should return a number or string", () => {
        let sample: number | string | boolean = "Anu";
        console.info(sample);

        sample = 20;
        console.info(sample);

        sample = true;
        console.info(sample);

        // sample = ["Cant use", 1];
        // console.info(sample);
    });
});