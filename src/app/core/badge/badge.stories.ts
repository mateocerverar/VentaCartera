import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BadgeComponent } from './badge';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';

const meta: Meta<BadgeComponent> = {
    title: 'Thomas/VentaCartera/Core/Badge',
    component: BadgeComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, BadgeModule]
        })
    ],
    argTypes: {
        severity: {
            control: 'select',
            options: ['success', 'info', 'warn', 'danger', 'contrast', 'secondary', undefined]
        },
        size: {
            control: 'radio',
            options: ['large', 'xlarge', undefined]
        },
        value: {
            control: 'text'
        }
    }
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
    args: {
        value: '2',
    },
};

export const Success: Story = {
    args: {
        value: '8',
        severity: 'success',
    },
};

export const Danger: Story = {
    args: {
        value: '99+',
        severity: 'danger',
    },
};
