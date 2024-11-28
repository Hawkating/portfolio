import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcardPreviewComponent } from './projectcard-preview.component';

describe('ProjectcardPreviewComponent', () => {
  let component: ProjectcardPreviewComponent;
  let fixture: ComponentFixture<ProjectcardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectcardPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectcardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
