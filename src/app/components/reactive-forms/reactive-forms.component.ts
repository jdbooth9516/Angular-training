import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  regForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.regForm = new FormGroup({
      firstName: new FormControl('Diana'),
      lastName: new FormControl('Prince'),
      subscribe: new FormControl(true),
      //now this is going to be an example of the nested form groups.
      //here we create another form group inside of the original form group
      // then we are going look at hiding the address based off of the subscribe
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        zipCode: new FormControl(),
      }),
    });
  }

  submitForm() {
    console.log(this.regForm);
  }
}
