import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  category: any;
  
  constructor(private formBuilder: FormBuilder, private user:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }); 
  }

  admin(){
    this.category = true;
  }

  userReg(){
    this.category = false;
  }

  onSubmitloginForm(){
    this.submitted=true;
    console.log("inputs", this.loginForm.value);
    if(this.loginForm.valid){
      console.log("valid",this.loginForm.value);
      let data= {
          email:this.loginForm.value.email,
          password:this.loginForm.value.password,
      }
    if(this.category == true){
      this.user.adminLogin(data).subscribe((response:any)=>{
        console.log(response); 
        localStorage.setItem('token',response.result.accessToken)
        this.router.navigateByUrl("/dashboard/adminbook")
      },(error:any)=>{
        console.log(error);    
      })
    }
    else if(this.category == false){
      this.user.login(data).subscribe((response:any)=>{
        console.log("done",response);
        localStorage.setItem('token',response.result.accessToken)
        this.router.navigateByUrl("/dashboard/allbooks")
      }, (error:any)=>{
        console.log(error);    
      })
     }
    }
    else{
      console.log("Enter valid data");
    }
  }


}
