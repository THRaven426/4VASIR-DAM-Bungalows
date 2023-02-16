import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BungalowListComponent } from './bungalow-list.component';

describe('BungalowListComponent', () => {
  let component: BungalowListComponent;
  let fixture: ComponentFixture<BungalowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BungalowListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BungalowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
