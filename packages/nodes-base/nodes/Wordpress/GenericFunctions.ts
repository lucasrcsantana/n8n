import {
	OptionsWithUri,
} from 'request';

import {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	IDataObject,
} from 'n8n-workflow';

export async function wordpressApiRequest(this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: string, resource: string, body: any = {}, qs: IDataObject = {}, uri?: string, option: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
	const credentials = this.getCredentials('memberPressApi');
	if (credentials === undefined) {
		throw new Error('No credentials got returned!');
	}

	let options: OptionsWithUri = {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		auth: {
			user: credentials!.username as string,
			password: credentials!.password as string,
		},
		method,
		qs,
		body,
		uri: uri || `${credentials!.url}/wp-json/wp/v2${resource}`,
		json: true,
	};
	options = Object.assign({}, options, option);
	if (Object.keys(options.body).length === 0) {
		delete options.body;
	}
	try {
		return await this.helpers.request!(options);
	} catch (error) {
		let errorMessage = error.message;
		if (error.response && error.response.body) {
			errorMessage = error.response.body.message || error.response.body.Message || error.message;
		}

		throw new Error('MemberPress Error: ' + errorMessage);
	}
}

export async function wordpressApiRequestAllItems(this: IExecuteFunctions | ILoadOptionsFunctions, method: string, endpoint: string, body: any = {}, query: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any

	const returnData: IDataObject[] = [];

	let responseData;

	query.per_page = 10;
	query.page = 0;

	do {
		query.page++;
		responseData = await wordpressApiRequest.call(this, method, endpoint, body, query, undefined, { resolveWithFullResponse: true });
		returnData.push.apply(returnData, responseData.body);
	} while (
		responseData.headers['x-wp-totalpages'] !== undefined &&
		parseInt(responseData.headers['x-wp-totalpages'], 10) < query.page
	);

	return returnData;
}
