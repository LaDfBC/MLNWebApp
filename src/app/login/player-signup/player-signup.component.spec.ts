import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSignupComponent } from './player-signup.component';

describe('PlayerSignupComponent', () => {
  let component: PlayerSignupComponent;
  let fixture: ComponentFixture<PlayerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
