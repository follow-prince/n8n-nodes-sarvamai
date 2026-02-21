"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentIntelligenceUploadFilesDescription = void 0;
const showOnlyForUploadFiles = {
    operation: ['uploadFiles'],
    resource: ['documentIntelligence'],
};
exports.documentIntelligenceUploadFilesDescription = [
    {
        displayName: 'Job ID',
        name: 'job_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForUploadFiles,
        },
        description: 'The unique identifier for the digitization job',
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
            multipleValues: false,
        },
        default: {},
        required: true,
        displayOptions: {
            show: showOnlyForUploadFiles,
        },
        options: [
            {
                displayName: 'File List',
                name: 'fileList',
                values: [
                    {
                        displayName: 'Filename',
                        name: 'filename',
                        type: 'string',
                        default: '',
                        required: true,
                        description: 'The name of the file to upload (must be a .pdf or .zip)',
                    },
                ],
            },
        ],
        description: 'The list of files to be uploaded. Exactly one file is required (PDF or ZIP).',
        routing: {
            send: {
                type: 'body',
                property: 'files',
                value: '={{[$value.fileList.filename]}}',
            },
        },
    },
];
//# sourceMappingURL=uploadFiles.js.map