import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaFieldComponent } from './ma-field.component';

describe('MaFieldComponent', () => {
  let component: MaFieldComponent;
  let fixture: ComponentFixture<MaFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#valueChanged should return #my-input value', ()=> {
    spyOn(component, 'valueChanged');
    
    const inputElement: HTMLElement = fixture.nativeElement;
    const inp = inputElement.querySelector('#my-input');
    
    inp.dispatchEvent(new Event('change'));

    expect(component.valueChanged).toHaveBeenCalled();
  })
});
