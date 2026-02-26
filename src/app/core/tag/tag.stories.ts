import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TagComponent } from './tag';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

const meta: Meta<TagComponent> = {
    title: 'Thomas/VentaCartera/Core/Tag',
    component: TagComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, TagModule]
        })
    ],
    argTypes: {
        severity: {
            control: 'select',
            options: ['success', 'info', 'warn', 'danger', 'contrast', 'secondary', undefined]
        },
        value: {
            control: 'text'
        },
        icon: {
            control: 'text'
        }
    }
};

export default meta;
type Story = StoryObj<TagComponent>;

export const Default: Story = {
    args: {
        value: 'Primary Tag',
    },
};

export const Success: Story = {
    args: {
        value: 'Success Tag',
        severity: 'success',
        icon: 'pi pi-check'
    },
};

export const Rounded: Story = {
    args: {
        value: 'Rounded Tag',
        rounded: true
    },
};
