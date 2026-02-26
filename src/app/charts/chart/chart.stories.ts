import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ChartComponent } from './chart';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';

const meta: Meta<ChartComponent> = {
    title: 'Thomas/VentaCartera/Charts/Chart',
    component: ChartComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, ChartModule]
        })
    ],
    argTypes: {
        type: { control: 'select', options: ['bar', 'pie', 'line', 'doughnut'] }
    }
};

export default meta;
type Story = StoryObj<ChartComponent>;

export const BarChart: Story = {
    args: {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    backgroundColor: '#80B828',
                    data: [65, 59, 80, 81]
                },
                {
                    label: 'Expenses',
                    backgroundColor: '#00693E',
                    data: [28, 48, 40, 19]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    },
};
