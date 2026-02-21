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
		description: 'The unique identifier for the job. Returns the current status with detailed page-level metrics. States: Accepted, Pending, Running, Completed, PartiallyCompleted, Failed.',
	},
];
