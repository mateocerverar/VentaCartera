import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { PurchaseSelectionComponent } from './purchase-selection';
import { CommonModule } from '@angular/common';

const meta: Meta<PurchaseSelectionComponent> = {
    title: 'Thomas/VentaCartera/Features/Investor/PurchaseSelection',
    component: PurchaseSelectionComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule]
        })
    ]
};

export default meta;
type Story = StoryObj<PurchaseSelectionComponent>;

export const Default: Story = {};
