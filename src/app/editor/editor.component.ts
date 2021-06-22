import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  table : string = "";
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) { //TODO: Complete editor
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          this.table = queryParam['table'];
      }
  );
  }

  ngOnInit(): void {
  }

}
