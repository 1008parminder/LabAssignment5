import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  students: Array<IStudent> = [];
  private scold: string;

  editMode: boolean = false;
  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Parminder',
      lastName: 'Singh',
      course: 'Programming'
    }
    this.students[1] = {
      id: 2,
      firstName: 'Dj',
      lastName: 'Khaled',
      course: 'Music'
    }
    this.students[2] = {
      id: 2,
      firstName: 'Mark',
      lastName: 'Wahlberg',
      course: 'Film Study'
    }
    this.students[3] = {
      id: 4,
      firstName: 'Bill',
      lastName: 'Gates',
      course: 'Business'
    }
  }

  ngOnInit() {
  }

  addStudent() {
    this.editMode = true;
    const student: IStudent = {
      id: null,
      firstName: null,
      lastName: null,
      course: null
    };

    // this.students.push(student);
    this.students.unshift(student);
  }
  removeStudent(index: number) {
    this.students.splice(index, 1);
  }

  saveStudent() {
    this.editMode = false;
  }

}