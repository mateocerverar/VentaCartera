import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FileUploadComponent } from './file-upload';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';

const meta: Meta<FileUploadComponent> = {
    title: 'Thomas/VentaCartera/Forms/FileUpload',
    component: FileUploadComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CommonModule, FileUploadModule]
        })
    ],
    argTypes: {
        mode: { control: 'radio', options: ['basic', 'advanced'] },
        accept: { control: 'text' },
        multiple: { control: 'boolean' },
        auto: { control: 'boolean' }
    }
};

export default meta;
type Story = StoryObj<FileUploadComponent>;

export const Advanced: Story = {
    args: {
        mode: 'advanced',
        accept: 'image/*',
        maxFileSize: 1000000,
        multiple: true
    },
};

export const BasicAuto: Story = {
    args: {
        mode: 'basic',
        auto: true,
        chooseLabel: 'Upload File',
        accept: 'image/*'
    },
};
