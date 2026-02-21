"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentIntelligenceStartJobDescription = void 0;
const showOnlyForStartJob = {
    operation: ['startJob'],
    resource: ['documentIntelligence'],
};
exports.documentIntelligenceStartJobDescription = [
    {
        displayName: 'Job ID',
        name: 'job_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForStartJob,
        },
        description: 'The unique identifier for the document digitization job',
    },
];
//# sourceMappingURL=startJob.js.map