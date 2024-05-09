import { Component } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  firstName="John";
  lastName="Hair";
  age=3;
  gender="lgbtq";
  email="ohya3243@fgmail.com";
  phone= "0875469120";
  password ="De";
  confirmPassword="De";
 
  validateInput(event: any): void {
    const inputValue: string = event.target.value;
    event.target.value = inputValue.replace(/[^\d]/g, ''); // เอาอักขระที่ไม่ใช่ตัวเลขออก
  }

  Verify() { 
    if (typeof this.age !== 'number' || isNaN(this.age)) {
      alert('กรุณากรอกอายุให้ถูกต้อง');
      return; 
    }
    const pattern: RegExp = /^[0-9]*$/; 
    //^: เริ่มต้นของข้อความ
    //[0-9]*: รับอนุญาตให้มีตัวเลขอยู่ 0 หรือมากกว่าตัว (0-9) และสามารถปรากฏหรือไม่ปรากฏก็ได้ (มีหรือไม่มี)
    //$: สิ้นสุดของข้อความ
    if (!pattern.test(this.phone)) {
      alert('กรุณากรอกเบอร์โทรศัพท์เฉพาะตัวเลขเท่านั้น');
      return;
    }

    if (this.password === this.confirmPassword) {
      console.log('Pass');
      console.log("FirstName : "+this.firstName);
      console.log("LastName : "+this.lastName);
      console.log("Age :"+this.age);
      console.log("Gender : "+this.gender);
      console.log("Email : "+this.email);
      console.log("Phone : "+this.phone);
      console.log("Password : "+this.password);
      console.log("Confirm Password : "+this.confirmPassword);
    } else {
      console.log('Fail');
    }
  }
  Cancle(){}
}
