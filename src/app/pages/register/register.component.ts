import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegisterPayload } from 'src/app/models/register-payload';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthServiceService,  private router: Router) {}

    

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmedPassword: ['', Validators.required],
  })
  }

  submitForm(): void {

      // Log form values
  
  console.log(this.registerForm.value);

  // Log form errors
  console.log(this.registerForm.errors);
    if(this.registerForm && this.registerForm.invalid){
      console.log('This form is invalid');
      //this.registerForm.reset();
      return;
    }

    const payload: RegisterPayload = {
      username: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      confirmedPassword: this.registerForm.controls['confirmedPassword'].value,
      };
    console.log("Username Entered: ", payload.username);
      console.log("Password Entered: ", payload.password);
      console.log("Confirmed Password Entered: ", payload.confirmedPassword);
    // //service sends payload to backend 

    this.authService.register(payload).subscribe( {
      next: value => {
         this.router.navigate(['/login']);
    },
      error: err => {console.log(err);},
      
    
    }); 


  }

}

