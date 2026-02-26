import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SidebarComponent } from './sidebar';
import { DrawerModule } from 'primeng/drawer';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

const meta: Meta<SidebarComponent> = {
    title: 'Thomas/VentaCartera/Layout/Sidebar',
    component: SidebarComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, DrawerModule, ButtonModule]
        })
    ],
    argTypes: {
        visible: { control: 'boolean' },
        position: { control: 'select', options: ['left', 'right', 'top', 'bottom', 'full'] },
        header: { control: 'text' }
    }
};

export default meta;
type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
    args: {
        visible: true,
        header: 'Navigation Menu',
        position: 'left'
    },
    render: (args) => ({
        props: args,
        template: `
      <app-sidebar [visible]="visible" [header]="header" [position]="position">
        <div style="padding: 1rem; border-bottom: 1px solid #eee;">Dashboard</div>
        <div style="padding: 1rem; border-bottom: 1px solid #eee;">Credits</div>
        <div style="padding: 1rem; border-bottom: 1px solid #eee;">Settings</div>
      </app-sidebar>
    `,
    }),
};
