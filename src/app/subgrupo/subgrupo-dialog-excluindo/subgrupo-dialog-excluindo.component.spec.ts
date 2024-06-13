import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgrupoDialogExcluindoComponent } from './subgrupo-dialog-excluindo.component';

describe('SubgrupoDialogExcluindoComponent', () => {
  let component: SubgrupoDialogExcluindoComponent;
  let fixture: ComponentFixture<SubgrupoDialogExcluindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubgrupoDialogExcluindoComponent]
    });
    fixture = TestBed.createComponent(SubgrupoDialogExcluindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
