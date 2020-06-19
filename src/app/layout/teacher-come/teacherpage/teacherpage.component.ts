import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {UploadFileService} from '../../../sharedService/uploadFile.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {UsersService} from '../../../auth/Users.service';

@Component({
  selector: 'app-teacherpage',
  templateUrl: './teacherpage.component.html',
  styleUrls: ['./teacherpage.component.scss'],
  providers: [MessageService]
})
export class TeacherpageComponent implements OnInit {
  index: number = 0;
  uploadedFiles: any[] = [];
  userform: FormGroup;
  submitted: boolean;
  pathCV: '';

  constructor(private fb: FormBuilder, private UsersService: UsersService, private messageService: MessageService, private uploadFile: UploadFileService) {
  }

  openNext() {
    this.index = (this.index === 6) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 6 : this.index - 1;
  }

  ngOnInit() {
    this.userform = this.fb.group({
      'type': new FormControl('teacher'),
      'firstname': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'mobile': new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])),
      'password': new FormControl('', [Validators.required]),
      'CVpath': new FormControl(''),

    });
  }

  onSubmit(value: string) {
    console.log(this.userform.controls);
    this.UsersService.registerTeacher(this.userform.value).subscribe((response) => {

      if (response['success'] === true) {
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت', detail: 'مدرس محترم: مشخصات و رزومه با موفقیت ارسال شد'});
      } else {
        this.messageService.add({severity: 'error', summary: 'اخطار', detail: 'مدرس محترم: قبلا با این شماره همراه رزومه ارسال شده است'});
      }
    });

    // this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
  }

  get diagnostic() {
    return JSON.stringify(this.userform.value);
  }

  onUpload(event) {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('image', event.files[i], event.files[i]['name']);
    }

    this.uploadFile.uploadFile(formData).subscribe((response) => {
      if (response['success'] === true) {

        this.pathCV = response['imagePath'];
        this.userform.patchValue({
          CVpath:   this.pathCV
        });

        this.messageService.add({severity: 'success', summary: 'آپلود با موفقیت', detail: 'مدرس محترم: رزمه با موفقیت آپلود شد'});

      } else {
        console.log(response);
      }
    });
  }
}
