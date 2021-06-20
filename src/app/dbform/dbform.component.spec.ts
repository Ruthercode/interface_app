import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBFormComponent } from './dbform.component';

describe('DBFormComponent', () => {
  let component: DBFormComponent;
  let fixture: ComponentFixture<DBFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
