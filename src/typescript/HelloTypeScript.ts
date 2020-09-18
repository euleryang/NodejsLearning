class HelloTypeScript {
    helloString: string;
    constructor(message: string) {
        this.helloString = message;
    }
    hello() {
        return this.helloString;
    }
  }

  let myName: string = 'SanShui'
  let myAge: number = 23
  let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month`
  let helloTypeScript = new HelloTypeScript(sentence);
  document.body.innerHTML = helloTypeScript.hello();