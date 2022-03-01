import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEdicaoProdutoComponent } from './dialog-edicao-produto.component';

describe('DialogEdicaoProdutoComponent', () => {
  let component: DialogEdicaoProdutoComponent;
  let fixture: ComponentFixture<DialogEdicaoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEdicaoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEdicaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
