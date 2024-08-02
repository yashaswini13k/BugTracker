import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailsDialogComponent } from './comment-details-dialog.component';

describe('CommentDetailsDialogComponent', () => {
  let component: CommentDetailsDialogComponent;
  let fixture: ComponentFixture<CommentDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentDetailsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
