import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, SelectModule, FormsModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() options: any[] = [];
  @Input() optionLabel: string = 'label';
  @Input() optionValue: string = 'value';
  @Input() placeholder: string = 'Select...';
  @Input() disabled: boolean = false;

  value: any = null;

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

  onModelChange(value: any) {
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }
}
