// Imports belong up top
import { Component } from '@angular/core';

// Component Decorator, an object that has configuration settings for a component
@Component({
  selector: 'app-root', // Unique name for referencing in other components
  templateUrl: './app.component.html',  // HTML for the component, supports inline HTML
  styleUrls: ['./app.component.scss']   // Styling file, CSS, etc.
})

// Logic for component
export class AppComponent {
  title = 'ng7';
}
