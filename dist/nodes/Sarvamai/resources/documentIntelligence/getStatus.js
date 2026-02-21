"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentIntelligenceGetStatusDescription = void 0;
const showOnlyForGetStatus = {
    operation: ['getStatus'],
    resource: ['documentIntelligence'],
};
exports.documentIntelligenceGetStatusDescription = [
    {
        displayName: 'Job ID',
        name: 'job_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForGetStatus,
        },
        description: 'The unique identifier for the document digitization job',
    },
];
//# sourceMappingURL=getStatus.js.map