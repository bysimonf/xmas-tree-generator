import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmasTreeComponent } from './xmas-tree.component';

describe('XmasTreeComponent', () => {
  let component: XmasTreeComponent;
  let fixture: ComponentFixture<XmasTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmasTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XmasTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
