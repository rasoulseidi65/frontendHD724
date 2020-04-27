import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService, SelectItem, TreeNode} from 'primeng/api';
import {CoursesService} from '../courses.service';
import {TeacherService} from '../../teacher/teacher.service';

@Component({
  selector: 'app-newcourses',
  templateUrl: './newcourses.component.html',
  styleUrls: ['./newcourses.component.scss'], providers: [MessageService]
})
export class NewcoursesComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean;
  categories: SelectItem[];
  teachers: SelectItem[]=[];
  files1: TreeNode[];
  cols: any[];

  constructor(private fb: FormBuilder, private messageService: MessageService, private courseService: CoursesService
    , private TeacherService: TeacherService) {
    this.categories = [
      {label: 'برنامه نویسی', value: 'برنامه نویسی'},
      {label: 'شبکه های کامپیوتری', value: 'شبکه های کامپیوتری'},
      {label: 'گرافیک', value: 'گرافیک'},
      {label: 'ریاضی', value: 'ریاضی'},
    ];
    // this.teachers = [
    //   {label: 'میلا مقدس', value: 'برنامه نویسی'},
    //   {label: 'رسول صیدی', value: 'شبکه های کامپیوتری'},
    //   {label: 'خسرو', value: 'گرافیک'},
    //   {label: 'سمیرا خسروی', value: 'ریاضی'},
    // ];
  }

  ngOnInit() {
    this.TeacherService.index().subscribe((response) => {
      let result = response['data'];
      for (let i = 0; i <result.length; i++) {
        this.teachers.push({
          label: result[i]['firstname'],
          value: result[i]['firstname']
        });
      }
      console.log(this.teachers);
    });
    this.userform = this.fb.group({
      'title': new FormControl('', Validators.required),
      'categories': new FormControl('', Validators.required),
      'detail': new FormControl('', Validators.required),
      'teacherID': new FormControl('', Validators.required),
      'Coursechapter': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'viewCount': new FormControl('', Validators.required),
      'commentCount': new FormControl('', Validators.required),
      'image': new FormControl(''),
      'date': new FormControl('', Validators.required),
      'time': new FormControl('', Validators.required)
    });
    this.cols = [
      {field: 'titlechapter', header: 'نام'},
      {field: 'title', header: 'فامیلی'},
      {field: 'link', header: 'موبایل'},

    ];

  }

  convertPrice(event: any) {
    console.log(event);
  }

  onSubmit(value: string) {
    this.submitted = true;
    console.log(JSON.stringify(this.userform.value));
    this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'مشخصات مقاله با موفقیت ثبت شد'});
  }
}
