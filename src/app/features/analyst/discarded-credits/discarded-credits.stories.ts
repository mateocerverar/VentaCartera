import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DiscardedCreditsComponent } from './discarded-credits';
import { CommonModule } from '@angular/common';

const meta: Meta<DiscardedCreditsComponent> = {
    title: 'Thomas/VentaCartera/Features/Analyst/DiscardedCredits',
    component: DiscardedCreditsComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule]
        })
    ]
};

export default meta;
type Story = StoryObj<DiscardedCreditsComponent>;

export const Default: Story = {};
