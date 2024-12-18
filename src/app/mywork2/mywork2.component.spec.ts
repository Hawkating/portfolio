import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mywork2Component } from './mywork2.component';

describe('Mywork2Component', () => {
  let component: Mywork2Component;
  let fixture: ComponentFixture<Mywork2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mywork2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mywork2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
