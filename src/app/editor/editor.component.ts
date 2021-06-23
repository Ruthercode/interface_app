import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { DatabaseService } from '../services/database.service';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  table : string = "";
  private querySubscription: Subscription;
  
  displayedColumns: string[] = [];
  dataSource = [];
  savedDataSource = [];
  dataSchema = {};

  constructor(private route: ActivatedRoute, private DBService: DatabaseService) { 
    
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          this.table = queryParam['table'];
      }
   );
    
    this.DBService.getTable(this.table)
    .subscribe(res => {
      this.displayedColumns = res["columns"];
      this.dataSource = res["data"];
      this.savedDataSource = cloneDeep(res["data"]);
      this.dataSchema = res["type"];

    });

  }

  onSave() : void
  {
    
  }
}
