import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupData } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm !: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    //create sigup form with form builder
this.registerForm = this.fb.group({
  name:['',Validators.required],
  email:['',Validators.required],
  password:['',[Validators.required, Validators.minLength(6)]],
})
  }

  //signup method(name, email, password)
  register(): void{

    const newUser : SignupData = {
      name:this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
    };
     let userObs = this.auth.createUserWithEmail(newUser)
     userObs.subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
    this.router.navigate(['/login']);
      // alert('successfully')
    //console.log(this.registerForm.value)
    //console.log(newUser)
    this.registerForm.reset()
 }

}
