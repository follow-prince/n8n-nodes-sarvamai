"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentIntelligenceDownloadResultsDescription = void 0;
const showOnlyForDownloadResults = {
    operation: ['downloadResults'],
    resource: ['documentIntelligence'],
};
exports.documentIntelligenceDownloadResultsDescription = [
    {
        displayName: 'Job ID',
        name: 'job_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForDownloadResults,
        },
        description: 'The unique identifier for the document digitization job',
    },
];
//# sourceMappingURL=downloadResults.js.map