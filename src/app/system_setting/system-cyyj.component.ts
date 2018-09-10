import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {systemConfig} from '../util'
@Component({
  selector: 'system-cyyj',
  templateUrl: './system-cyyj.component.html',
})
export class SystemcyyjComponent implements OnInit {
  pageType='';
  config = systemConfig;
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  ngOnChanges(): void {

  };
  ngOnInit(): void {
    setTimeout(()=>{
      this.pageType=this.router.url;
    })
  }
}