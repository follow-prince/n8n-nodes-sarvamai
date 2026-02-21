"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speechToTextGetStatusDescription = void 0;
const showOnlyForGetStatus = {
    operation: ['getStatus'],
    resource: ['speechToText'],
};
exports.speechToTextGetStatusDescription = [
    {
        displayName: 'Job ID',
        name: 'job_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForGetStatus,
        },
        description: 'The UUID of the batch job to check status for',
    },
];
//# sourceMappingURL=getStatus.js.map