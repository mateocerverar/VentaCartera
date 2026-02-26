import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TopbarComponent } from './topbar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

const meta: Meta<TopbarComponent> = {
    title: 'Thomas/VentaCartera/Layout/Topbar',
    component: TopbarComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, ToolbarModule, ButtonModule]
        })
    ],
    argTypes: {
        title: { control: 'text' },
        userName: { control: 'text' },
        onMenuToggle: { action: 'menuToggled' }
    }
};

export default meta;
type Story = StoryObj<TopbarComponent>;

export const Default: Story = {
    args: {
        title: 'Venta de Cartera',
        userName: 'Analista Principal'
    },
};

export const InvestorRole: Story = {
    args: {
        title: 'Marketplace Inversiones',
        userName: 'Inversionista Externo'
    },
};
