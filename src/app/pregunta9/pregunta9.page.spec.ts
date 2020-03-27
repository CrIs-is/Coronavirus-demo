import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pregunta9Page } from './pregunta9.page';

describe('Pregunta9Page', () => {
  let component: Pregunta9Page;
  let fixture: ComponentFixture<Pregunta9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pregunta9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
