import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTipComponent } from './post-tip.component';

describe('PostTipComponent', () => {
  let component: PostTipComponent;
  let fixture: ComponentFixture<PostTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
