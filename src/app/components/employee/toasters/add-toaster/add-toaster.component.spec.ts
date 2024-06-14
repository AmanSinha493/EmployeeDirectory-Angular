import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToasterComponent } from './add-toaster.component';

describe('AddToasterComponent', () => {
  let component: AddToasterComponent;
  let fixture: ComponentFixture<AddToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
