import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { PurchasedPortfolioComponent } from './purchased-portfolio';
import { CommonModule } from '@angular/common';

const meta: Meta<PurchasedPortfolioComponent> = {
    title: 'Thomas/VentaCartera/Features/Investor/PurchasedPortfolio',
    component: PurchasedPortfolioComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule]
        })
    ]
};

export default meta;
type Story = StoryObj<PurchasedPortfolioComponent>;

export const Default: Story = {};
