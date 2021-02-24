import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  template: `
    <button (click)="showMessage()">{{ text }}</button>
  `
})
export class ButtonComponent {
  @Input() text: string;

  showMessage() {
    alert("meh!");
  }
}
