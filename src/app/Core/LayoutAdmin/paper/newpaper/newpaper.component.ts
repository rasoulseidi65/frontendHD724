import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';
import {PaperService} from '../paper.service';

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

  constructor(private fb: FormBuilder, private messageService: MessageService, private paperService: PaperService) {
  }

  ngOnInit() {
    this.userform = this.fb.group({
      'title': new FormControl('', Validators.required),
      'abstract': new FormControl('', Validators.required),
      'detail': new FormControl('', Validators.required),
      'author': new FormControl('', Validators.required),
      'image': new FormControl(''),
      'date': new FormControl('', Validators.required),
      'time': new FormControl('', Validators.required)
    });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.paperService.register(this.userform.value).subscribe((response) => {
      console.log(response);
      if (response['success'] === true) {
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'مشخصات مقاله با موفقیت ثبت شد'});

      }
    });
  }
}
