import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  lastLoginSuccessfull: boolean | null=null;

  username: string;
  password: string;

  updateUsernameSet(event): void {
    this.username=event.originalTarget.value;
  }

  updatePasswordSet(event): void {
    this.password=event.originalTarget.value;
  }

  shouldDisableButton(): boolean {
    return !(this.password && this.username);
  }

  handleClick(event): void {
    if (!this.shouldDisableButton()) {
      let request={
        "username": this.username,
        "password": this.password
      };

      this.http.post<boolean>("/loginrequest", request).subscribe(result => {
        this.lastLoginSuccessfull = result;

        if (this.lastLoginSuccessfull) {
          window.location.href="/index";
        }
      }, error => console.error(error));
    }
  }
}
