import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeModel } from './Model/Employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
// [x: string]: any;

  title = 'Angular18Learn';

  employeeForm: FormGroup=new FormGroup({});
  employeeList: EmployeeModel[]=[];
  employeeObj: EmployeeModel =new EmployeeModel;

  constructor(){
    this.createForm();
      const oldData = localStorage.getItem("EmpData");
    if(oldData!= null){
      const parseData= JSON.parse(oldData)
      this.employeeList=parseData;
    
    }
   
  }
  createForm() {
  this.employeeForm = new FormGroup({
    empId: new FormControl(this.employeeObj.empId) ,
    name: new FormControl(this.employeeObj.name,[Validators.required]) ,
    city: new FormControl(this.employeeObj.city,[Validators.required]) ,
    address: new FormControl(this.employeeObj.address) ,
    contactNo: new FormControl(this.employeeObj.contactNo,[Validators.required]) ,
    emailId: new FormControl(this.employeeObj.emailId,[Validators.required]) ,
    pinCode: new FormControl(this.employeeObj.pinCode,[Validators.required]) ,
    state: new FormControl(this.employeeObj.state,[Validators.required]) 

  });}

onSave() {
  const oldData = localStorage.getItem("EmpData");
  if (oldData != null) {
    const parseData = JSON.parse(oldData);
    this.employeeForm.controls['empId'].setValue(parseData.length + 1);
  } else {
    this.employeeForm.controls['empId'].setValue(1); // Only if no previous data
  }

  this.employeeList.unshift(this.employeeForm.value);
  localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
  this.employeeObj=new EmployeeModel();
   this.createForm()
}
  
  onEdit(itm :EmployeeModel){
this.employeeObj=itm;
this.createForm();
  }

  onUpdate(){
const record=this.employeeList.find(m=>m.empId==this.employeeForm.controls['empId'].value);
if(record!= null){
  record.address=this.employeeForm.controls['address'].value;
  record.name=this.employeeForm.controls['name'].value;
  record.contactNo=this.employeeForm.controls['contactNo'].value;
}
localStorage.setItem("empData", JSON.stringify(this.employeeList));
this.employeeObj=new EmployeeModel();
this.createForm();
  }

  onDelete(id:number){
    const isDelete=confirm("Are you sure you want to delete.");
    if(isDelete){
      const index=this.employeeList.findIndex(m=>m.empId=id);
      this.employeeList.splice(index,1);
      localStorage.setItem("empData", JSON.stringify(this.employeeList));
    }
  }
}

