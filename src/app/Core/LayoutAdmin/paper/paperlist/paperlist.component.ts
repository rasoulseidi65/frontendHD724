import {Component, OnInit} from '@angular/core';
import {paper} from '../paper.model';
import {PaperService} from '../paper.service';
import {MessageService, SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-paperlist',
  templateUrl: './paperlist.component.html',
  styleUrls: ['./paperlist.component.scss'],
  providers:[MessageService]
})
export class PaperlistComponent implements OnInit {
  display: boolean = false;
  displayEdit :boolean =false;
  public paperModels: paper[] = [];
  cols: any[];
  title: SelectItem[];
  abstract: SelectItem[];
  date: number;
  userform: FormGroup;
  submitted: boolean;
  description: string;
  constructor(private paperService: PaperService,private messageService: MessageService,private fb: FormBuilder) {
  }

  ngOnInit() {
    this.paperService.getAll().subscribe(res => {
      this.paperModels = res;
      console.log(res);
    });

    this.cols = [
      { field: 'title', header: 'عنوان' },
      { field: 'abstract', header: 'خلاصه' },
      { field: 'author', header: 'نویسنده' },
      { field: 'date', header: 'تاریخ' }
    ];

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
  showDialog() {
    this.display = true;
  }
  showDialogEdit() {
    this.displayEdit = true;
  }
}
