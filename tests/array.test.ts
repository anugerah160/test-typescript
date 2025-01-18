describe('Array', function() {
    it('Should be same with javascript', function(){
        const names:string[] = ["anugerah", "putra", "mahanda"];
        const values:number[] = [1, 2, 3, 4, 5];

        console.info(names, values);
    });

    it("should support readonly arrays", () => {
        const hobbies: ReadonlyArray<string> = ["Reading", "Writing"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        // hobbies[0] = "Cant Change";

    });

    it("should support tuples", () => {
        const person: readonly [string, string, number] = ["Anugerah", "Putra", 1];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

    });
});