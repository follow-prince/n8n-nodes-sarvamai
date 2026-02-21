"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speechToTextTranslateGetStatusDescription = void 0;
const showOnlyForGetStatus = {
    operation: ['getStatus'],
    resource: ['speechToTextTranslate'],
};
exports.speechToTextTranslateGetStatusDescription = [
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