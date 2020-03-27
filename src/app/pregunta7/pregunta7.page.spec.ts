import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pregunta7Page } from './pregunta7.page';

describe('Pregunta7Page', () => {
  let component: Pregunta7Page;
  let fixture: ComponentFixture<Pregunta7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pregunta7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
