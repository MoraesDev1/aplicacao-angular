import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDialogInserindoComponent } from './marca-dialog-inserindo.component';

describe('MarcaDialogInserindoComponent', () => {
  let component: MarcaDialogInserindoComponent;
  let fixture: ComponentFixture<MarcaDialogInserindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaDialogInserindoComponent]
    });
    fixture = TestBed.createComponent(MarcaDialogInserindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
