import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isPasswordSet=false;
  isUsernameSet=false;

  updateUsernameSet(event): void {
    this.isUsernameSet=event.originalTarget.value!=""
  }

  updatePasswordSet(event): void {
    this.isPasswordSet=event.originalTarget.value!=""
  }

  shouldDisableButton(): boolean {
    return !(this.isPasswordSet && this.isUsernameSet);
  }

  handleClick(event): void {
    if (!this.shouldDisableButton()) {
      window.location.href="/index";
    }
  }
}
