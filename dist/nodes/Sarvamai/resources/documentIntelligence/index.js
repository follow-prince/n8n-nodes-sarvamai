"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentIntelligenceDescription = void 0;
const createJob_1 = require("./createJob");
const uploadFiles_1 = require("./uploadFiles");
const startJob_1 = require("./startJob");
const getStatus_1 = require("./getStatus");
const downloadResults_1 = require("./downloadResults");
const showOnlyForDocumentIntelligence = {
    resource: ['documentIntelligence'],
};
exports.documentIntelligenceDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForDocumentIntelligence,
        },
        options: [
            {
                name: 'Create Job',
                value: 'createJob',
                action: 'Create a digitization job',
                description: 'Creates a new Document Intelligence job',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/doc-digitization/job/v1',
                    },
                },
            },
            {
                name: 'Download Results',
                value: 'downloadResults',
                action: 'Get download ur ls',
                description: 'Returns presigned URLs for downloading output files',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/doc-digitization/job/v1/{{$parameter["job_id"]}}/download-files',
                    },
                },
            },
            {
                name: 'Get Status',
                value: 'getStatus',
                action: 'Get job status',
                description: 'Returns the current status of a job with page-level metrics',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/doc-digitization/job/v1/{{$parameter["job_id"]}}/status',
                    },
                },
            },
            {
                name: 'Start Job',
                value: 'startJob',
                action: 'Start processing',
                description: 'Validates the uploaded file and starts processing',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/doc-digitization/job/v1/{{$parameter["job_id"]}}/start',
                    },
                },
            },
            {
                name: 'Upload Files',
                value: 'uploadFiles',
                action: 'Get upload ur ls',
                description: 'Returns presigned URLs for uploading input files',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/doc-digitization/job/v1/upload-files',
                    },
                },
            },
        ],
        default: 'createJob',
    },
    ...createJob_1.documentIntelligenceCreateJobDescription,
    ...uploadFiles_1.documentIntelligenceUploadFilesDescription,
    ...startJob_1.documentIntelligenceStartJobDescription,
    ...getStatus_1.documentIntelligenceGetStatusDescription,
    ...downloadResults_1.documentIntelligenceDownloadResultsDescription,
];
//# sourceMappingURL=index.js.map