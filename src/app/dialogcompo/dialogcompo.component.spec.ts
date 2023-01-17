import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcompoComponent } from './dialogcompo.component';

describe('DialogcompoComponent', () => {
  let component: DialogcompoComponent;
  let fixture: ComponentFixture<DialogcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogcompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
