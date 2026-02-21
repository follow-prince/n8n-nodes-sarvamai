"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speechToTextTranslateDescription = void 0;
const transcribe_1 = require("./transcribe");
const initiateJob_1 = require("./initiateJob");
const uploadFiles_1 = require("./uploadFiles");
const startJob_1 = require("./startJob");
const getStatus_1 = require("./getStatus");
const downloadFiles_1 = require("./downloadFiles");
const showOnlyForSpeechToTextTranslate = {
    resource: ['speechToTextTranslate'],
};
exports.speechToTextTranslateDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForSpeechToTextTranslate,
        },
        options: [
            {
                name: 'Download Results (Batch)',
                value: 'downloadResults',
                action: 'Download results for a batch job',
                description: 'Generate presigned download URLs for translated transcription output files',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/speech-to-text-translate/job/v1/download-files',
                    },
                },
            },
            {
                name: 'Get Status (Batch)',
                value: 'getStatus',
                action: 'Get job status',
                description: 'Retrieve the current status and details of a speech to text translate bulk job',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/speech-to-text-translate/job/v1/{{$parameter["job_id"]}}/status',
                    },
                },
            },
            {
                name: 'Initiate Job (Batch)',
                value: 'initiateJob',
                action: 'Initiate a batch job',
                description: 'Create a new speech to text translate bulk job',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/speech-to-text-translate/job/v1',
                    },
                },
            },
            {
                name: 'Start Job (Batch)',
                value: 'startJob',
                action: 'Start a batch job',
                description: 'Trigger the processing of a batch job',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/speech-to-text-translate/job/v1/{{$parameter["job_id"]}}/start',
                    },
                },
            },
            {
                name: 'Transcribe',
                value: 'transcribe',
                action: 'Transcribe and translate audio',
                description: 'Automatically detects language, transcribes speech, and translates to English',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/speech-to-text-translate',
                    },
                    send: {
                        preSend: [
                            async function (requestOptions) {
                                requestOptions.headers = requestOptions.headers || {};
                                requestOptions.headers['Content-Type'] = 'multipart/form-data';
                                return requestOptions;
                            },
                        ],
                    },
                },
            },
            {
                name: 'Upload Files (Batch)',
                value: 'uploadFiles',
                action: 'Upload files for a batch job',
                description: 'Generate presigned upload URLs for audio files',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/speech-to-text-translate/job/v1/upload-files',
                    },
                },
            },
        ],
        default: 'transcribe',
    },
    ...transcribe_1.speechToTextTranslateTranscribeDescription,
    ...initiateJob_1.speechToTextTranslateInitiateJobDescription,
    ...uploadFiles_1.speechToTextTranslateUploadFilesDescription,
    ...startJob_1.speechToTextTranslateStartJobDescription,
    ...getStatus_1.speechToTextTranslateGetStatusDescription,
    ...downloadFiles_1.speechToTextTranslateDownloadResultsDescription,
];
//# sourceMappingURL=index.js.map