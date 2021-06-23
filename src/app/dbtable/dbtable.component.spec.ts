import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBTableComponent } from './dbtable.component';

describe('DBTableComponent', () => {
  let component: DBTableComponent;
  let fixture: ComponentFixture<DBTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
