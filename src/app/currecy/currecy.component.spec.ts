import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrecyComponent } from './currecy.component';

describe('CurrecyComponent', () => {
  let component: CurrecyComponent;
  let fixture: ComponentFixture<CurrecyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrecyComponent]
    });
    fixture = TestBed.createComponent(CurrecyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
