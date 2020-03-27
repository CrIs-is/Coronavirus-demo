import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pregunta8Page } from './pregunta8.page';

describe('Pregunta8Page', () => {
  let component: Pregunta8Page;
  let fixture: ComponentFixture<Pregunta8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pregunta8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
