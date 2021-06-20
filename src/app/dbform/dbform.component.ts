import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { DbtableComponent } from '../dbtable/dbtable.component'

import { DatabaseInfoService } from '../services/database.service';

@Component({
  selector: 'app-dbform',
  templateUrl: './dbform.component.html',
  styleUrls: ['./dbform.component.css']
})
export class DBFormComponent implements OnInit {
  @ViewChild("alertContainer", {static: false, read: ViewContainerRef }) container;

  componentRef;

  checkoutForm = this.formBuilder.group({
    user: '',
    host: '',
    password: '',
    database: '',
    port: ''
  });

  constructor(private formBuilder: FormBuilder, private resolver: ComponentFactoryResolver, private DBServise: DatabaseInfoService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.createComponent(this.checkoutForm.value)
    this.checkoutForm.reset();
  }

  createComponent(data) {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(DbtableComponent);

    this.DBServise.user = data['user'];
    this.DBServise.host = data['host'];
    this.DBServise.password = data['password'];
    this.DBServise.database = data['database'];
    this.DBServise.port = data['port'];

    this.componentRef = this.container.createComponent(factory);
    
  }
  
  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
