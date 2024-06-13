import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDialogInserindoComponent } from './produtos-dialog-inserindo.component';

describe('ProdutosDialogInserindoComponent', () => {
  let component: ProdutosDialogInserindoComponent;
  let fixture: ComponentFixture<ProdutosDialogInserindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosDialogInserindoComponent]
    });
    fixture = TestBed.createComponent(ProdutosDialogInserindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
