import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  loginError!: string;
  apiService: any;

  constructor( private fb:FormBuilder ,
                private api:ApiService , private auth:AuthServiceService , private router:Router) {

  }

  ngOnInit(): void {
    this.createForm()
  }
  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      checkbox : [false , Validators.requiredTrue]

    })
  }

  onSubmit(){
    console.log(this.loginForm)
    if (this.loginForm.valid) {
      const payload = {
        user_email: this.loginForm.get('email')?.value,
        user_password:this.loginForm.get('password')?.value
      }
      this.api.loginUser(payload).subscribe(
        (response: any) => {
          console.log('Login successful:', response);

          if(response.status){
            const userArray = response.user_data;
            if(userArray.length === 1){
              const user = userArray[0];
              const firstName = user.user_firstname;
              const lastName = user.user_lastname;
              this.auth.onSignIn(firstName,lastName);
              this.router.navigate(['/dashboard']);
            }
          }
        },
        (error: any) => {
          console.log('Login failed:', error);
          this.loginError = 'Invalid email or password.';
        }
      );
    }

  }
}
