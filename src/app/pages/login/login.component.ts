import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { LoginPayload } from 'src/app/models/login-payload';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  validUsername: boolean = true;
  
  constructor(private fb: FormBuilder, 
    private authService: AuthServiceService,  
    private router: Router, 
    private toastr:ToastrService ) {}

    

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
  });
  }

  submitForm(): void {

    if(this.loginForm && this.loginForm.invalid){
      
      if(!this.loginForm.controls['username'].value.test("^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")){
        this.validUsername = false;
      }
      


      this.loginForm.controls['username'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();
      this.loginForm.reset();
      return;
    }

    //this.loginForm.reset();

    const payload: LoginPayload = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
      };
    console.log("Username Entered: ", payload.username);
      console.log("Password Entered: ", payload.password);
    // //service sends payload to backend 

    this.authService.login(payload).subscribe( {
      next: value => {
         this.toastr.success('Login Successful');
         localStorage.setItem('token', value.token);  // store token in local storage
         this.router.navigate([`/profile/${value.username}`]);
         
    },
      
      error: error => {console.log(error.error.message);
        
        this.toastr.error('Error');
        

  } 
    
    }); 
  }

}