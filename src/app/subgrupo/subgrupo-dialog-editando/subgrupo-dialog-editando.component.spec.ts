import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgrupoDialogEditandoComponent } from './subgrupo-dialog-editando.component';

describe('SubgrupoDialogEditandoComponent', () => {
  let component: SubgrupoDialogEditandoComponent;
  let fixture: ComponentFixture<SubgrupoDialogEditandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubgrupoDialogEditandoComponent]
    });
    fixture = TestBed.createComponent(SubgrupoDialogEditandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
