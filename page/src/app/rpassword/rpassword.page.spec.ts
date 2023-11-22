import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RpasswordPage } from './rpassword.page';

describe('RpasswordPage', () => {
  let component: RpasswordPage;
  let fixture: ComponentFixture<RpasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
