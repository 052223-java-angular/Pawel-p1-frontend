import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegisterPayload } from 'src/app/models/register-payload';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthServiceService) {}

    

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
  })
  }

  submitForm(): void {
    if(this.registerForm && this.registerForm.invalid){
      console.log('This form is invalid');
      return;
    }

    const payload: RegisterPayload = {
      username: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      confirmPassword: this.registerForm.controls['confirmPassword'].value,
    };


    //service sends payload to backend 

    this.authService.register(payload).subscribe( {
      next: value => {},

      error: err => {},

    
    }); 

  }

}

