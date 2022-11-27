import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupData } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup ;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.builder();
    this.submit()
  }

  //create login form with form builder
  builder(){
    this.loginForm =this.fb.group({
      email:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submit(){
    this.auth.login(this.loginForm.value)
      .then((response) => {
        this.auth.isLogin.next(true);
        console.log(response)
        this.router.navigate(['/products'])
      })
      .catch((e) => console.log(e.message));
  }


}
