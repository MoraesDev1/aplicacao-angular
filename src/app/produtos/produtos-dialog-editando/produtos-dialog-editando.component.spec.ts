import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDialogEditandoComponent } from './produtos-dialog-editando.component';

describe('ProdutosDialogEditandoComponent', () => {
  let component: ProdutosDialogEditandoComponent;
  let fixture: ComponentFixture<ProdutosDialogEditandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosDialogEditandoComponent]
    });
    fixture = TestBed.createComponent(ProdutosDialogEditandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
