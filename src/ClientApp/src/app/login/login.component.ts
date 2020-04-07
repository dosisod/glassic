import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  lastLoginSuccessfull: boolean | null=null;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.form=this.fb.group({
      username: '',
      password: ''
    })
  }

  shouldDisableButton(): boolean {
    return !(
      this.form.value.password &&
      this.form.value.username
    );
  }

  handleClick(): void {
    if (!this.shouldDisableButton()) {
      this.http.post<boolean>('/loginrequest', this.form.value)
        .subscribe(result => {
          this.lastLoginSuccessfull = result;

          if (this.lastLoginSuccessfull) {
            window.location.href = '/index';
          }
        }, error => console.error(error));
    }
  }
}