import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDialogExcluindoComponent } from './produtos-dialog-excluindo.component';

describe('ProdutosDialogExcluindoComponent', () => {
  let component: ProdutosDialogExcluindoComponent;
  let fixture: ComponentFixture<ProdutosDialogExcluindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosDialogExcluindoComponent]
    });
    fixture = TestBed.createComponent(ProdutosDialogExcluindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
