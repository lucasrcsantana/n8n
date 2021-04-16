import { INodeProperties } from 'n8n-workflow';

export const membersOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a member',
			},
			{
				name: 'Delete',
			 	value: 'delete',
			 	description: 'Delete a member',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a member',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all members',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a member',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const membersFields = [

/* -------------------------------------------------------------------------- */
/*                                user:create                                 */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Login name for the member.',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Display name for the member.',
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'First name for the member.',
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Last name for the member.',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'The email address for the member.',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Password for the member (never included)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'URL of the member.',
			},
			{
				displayName: 'Description',
				name: 'description',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				type: 'string',
				default: '',
				description: 'Description of the member.',
			},
			{
				displayName: 'Nickname',
				name: 'nickname',
				type: 'string',
				default: '',
				description: 'The nickname for the member.',
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'An alphanumeric identifier for the member.',
			},
		],
	},
/* -------------------------------------------------------------------------- */
/*                                 member:update                                */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'update',
				],
			},
		},
		description: 'Unique identifier for the member.',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				description: 'Login name for the member.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Display name for the member.',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'First name for the member.',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Last name for the member.',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				description: 'The email address for the member.',
			},
			{
				displayName: 'Password',
				name: 'password',
				type: 'string',
				default: '',
				description: 'Password for the member (never included)',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'URL of the member.',
			},
			{
				displayName: 'Description',
				name: 'description',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				type: 'string',
				default: '',
				description: 'Description of the member.',
			},
			{
				displayName: 'Nickname',
				name: 'nickname',
				type: 'string',
				default: '',
				description: 'The nickname for the member.',
			},
			{
				displayName: 'Slug',
				name: 'slug',
				type: 'string',
				default: '',
				description: 'An alphanumeric identifier for the member.',
			},
		],
	},
/* -------------------------------------------------------------------------- */
/*                                 member:get                                   */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'Unique identifier for the member.',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'get',
				],
			},
		},
		options: [
			{
				displayName: 'Context',
				name: 'context',
				type: 'options',
				options: [
					{
						name: 'View',
						value: 'view',
					},
					{
						name: 'Embed',
						value: 'embed',
					},
					{
						name: 'Edit',
						value: 'edit',
					},
				],
				default: 'view',
				description: 'Scope under which the request is made; determines fields present in response.',
			},
		],
	},
/* -------------------------------------------------------------------------- */
/*                                 member:getAll                                */
/* -------------------------------------------------------------------------- */
{
	displayName: 'Return All',
	name: 'returnAll',
	type: 'boolean',
	displayOptions: {
		show: {
			resource: [
				'members',
			],
			operation: [
				'getAll',
			],
		},
	},
	default: false,
	description: 'If all results should be returned or only up to a given limit.',
},
{
	displayName: 'Limit',
	name: 'limit',
	type: 'number',
	displayOptions: {
		show: {
			resource: [
				'members',
			],
			operation: [
				'getAll',
			],
			returnAll: [
				false,
			],
		},
	},
	typeOptions: {
		minValue: 1,
		maxValue: 10,
	},
	default: 5,
	description: 'How many results to return.',
},
{
	displayName: 'Options',
	name: 'options',
	type: 'collection',
	placeholder: 'Add Option',
	default: {},
	displayOptions: {
		show: {
			resource: [
				'members',
			],
			operation: [
				'getAll',
			],
		},
	},
	options: [
		{
			displayName: 'Context',
			name: 'context',
			type: 'options',
			options: [
				{
					name: 'View',
					value: 'view',
				},
				{
					name: 'Embed',
					value: 'embed',
				},
				{
					name: 'Edit',
					value: 'edit',
				},
			],
			default: 'view',
			description: 'Scope under which the request is made; determines fields present in response.',
		},
		{
			displayName: 'Order By',
			name: 'orderBy',
			type: 'options',
			options: [
				{
					name: 'Email',
					value: 'email',
				},
				{
					name: 'ID',
					value: 'id',
				},
				{
					name: 'Include',
					value: 'include',
				},
				{
					name: 'Include Slugs',
					value: 'include_slugs',
				},
				{
					name: 'Name',
					value: 'name',
				},
				{
					name: 'Registered Date',
					value: 'registered_date',
				},
				{
					name: 'Slug',
					value: 'slug',
				},
				{
					name: 'URL',
					value: 'url',
				},
			],
			default: 'id',
			description: 'Sort collection by object attribute.',
		},
		{
			displayName: 'Order',
			name: 'order',
			type: 'options',
			options: [
				{
					name: 'ASC',
					value: 'asc',
				},
				{
					name: 'DESC',
					value: 'desc',
				},
			],
			default: 'desc',
			description: 'Order sort attribute ascending or descending.',
		},
		{
			displayName: 'Search',
			name: 'search',
			type: 'string',
			default: '',
			description: 'Limit results to those matching a string.',
		},
		{
			displayName: 'Who',
			name: 'who',
			type: 'options',
			options: [
				{
					name: 'Authors',
					value: 'authors',
				},
			],
			default: 'authors',
			description: 'Limit result set to members who are considered authors.',
		},
	],
},
/* -------------------------------------------------------------------------- */
/*                                 member:delete                                */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'delete',
				],
			},
		},
		description: `Member ID to delete.`,
	},
] as INodeProperties[];
