import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetStatus = {
	operation: ['getStatus'],
	resource: ['speechToText'],
};

export const speechToTextGetStatusDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'job_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGetStatus,
		},
		description: 'The UUID of the batch job to check status for. Note: To prevent rate limit errors, we recommend a minimum 5-millisecond delay between consecutive status polling requests.',
	},
];
