"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speechToTextTranslateUploadFilesDescription = void 0;
const showOnlyForUploadFiles = {
    operation: ['uploadFiles'],
    resource: ['speechToTextTranslate'],
};
exports.speechToTextTranslateUploadFilesDescription = [
    {
        displayName: 'Job ID',
        name: 'job_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForUploadFiles,
        },
        description: 'The UUID of the batch job',
        routing: {
            send: {
                type: 'body',
                property: 'job_id',
            },
        },
    },
    {
        displayName: 'Files',
        name: 'files',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        default: {},
        placeholder: 'Add File',
        required: true,
        displayOptions: {
            show: showOnlyForUploadFiles,
        },
        options: [
            {
                displayName: 'File',
                name: 'file',
                values: [
                    {
                        displayName: 'Filename',
                        name: 'filename',
                        type: 'string',
                        default: '',
                        required: true,
                        description: 'The name of the audio file to be uploaded',
                    },
                ],
            },
        ],
        routing: {
            send: {
                type: 'body',
                property: 'files',
                value: '={{$value.file.map((f) => f.filename)}}',
            },
        },
    },
];
//# sourceMappingURL=uploadFiles.js.map