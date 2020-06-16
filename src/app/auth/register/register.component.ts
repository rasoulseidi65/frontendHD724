import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {UsersService} from '../Users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;
  selectUser: string;

  constructor(private fb: FormBuilder, private messageService: MessageService, private UsersService: UsersService) {
  }

  ngOnInit(): void {

    this.userform = this.fb.group({

      'type': new FormControl(''),
      'firstname': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'mobile': new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])),
      'password': new FormControl('', [Validators.required]),
    });
  }

  onSubmit(value: string) {
    this.submitted = true;

    if (this.selectUser === 'teacher') {
      this.UsersService.registerTeacher(this.userform.value).subscribe((response) => {

        if (response['success'] === true) {
          this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت', detail: 'مدرس مشخصات با موفقیت ثبت شد'});
        }  else {
        this.messageService.add({severity: 'error', summary: 'اخطار', detail: response['data']});
      }
      });
    } else {
      this.UsersService.register(this.userform.value).subscribe((response) => {
        if (response['success'] === true) {
          this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت', detail: 'کاربر مشخصات با موفقیت ثبت شد'});
        } else {
          this.messageService.add({severity: 'error', summary: 'اخطار', detail: response['data']});

        }

      });

    }
  }
}
