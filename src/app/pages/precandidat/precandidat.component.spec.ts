import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecandidatComponent } from './precandidat.component';

describe('PrecandidatComponent', () => {
  let component: PrecandidatComponent;
  let fixture: ComponentFixture<PrecandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecandidatComponent]
    });
    fixture = TestBed.createComponent(PrecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
