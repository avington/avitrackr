import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Self } from '@angular/core';
import {
  ControlValueAccessor,
  Validator,
  Validators,
  AbstractControl,
  ValidationErrors,
  NgControl,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'avi-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements ControlValueAccessor, Validator, OnInit, AfterViewInit {
  @ViewChild('textArea', { static: false }) textArea: ElementRef;

  @Input() controlId: string;
  @Input() isRequired = false;
  @Input() label: string = null;
  @Input() errorMsg: string;

  controlValue: string;
  disabled: boolean;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  ngAfterViewInit(): void {
    if (this.textArea) {
      this.textArea.nativeElement.value = this.controlValue;
    }
  }

  onChange(event) {}

  onTouched() {}

  validate(control: AbstractControl): ValidationErrors {
    return Validators.required(control);
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
  writeValue(obj: any): void {
    this.controlValue = obj;
    if (this.textArea) {
      this.textArea.nativeElement.value = obj;
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
}
