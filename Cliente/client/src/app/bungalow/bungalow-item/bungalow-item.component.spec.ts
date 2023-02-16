import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BungalowItemComponent } from './bungalow-item.component';

describe('BungalowItemComponent', () => {
  let component: BungalowItemComponent;
  let fixture: ComponentFixture<BungalowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BungalowItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BungalowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
