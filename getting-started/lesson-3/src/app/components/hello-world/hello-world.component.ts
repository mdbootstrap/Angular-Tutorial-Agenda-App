import { Component } from "@angular/core";

@Component({
  selector: "hello-world",
  templateUrl: "./hello-world.component.html"
})
export class HelloWorld {
  counter = 0;

  private increaseCounter(this) {
    this.counter++;
  }

  public getCounter() {
    return this.counter;
  }
}
