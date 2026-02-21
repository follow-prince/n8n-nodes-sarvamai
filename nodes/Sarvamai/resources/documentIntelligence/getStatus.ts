import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetStatus = {
	operation: ['getStatus'],
	resource: ['documentIntelligence'],
};

export const documentIntelligenceGetStatusDescription: INodeProperties[] = [
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
