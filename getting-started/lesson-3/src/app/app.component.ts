import { Component, OnInit, ViewChild } from "@angular/core";
import { HelloWorld } from "./components/hello-world/hello-world.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild(HelloWorld) child: HelloWorld;

  ngOnInit() {}
  counter = 0;

  private increaseCounter(this) {
    this.counter++;
  }
  private getHelloWorldCounterValue() {
    this.counter = this.child.getCounter();
  }
}
