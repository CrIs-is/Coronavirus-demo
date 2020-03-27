import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pregunta10Page } from './pregunta10.page';

describe('Pregunta10Page', () => {
  let component: Pregunta10Page;
  let fixture: ComponentFixture<Pregunta10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pregunta10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
