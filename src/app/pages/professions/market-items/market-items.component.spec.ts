import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketItemsComponent } from './market-items.component';

describe('MarketItemsComponent', () => {
  let component: MarketItemsComponent;
  let fixture: ComponentFixture<MarketItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
