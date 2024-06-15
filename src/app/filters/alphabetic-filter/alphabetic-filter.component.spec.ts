import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticFilterComponent } from './alphabetic-filter.component';

describe('AlphabeticFilterComponent', () => {
  let component: AlphabeticFilterComponent;
  let fixture: ComponentFixture<AlphabeticFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabeticFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphabeticFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
