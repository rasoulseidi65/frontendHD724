import {Component, Injectable, OnInit} from '@angular/core';

import {PhotoService} from "./photo.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

    this.photoService.getImages().then(images =>{ this.images = images;  console.log(this.images)});
  }
}


