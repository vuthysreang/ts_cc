class Cars {
  private peopleInPolicy: string[] = [];
  private readonly manufactureDate: string = "2021-Feb-12";
  constructor(
    public model: string,
    public color: string,
    public year: number
  ) {}

  describe() {
    console.log(
      `A ${this.year} ${this.model} ${this.color} car that make in ${this.manufactureDate}`
    );
  }

  addPolicy(name: string) {
    this.peopleInPolicy.push(name);
  }

  getPolicy() {
    const peoplePolicy = this.peopleInPolicy;
    console.log(peoplePolicy);
  }
}

const myCar = new Cars("Toyota", "green", 2021);
console.log(myCar);

myCar.addPolicy("vuthy");
myCar.getPolicy();

myCar.describe();

/* Note: we will use (public, private, protected, readonly, ...) to specify the accessable of the (variable, function, interface, parameter, ...) */
