import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeInfoPage } from './home-info.page';

describe('HomeInfoPage', () => {
  let component: HomeInfoPage;
  let fixture: ComponentFixture<HomeInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
