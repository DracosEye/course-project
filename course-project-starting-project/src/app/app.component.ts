import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  visiblePart = "recipes";

  onViewChange(visiblePart: string) {
    this.visiblePart = visiblePart;
    console.log("Selected " + visiblePart);
    
  }
}
