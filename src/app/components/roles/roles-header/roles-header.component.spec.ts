import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesHeaderComponent } from './roles-header.component';

describe('RolesHeaderComponent', () => {
  let component: RolesHeaderComponent;
  let fixture: ComponentFixture<RolesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
