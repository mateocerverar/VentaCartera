import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CardComponent } from './card';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

const meta: Meta<CardComponent> = {
    title: 'Thomas/VentaCartera/Data/Card',
    component: CardComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, CardModule]
        })
    ],
    argTypes: {
        header: { control: 'text' },
        subheader: { control: 'text' }
    }
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
    args: {
        header: 'Card Title',
        subheader: 'Card Subtitle'
    },
    render: (args) => ({
        props: args,
        template: `
      <app-card [header]="header" [subheader]="subheader">
        <p>This is the content of the card. You can pass arbitrary HTML inside.</p>
      </app-card>
    `,
    }),
};
