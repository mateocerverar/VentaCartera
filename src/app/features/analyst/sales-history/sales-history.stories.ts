import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SalesHistoryComponent } from './sales-history';
import { CommonModule } from '@angular/common';

const meta: Meta<SalesHistoryComponent> = {
    title: 'Thomas/VentaCartera/Features/Analyst/SalesHistory',
    component: SalesHistoryComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule]
        })
    ]
};

export default meta;
type Story = StoryObj<SalesHistoryComponent>;

export const Default: Story = {};
