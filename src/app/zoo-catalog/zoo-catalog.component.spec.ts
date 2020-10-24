import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooCatalogComponent } from './zoo-catalog.component';

describe('ZooCatalogComponent', () => {
  let component: ZooCatalogComponent;
  let fixture: ComponentFixture<ZooCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
