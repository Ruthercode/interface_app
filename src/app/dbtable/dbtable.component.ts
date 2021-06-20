import { Component, Input, OnInit } from '@angular/core';

import { DatabaseInfoService } from '../services/database.service';

@Component({
  selector: 'app-dbtable',
  templateUrl: './dbtable.component.html',
  styleUrls: ['./dbtable.component.css']
})
export class DbtableComponent implements OnInit {
  tables: string[] = [];
  constructor(private DBService: DatabaseInfoService)
  {
    this.DBService.authorize()
    .subscribe(res => {
      console.log(res);
    });
    this.DBService.getTables()
    .subscribe(res => {
      this.tables = res["tables"];
    });;

    
  }

  
  ngOnInit()
  {
    
  }
}
