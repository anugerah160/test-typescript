describe("Any", ()=>{
    it("should be support in typescript", ()=>{
        const person:any = {
            id:1,
            name: "Anugerah Putra Mahanda",
            age: 19
        };

        person.age = 17;
        person.address = "Darjo";

        console.info(person);
        console.info(person.age);
        console.info(person.address);
        console.info(person.id);
        console.info(person.name);
    });
});