import {
    IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import {
	memberPressApiRequest,
	memberPressApiRequestAllItems,
} from './GenericFunctions';

import {
	membersFields,
	membersOperations,
} from './MembersDescription';

import {
	membershipsFields,
	membershipsOperations,
} from './MembershipsDescription';

import {
	subscriptionsFields,
	subscriptionsOperations,
} from './SubscriptionsDescription';

import {
	transactionsFields,
	transactionsOperations,
} from './TransactionsDescription';


export class MemberPress implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'MemberPress',
        name: 'memberpress',
        icon: 'file:memberPress.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{$parameter["operation"] + ":" + $parameter["resource"]}}',
        description: 'Consume MemberPress API',
        defaults: {
            name: 'MemberPress',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
			{
				name: 'memberPressApi',
				required: true,
			},
        ],
        properties: [
            // Node properties which the user gets displayed and
            // can change on the node.
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Members',
						value: 'members',
					},
					{
						name: 'Memberships',
						value: 'memberships',
					},
					{
						name: 'Transactions',
						value: 'transactions',
					},
					{
						name: 'Subscriptions',
						value: 'subscriptions',
					},
				],
				default: 'members',
				required: true,
				description: 'Resource to consume',
			},
			...membersOperations,
			...membersFields,
			...transactionsOperations,
			...transactionsFields,
			...subscriptionsOperations,
			...subscriptionsFields,
			...membershipsOperations,
			...membershipsFields,

        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return [[]];
    }
}
