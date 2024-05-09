import { Component } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  firstName ='';
  lastName ='';
  age ='';
  gender ='';
  email ='';
  phone = '';
  password ='';
  confirmPassword ='';
  isFormSubmitted =false;
  isSuccess=false;
  isPassmatch =false;

validateInput(event: any) {
  const allowedChars = /[0-9]/;
  const inputChar = String.fromCharCode(event.charCode);
  if (!allowedChars.test(inputChar)) {
    event.preventDefault();
  }
}

  Verify() { 
    this.isFormSubmitted=true;
    
    if(!this.firstName || !this.lastName || !this.age || !this.gender || !this.email || !this.phone || !this.password || !this.confirmPassword){
      console.log("N");
      
    }else{
      if (this.password === this.confirmPassword) {
        this.isSuccess=true;
        console.log('Pass');
        console.log("FirstName : "+this.firstName);
        console.log("LastName : "+this.lastName);
        console.log("Age :"+this.age);
        console.log("Gender : "+this.gender);
        console.log("Email : "+this.email);
        console.log("Phone : "+this.phone);
        console.log("Password : "+this.password);
        console.log("Confirm Password : "+this.confirmPassword);
        
        this.isFormSubmitted=false;
        this.firstName='';
        this.lastName='';
        this.age='';
        this.gender='';
        this.email='';
        this.phone='';
        this.password='';
        this.confirmPassword='';

      } else {
        this.isPassmatch =true;
        console.log('Fail');
      }
    }

    
  }
  Cancle(){
    this.isFormSubmitted=false;
    this.firstName='';
    this.lastName='';
    this.age='';
    this.gender='';
    this.email='';
    this.phone='';
    this.password='';
    this.confirmPassword='';
  }
}
