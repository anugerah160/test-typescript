import { sayHello } from "../src/say-hello";

describe('sayHello', function(): void{
    it('Should return hello anuuu', function(): void{
        expect(sayHello('anuuu')).toBe('Hello anuuu');
    })
})