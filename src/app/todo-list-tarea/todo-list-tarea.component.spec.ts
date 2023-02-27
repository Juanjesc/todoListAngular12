import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTareaComponent } from './todo-list-tarea.component';

describe('TodoListTareaComponent', () => {
  let component: TodoListTareaComponent;
  let fixture: ComponentFixture<TodoListTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
