import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeDialogInserindoComponent } from './unidade-dialog-inserindo.component';

describe('UnidadeDialogInserindoComponent', () => {
  let component: UnidadeDialogInserindoComponent;
  let fixture: ComponentFixture<UnidadeDialogInserindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadeDialogInserindoComponent]
    });
    fixture = TestBed.createComponent(UnidadeDialogInserindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
