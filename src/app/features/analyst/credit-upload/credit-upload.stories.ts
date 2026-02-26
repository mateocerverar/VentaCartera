import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CreditUploadComponent } from './credit-upload';
import { CommonModule } from '@angular/common';

const meta: Meta<CreditUploadComponent> = {
    title: 'Thomas/VentaCartera/Features/Analyst/CreditUpload',
    component: CreditUploadComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule]
        })
    ]
};

export default meta;
type Story = StoryObj<CreditUploadComponent>;

export const Default: Story = {};
