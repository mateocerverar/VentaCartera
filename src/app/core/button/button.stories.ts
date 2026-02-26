import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

const meta: Meta<ButtonComponent> = {
    title: 'Thomas/VentaCartera/Core/Button',
    component: ButtonComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, ButtonModule]
        })
    ],
    argTypes: {
        severity: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'info', 'warn', 'danger', 'help', 'contrast']
        },
        size: {
            control: 'radio',
            options: ['small', 'large', undefined]
        },
        onClick: { action: 'clicked' }
    }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    args: {
        label: 'Primary Button',
        severity: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Button',
        severity: 'secondary',
    },
};

export const Outlined: Story = {
    args: {
        label: 'Outlined Button',
        outlined: true,
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Icon Button',
        icon: 'pi pi-check',
    },
};
