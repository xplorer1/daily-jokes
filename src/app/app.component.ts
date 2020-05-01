import { Component } from '@angular/core';
import { AuthService} from "./services/auth.service";

@Component({
    selector: 'bu-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'bike-ui';

  constructor(private authService: AuthService) {
      this.authService.handleAuthentication();
  }
}
