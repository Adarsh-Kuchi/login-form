import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registrationForm !: FormGroup;



  constructor( private fb:FormBuilder , private api:ApiService , private route:Router) {

   }

  ngOnInit(): void {
    this.createForm();
    // this.registrationForm.valueChanges.subscribe(newValues => {
    //   console.log('New values:', newValues);
    // });

  }

  createForm(): void {
    this.registrationForm = this.fb.group({
      firstName: ['' , Validators.required],
      lastName: ['' , Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      cityName: ['', Validators.required],
      zipCode: ['' , Validators.required],
      checkbox : [false , Validators.requiredTrue]

    })

  }


  onSubmit(){
    console.log(this.registrationForm);
    const payload = {
      user_firstname:this.registrationForm.get('firstName')?.value,
      user_email:this.registrationForm.get('email')?.value,
      user_phone:this.registrationForm.get('phoneNumber')?.value,
      user_password:this.registrationForm.get('password')?.value,
      user_lastname:this.registrationForm.get('lastName')?.value,
      user_city:this.registrationForm.get('cityName')?.value,
      user_zipcode: this.registrationForm.get('zipCode')?.value
    }

    this.api.registerUser(payload).subscribe(response => {
      console.log('Registration successful:', response);
      this.route.navigate(['/login'])
      // Add any additional code you want to run after the registration is complete
    }, error => {
      console.log('Registration failed:', error);
      // Add any error handling code here
    });

  }




}
