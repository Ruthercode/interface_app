import { Component} from '@angular/core';

import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dbtable',
  templateUrl: './dbtable.component.html',
  styleUrls: ['./dbtable.component.css']
})
export class DbtableComponent{
  tables: string[] = [];

  constructor(private DBService: DatabaseService)
  {
    this.DBService.getTables()
    .subscribe(res => {
      this.tables = res["tables"];
    });
  }

}
