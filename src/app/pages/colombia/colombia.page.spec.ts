import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColombiaPage } from './colombia.page';

describe('ColombiaPage', () => {
  let component: ColombiaPage;
  let fixture: ComponentFixture<ColombiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColombiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColombiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
