import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeDialogExcluindoComponent } from './unidade-dialog-excluindo.component';

describe('UnidadeDialogExcluindoComponent', () => {
  let component: UnidadeDialogExcluindoComponent;
  let fixture: ComponentFixture<UnidadeDialogExcluindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadeDialogExcluindoComponent]
    });
    fixture = TestBed.createComponent(UnidadeDialogExcluindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
