export class EmployeeModel{
    empId: number;
    name:string;
    city:string;
    state:string;
    emailId:string;
    contactNo:string;
    address:string;
    pinCode:string;

    constructor(){
        this.empId=1;
        this.name='';
        this.city='';
        this.emailId='';
        this.contactNo='';
        this.address='';
        this.state='';
        this.pinCode='';
    }
}