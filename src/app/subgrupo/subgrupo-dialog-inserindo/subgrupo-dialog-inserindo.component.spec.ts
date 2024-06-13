import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgrupoDialogInserindoComponent } from './subgrupo-dialog-inserindo.component';

describe('SubgrupoDialogInserindoComponent', () => {
  let component: SubgrupoDialogInserindoComponent;
  let fixture: ComponentFixture<SubgrupoDialogInserindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubgrupoDialogInserindoComponent]
    });
    fixture = TestBed.createComponent(SubgrupoDialogInserindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
