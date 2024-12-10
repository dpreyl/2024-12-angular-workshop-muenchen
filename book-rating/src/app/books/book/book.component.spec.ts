import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('book', {
      isbn: '000',
      title: '',
      description: '',
      rating: 3
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
