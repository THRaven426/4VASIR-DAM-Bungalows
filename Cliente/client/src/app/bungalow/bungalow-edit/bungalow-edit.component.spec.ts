import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BungalowEditComponent } from './bungalow-edit.component';

describe('BungalowEditComponent', () => {
  let component: BungalowEditComponent;
  let fixture: ComponentFixture<BungalowEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BungalowEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BungalowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
