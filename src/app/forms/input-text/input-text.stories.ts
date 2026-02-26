import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { InputTextComponent } from './input-text';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const meta: Meta<InputTextComponent> = {
    title: 'Thomas/VentaCartera/Forms/InputText',
    component: InputTextComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, InputTextModule, FormsModule]
        })
    ],
    argTypes: {
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        type: { control: 'select', options: ['text', 'password', 'email'] }
    }
};

export default meta;
type Story = StoryObj<InputTextComponent>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Cannot type here',
        disabled: true,
    },
};
