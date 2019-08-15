import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"]
})
export class ProgressBarComponent {
  @Input() percentCompleted: Number;

  constructor(private router: Router) {}

  navigateToResults() {
    this.router.navigateByUrl("/results");
  }
}
