"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speechToTextTranslateDownloadResultsDescription = void 0;
const showOnlyForDownloadResults = {
    operation: ['downloadResults'],
    resource: ['speechToTextTranslate'],
};
exports.speechToTextTranslateDownloadResultsDescription = [
    {
        displayName: 'Job ID',
        name: 'job_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForDownloadResults,
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
            show: showOnlyForDownloadResults,
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
                        description: 'The name of the output transcription file to receive a download URL for',
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
//# sourceMappingURL=downloadFiles.js.map