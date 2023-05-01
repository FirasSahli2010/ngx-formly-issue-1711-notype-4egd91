import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngx-formly',
  templateUrl: './ngx-formly.component.html',
  styleUrls: ['./ngx-formly.component.css']
})
export class NgxFormlyComponent {

  form = new FormGroup({});

  model = {
    id: 123,
    name: 'Jon gjghj Snow'
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'id',
      templateOptions: {
        label: '',
        required: true,
        addonRight: {text: '' }
      },
      type: '',
      validation: {show: false},
      defaultValue: 123
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Name',
      }
    },
  ];
  
  submitted = null;

  submit() {
    this.submitted = this.model;
  }
}