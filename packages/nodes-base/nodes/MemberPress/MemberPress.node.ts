import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
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
import { IMembers } from './MembersInterface';

/*
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
*/

export class MemberPress implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'MemberPress',
        name: 'memberpress',
        icon: 'file:memberPress.png',
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
			/*
			...transactionsOperations,
			...transactionsFields,
			...subscriptionsOperations,
			...subscriptionsFields,
			...membershipsOperations,
			...membershipsFields,
			*/

        ],
    };


	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const length = items.length as unknown as number;
		let responseData;
		const qs: IDataObject = {};
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < length; i++) {

			if (resource === 'members') {
				//https://developer.wordpress.org/rest-api/reference/members/#create-a-user
				if (operation === 'create') {
					const name = this.getNodeParameter('name', i) as string;
					const username = this.getNodeParameter('username', i) as string;
					const firstName = this.getNodeParameter('firstName', i) as string;
					const lastName = this.getNodeParameter('lastName', i) as string;
					const email = this.getNodeParameter('email', i) as string;
					const password = this.getNodeParameter('password', i) as string;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
					const body: IMembers = {
						name,
						username,
						first_name: firstName,
						last_name: lastName,
						email,
						password,
					};
					if (additionalFields.url) {
						body.url = additionalFields.url as string;
					}
					if (additionalFields.description) {
						body.description = additionalFields.description as string;
					}
					if (additionalFields.nickname) {
						body.nickname = additionalFields.nickname as string;
					}
					if (additionalFields.slug) {
						body.slug = additionalFields.slug as string;
					}
					responseData = await memberPressApiRequest.call(this, 'POST', '/members', body);
				}
				//https://developer.wordpress.org/rest-api/reference/members/#update-a-user
				if (operation === 'update') {
					const userId = this.getNodeParameter('userId', i) as number;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
					const body: IMembers = {
						id: userId,
					};
					if (updateFields.name) {
						body.name = updateFields.name as string;
					}
					if (updateFields.firstName) {
						body.first_name = updateFields.firstName as string;
					}
					if (updateFields.lastName) {
						body.last_name = updateFields.lastName as string;
					}
					if (updateFields.email) {
						body.email = updateFields.email as string;
					}
					if (updateFields.password) {
						body.password = updateFields.password as string;
					}
					if (updateFields.username) {
						body.username = updateFields.username as string;
					}
					if (updateFields.url) {
						body.url = updateFields.url as string;
					}
					if (updateFields.description) {
						body.description = updateFields.description as string;
					}
					if (updateFields.nickname) {
						body.nickname = updateFields.nickname as string;
					}
					if (updateFields.slug) {
						body.slug = updateFields.slug as string;
					}
					responseData = await memberPressApiRequest.call(this, 'POST', `/members/${userId}`, body);
				}
				//https://developer.wordpress.org/rest-api/reference/members/#retrieve-a-user
				if (operation === 'get') {
					const userId = this.getNodeParameter('userId', i) as string;
					const options = this.getNodeParameter('options', i) as IDataObject;
					if (options.context) {
						qs.context = options.context as string;
					}
					responseData = await memberPressApiRequest.call(this, 'GET', `/members/${userId}`, {}, qs);
				}
				//https://developer.wordpress.org/rest-api/reference/members/#list-users
				if (operation === 'getAll') {
					const returnAll = this.getNodeParameter('returnAll', i) as boolean;
					const options = this.getNodeParameter('options', i) as IDataObject;
					if (options.context) {
						qs.context = options.context as string;
					}
					if (options.orderBy) {
						qs.orderby = options.orderBy as string;
					}
					if (options.order) {
						qs.order = options.order as string;
					}
					if (options.search) {
						qs.search = options.search as string;
					}
					if (options.who) {
						qs.who = options.who as string;
					}
					if (returnAll === true) {
						responseData = await memberPressApiRequestAllItems.call(this, 'GET', '/members', {}, qs);
					} else {
						qs.per_page = this.getNodeParameter('limit', i) as number;
						responseData = await memberPressApiRequest.call(this, 'GET', '/members', {}, qs);
					}
				}
				//https://developer.wordpress.org/rest-api/reference/members/#delete-a-user
				if (operation === 'delete') {
					/*
					const reassign = this.getNodeParameter('reassign', i) as string;
					qs.reassign = reassign;
					qs.force = true;
					*/
					const userId = this.getNodeParameter('userId', i) as string;
					/*
					const options = this.getNodeParameter('options', i) as IDataObject;
					if (options.context) {
						qs.context = options.context as string;
					}
					*/
					responseData = await memberPressApiRequest.call(this, 'DELETE', `/members/${userId}`, {}, qs);
				}
			}
			if (Array.isArray(responseData)) {
				returnData.push.apply(returnData, responseData as IDataObject[]);
			} else {
				returnData.push(responseData as IDataObject);
			}
		}
		return [this.helpers.returnJsonArray(returnData)];

	}
}
