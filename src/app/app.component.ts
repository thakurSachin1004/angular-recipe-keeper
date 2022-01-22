import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-keeper';
  @Input() pageName = 'recipes';

  onNavigate(pageName) {
    this.pageName = pageName;
  }
}
