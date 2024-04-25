import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '../button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ButtonComponent] });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should render the label "Next!"', () => {
    component.text = 'Next!';
    fixture.detectChanges();

    const buttonElement: HTMLElement = fixture.nativeElement;
    expect(buttonElement.textContent).toContain('Next!');
  });
});
