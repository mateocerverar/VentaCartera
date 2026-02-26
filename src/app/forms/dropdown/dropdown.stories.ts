import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DropdownComponent } from './dropdown';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const meta: Meta<DropdownComponent> = {
    title: 'Thomas/VentaCartera/Forms/Dropdown',
    component: DropdownComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, SelectModule, FormsModule]
        })
    ],
    argTypes: {
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' }
    }
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Default: Story = {
    args: {
        placeholder: 'Select a City',
        options: [
            { label: 'New York', value: 'NY' },
            { label: 'Rome', value: 'RM' },
            { label: 'London', value: 'LDN' },
            { label: 'Istanbul', value: 'IST' },
            { label: 'Paris', value: 'PRS' }
        ]
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Cannot select',
        disabled: true,
        options: []
    },
};
