import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {UsersService} from '../Users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder, private messageService: MessageService,
              private UserService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userform = this.fb.group({
      'mobile': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
    });
  }

  onSubmit(value: string) {
    this.UserService.login(this.userform.value).subscribe((response) => {
      if (response['success'] === true) {
        let data = response['data'];
        // this.UserService.token = data['token'];
        localStorage.setItem(this.UserService.token,data['token'])
        this.router.navigate(['/admin/panel']);
      }
    });
  }

}
