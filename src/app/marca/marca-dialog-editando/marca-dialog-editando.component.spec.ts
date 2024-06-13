import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDialogEditandoComponent } from './marca-dialog-editando.component';

describe('MarcaDialogEditandoComponent', () => {
  let component: MarcaDialogEditandoComponent;
  let fixture: ComponentFixture<MarcaDialogEditandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaDialogEditandoComponent]
    });
    fixture = TestBed.createComponent(MarcaDialogEditandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
