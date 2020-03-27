import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pregunta11Page } from './pregunta11.page';

describe('Pregunta11Page', () => {
  let component: Pregunta11Page;
  let fixture: ComponentFixture<Pregunta11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pregunta11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
