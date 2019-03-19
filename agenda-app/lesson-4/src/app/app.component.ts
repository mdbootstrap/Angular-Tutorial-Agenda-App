import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  event: any =
    {
      time: "08:00",
      subject: "Breakfast with Simon",
      location: "Lounge Caffe",
      description: "Discuss Q3 targets"
    };
}
