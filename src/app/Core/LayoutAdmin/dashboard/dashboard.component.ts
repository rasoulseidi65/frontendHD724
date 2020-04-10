import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'رسول صیدی',

        items: [{
          label: 'پروفایل',
          icon: 'pi pi-fw pi-user',
        },
          {separator: true},
          {
            label: 'خروج',
            icon: 'pi pi-power-off'
          }
        ]
      }
    ];
  }
}
