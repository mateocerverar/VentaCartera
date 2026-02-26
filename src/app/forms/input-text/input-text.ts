import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, InputTextModule, FormsModule],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = 'text';
  @Input() icon: string = '';

  value: string = '';

  onChange: any = () => { };
  onTouch: any = () => { };

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onModelChange(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }
}
