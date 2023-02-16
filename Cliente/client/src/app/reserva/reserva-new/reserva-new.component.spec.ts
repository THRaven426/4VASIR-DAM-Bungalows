import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaNewComponent } from './reserva-new.component';

describe('ReservaNewComponent', () => {
  let component: ReservaNewComponent;
  let fixture: ComponentFixture<ReservaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
