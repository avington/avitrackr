import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Self,
  EventEmitter,
  Output,
  forwardRef,
  AfterViewInit
} from '@angular/core';
import { NgControl, ControlValueAccessor, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'avi-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor, Validator, OnInit, AfterViewInit {
  @ViewChild('input', { static: false }) input: ElementRef;

  disabled;

  @Input() controlId: string;
  @Input() type = 'text';
  @Input() isRequired = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() errorMsg: string;

  controlValue: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  ngAfterViewInit(): void {
    if (this.input) {
      this.input.nativeElement.value = this.controlValue;
    }
  }

  onChange(event) {}

  onTouched() {}

  writeValue(obj: any): void {
    this.controlValue = obj;
    if (this.input) {
      this.input.nativeElement.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(ctrl: AbstractControl): { [key: string]: any } {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    return validators;
  }
}
