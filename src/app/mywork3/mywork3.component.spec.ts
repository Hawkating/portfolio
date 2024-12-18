import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mywork3Component } from './mywork3.component';

describe('Mywork3Component', () => {
  let component: Mywork3Component;
  let fixture: ComponentFixture<Mywork3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mywork3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mywork3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
