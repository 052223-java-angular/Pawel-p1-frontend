import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegisterPayload } from 'src/app/models/register-payload';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  validUsername: boolean = true;
  constructor(private fb: FormBuilder, private authService: AuthServiceService,  private router: Router,private toastr:ToastrService ) {}

    

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required, Validators.pattern("^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")],
      password: ['', Validators.required],
      confirmedPassword: ['', Validators.required],
  });
  }

  submitForm(): void {

    if(this.registerForm && this.registerForm.invalid){
      

      this.registerForm.controls['username'].markAsTouched();
      this.registerForm.controls['password'].markAsTouched();
      this.registerForm.controls['confirmedPassword'].markAsTouched();
      this.registerForm.reset();
      return;
    }

    //this.registerForm.reset();

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
         this.toastr.success('Reigstration Successful');
         this.router.navigate(['/login']);
         
    },
      
      error: error => {console.log(error.error.message);
        
        this.toastr.error('Error');
        

  } 
    
    }); 
  }

}

