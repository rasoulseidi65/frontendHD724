import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-newpaper',
  templateUrl: './newpaper.component.html',
  styleUrls: ['./newpaper.component.scss'],
  providers: [MessageService]
})
export class NewpaperComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean;
  description: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'title': new FormControl('', Validators.required),
      'abstract': new FormControl('', Validators.required),
      'detail': new FormControl('', Validators.required),
      'key_title': new FormControl(''),
      'author': new FormControl('', Validators.required),
      'image': new FormControl(''),
      'date': new FormControl('', Validators.required),
      'time': new FormControl('', Validators.required)
    });
  }
  onSubmit(value: string) {
    this.submitted = true;
    console.log(JSON.stringify(this.userform.value));
    this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'مشخصات مقاله با موفقیت ثبت شد'});
  }
}
