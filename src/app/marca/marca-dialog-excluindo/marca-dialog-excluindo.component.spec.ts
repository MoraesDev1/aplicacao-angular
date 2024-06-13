import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDialogExcluindoComponent } from './marca-dialog-excluindo.component';

describe('MarcaDialogExcluindoComponent', () => {
  let component: MarcaDialogExcluindoComponent;
  let fixture: ComponentFixture<MarcaDialogExcluindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaDialogExcluindoComponent]
    });
    fixture = TestBed.createComponent(MarcaDialogExcluindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
