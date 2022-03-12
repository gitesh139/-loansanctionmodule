import { CityServiceService } from './../../shared/city-service.service';
import { Router } from '@angular/router';
import { Customer } from './../../../model/Customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Customer = new Customer();
  submitted = false;

  constructor(private studentService: CityServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.student = new Customer();
  }

  save() {
    this.studentService
    .createStudent(this.student).subscribe(data => {
      console.log(data)
      this.student = new Customer();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/role/admin/book-list']);
  }

}
