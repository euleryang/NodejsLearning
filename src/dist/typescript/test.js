"use strict";
class Person {
    constructor(hobby) {
        this.hobby = hobby;
    }
    echo() {
        return '我就喜欢：' + this.hobby;
    }
}
let person = new Person('看书，习武，书法，旅游');
let hobby = person.echo();
console.log(hobby);
//# sourceMappingURL=test.js.map