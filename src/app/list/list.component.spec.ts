import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { MaFieldComponent } from '../ma-field/ma-field.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  const testData = [
    'george',
    'nick',
    'stas',
    'kuriakos',
    'george'
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, MaFieldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(component.title);
  });

  it('#getVal should filter data by new val', ()=>{
    const myFilter = 'george';
    component.getVal(myFilter);

    component.dataFiltered.forEach(i => {
      expect(i.indexOf(myFilter)).toBeGreaterThan(-1);
    });
  });

  it('#setFilteredData should return new array', ()=>{
    let newArray = component.setFilteredData(testData);
    newArray[0] = 'testSubject';
    expect(newArray[0]).not.toEqual(testData[0]);
  });
  
  it('#filterByVal should have result with length = 2', ()=>{
    expect(component.filterByVal(testData, 'george').length).toEqual(2); 
  });

});
