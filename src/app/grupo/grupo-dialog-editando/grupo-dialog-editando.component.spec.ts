import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDialogEditandoComponent } from './grupo-dialog-editando.component';

describe('GrupoDialogEditandoComponent', () => {
  let component: GrupoDialogEditandoComponent;
  let fixture: ComponentFixture<GrupoDialogEditandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoDialogEditandoComponent]
    });
    fixture = TestBed.createComponent(GrupoDialogEditandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
