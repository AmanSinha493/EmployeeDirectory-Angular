import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDetailHeaderComponent } from './role-detail-header.component';

describe('RoleDetailHeaderComponent', () => {
  let component: RoleDetailHeaderComponent;
  let fixture: ComponentFixture<RoleDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleDetailHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
