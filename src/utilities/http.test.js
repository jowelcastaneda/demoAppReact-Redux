import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import axios from 'axios';
import { post, put, deleteMethod, get, encodeTextToUri, escapeText, postBuffer, getBuffer } from './http';

global.localStorage = {
    getItem: () => ('{ "schemaVersion": 13 }'),
};

sinonStubPromise(sinon);

describe('Actions accept terms and condition test suite', () => {
    let mockGet;

    beforeEach(() => {
        mockGet = sinon.stub(axios, 'get');
    });

    afterEach(() => {
        axios.get.restore();
    });

    const mockSuccessResponse = () => (new Promise(((resolve) => {
        resolve({ data: 'mockResponse' });
    })));

    const mockFailedResponse = () => (new Promise(((resolve, reject) => {
        reject('error');
    })));

    it('should encode the text if encodeTextToUri is executed', () => {
        const encodedUri = encodeTextToUri('TEST/ ');

        expect(encodedUri).toEqual('test%5c%20');
    });

    it('should return data when get is executed successfully', () => {
        mockGet.withArgs('test').returnsPromise().resolves('mockResponse');
        get('test').then((result) => {
            expect(result).toEqual('mockResponse');
        });
    });

    it('should return data when deleteMethod is executed successfully', () => {
        const mockCall = sinon.stub(axios, 'create').returns(mockSuccessResponse);
        deleteMethod('test', 'testData').then((result) => {
            expect(result).toEqual('mockResponse');
        });

        mockCall.restore();
    });

    it('should return data when put is executed successfully', () => {
        const mockCall = sinon.stub(axios, 'create').returns(mockSuccessResponse);
        put('test', 'testData').then((result) => {
            expect(result).toEqual('mockResponse');
        });

        mockCall.restore();
    });

    it('should return data when post is executed successfully', () => {
        const mockCall = sinon.stub(axios, 'create').returns(mockSuccessResponse);
        post('test', 'testData').then((result) => {
            expect(result).toEqual('mockResponse');
        });

        mockCall.restore();
    });

    it('should return deleteMethod message when put throws an error', () => {
        const mockCall = sinon.stub(axios, 'create').returns(mockFailedResponse);

        deleteMethod('test', 'testData').catch((error) => {
            expect(error).toEqual('error');
        });

        mockCall.restore();
    });

    it('should return error message when put throws an error', () => {
        const mockCall = sinon.stub(axios, 'create').returns(mockFailedResponse);

        put('test', 'testData').catch((error) => {
            expect(error).toEqual('error');
        });

        mockCall.restore();
    });

    it('should return error message when post throws an error', () => {
        const mockCall = sinon.stub(axios, 'create').returns(() => (new Promise(((resolve, reject) => {
            reject({ response: { data: 'error' } });
        }))));

        post('test', 'testData').catch((error) => {
            expect(error).toEqual('error');
        });

        mockCall.restore();
    });

    it('should return escaped text', () => {
        const actualResult = escapeText('https://www.testdomain.com/asdsad7*326&#@?asd=2323132');
        expect(actualResult).toEqual('https://www.testdomain.com/asdsad7*326%26%23@?asd%3D2323132');
    });


    it('should return data when postBuffer is executed successfully', () => {
        const mockCall = sinon.stub(axios, 'create').returns(mockSuccessResponse);
        postBuffer('test', 'testData').then((result) => {
            expect(result).toEqual('mockResponse');
        });

        mockCall.restore();
    });


    it('should return error message when postBuffer throws an error', () => {
        const mockCall = sinon.stub(axios, 'create').returns(() => (new Promise(((resolve, reject) => {
            reject({ response: { data: 'error' } });
        }))));

        postBuffer('test', 'testData').catch((error) => {
            expect(error).toEqual('error');
        });
        mockCall.restore();
    });

    it('should return data when getBuffer is executed successfully', () => {
        mockGet.withArgs('test').returnsPromise().resolves('mockResponse');
        getBuffer('test').then((result) => {
            expect(result).toEqual('mockResponse');
        });
    });
});
