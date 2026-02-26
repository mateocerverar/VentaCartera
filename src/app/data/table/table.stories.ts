import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TableComponent } from './table';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

const meta: Meta<TableComponent> = {
    title: 'Thomas/VentaCartera/Data/Table',
    component: TableComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, TableModule]
        })
    ],
    argTypes: {
        paginator: { control: 'boolean' },
        rows: { control: 'number' },
        selectionMode: { control: 'radio', options: ['single', 'multiple', undefined] }
    }
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Default: Story = {
    args: {
        columns: [
            { field: 'id', header: 'Credit ID' },
            { field: 'amount', header: 'Amount ($)' },
            { field: 'status', header: 'Status' }
        ],
        data: [
            { id: 'CR-001', amount: 5000, status: 'Active' },
            { id: 'CR-002', amount: 15000, status: 'Default' },
            { id: 'CR-003', amount: 2000, status: 'Paid' }
        ],
        paginator: false
    },
};

export const WithPagination: Story = {
    args: {
        columns: [
            { field: 'name', header: 'Investor Name' },
            { field: 'portfolio', header: 'Total Portfolio' }
        ],
        data: Array.from({ length: 25 }).map((_, i) => ({
            name: `Investor ${i + 1}`,
            portfolio: `$${(Math.random() * 100000).toFixed(2)}`
        })),
        paginator: true,
        rows: 5
    },
};
