import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
      service:['advance']
    }); 
  }

  onSubmit(){
    this.submitted=true;
    console.log("inputs", this.registerForm.value);
    if(this.registerForm.valid){
      console.log("valid",this.registerForm.value);
      let data= {
          fullName:this.registerForm.value.fullName,
          email:this.registerForm.value.email,
          password:this.registerForm.value.password,
          phone:this.registerForm.value.phone,
      }
      this.user.register(data).subscribe((response:any)=>{
        console.log("done",response);
      })
    }
    else{
      console.log("Enter valid data");
    }

  }
}
