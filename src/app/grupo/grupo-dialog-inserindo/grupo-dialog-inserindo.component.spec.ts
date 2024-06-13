import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDialogInserindoComponent } from './grupo-dialog-inserindo.component';

describe('GrupoDialogInserindoComponent', () => {
  let component: GrupoDialogInserindoComponent;
  let fixture: ComponentFixture<GrupoDialogInserindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoDialogInserindoComponent]
    });
    fixture = TestBed.createComponent(GrupoDialogInserindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
