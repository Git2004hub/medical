import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedecinsComponent } from './list-medecins.component';

describe('ListMedecinsComponent', () => {
  let component: ListMedecinsComponent;
  let fixture: ComponentFixture<ListMedecinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMedecinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
