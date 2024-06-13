import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDialogExcluindoComponent } from './grupo-dialog-excluindo.component';

describe('GrupoDialogExcluindoComponent', () => {
  let component: GrupoDialogExcluindoComponent;
  let fixture: ComponentFixture<GrupoDialogExcluindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoDialogExcluindoComponent]
    });
    fixture = TestBed.createComponent(GrupoDialogExcluindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
