"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speechToTextStartJobDescription = void 0;
const showOnlyForStartJob = {
    operation: ['startJob'],
    resource: ['speechToText'],
};
exports.speechToTextStartJobDescription = [
    {
        displayName: 'Job ID',
        name: 'job_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForStartJob,
        },
        description: 'The UUID of the batch job to start',
    },
];
//# sourceMappingURL=startJob.js.map