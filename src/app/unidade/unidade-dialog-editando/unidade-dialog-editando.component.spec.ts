import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeDialogEditandoComponent } from './unidade-dialog-editando.component';

describe('UnidadeDialogEditandoComponent', () => {
  let component: UnidadeDialogEditandoComponent;
  let fixture: ComponentFixture<UnidadeDialogEditandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadeDialogEditandoComponent]
    });
    fixture = TestBed.createComponent(UnidadeDialogEditandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
