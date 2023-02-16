import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BungalowNewComponent } from './bungalow-new.component';

describe('BungalowNewComponent', () => {
  let component: BungalowNewComponent;
  let fixture: ComponentFixture<BungalowNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BungalowNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BungalowNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
