const BASE_URL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky';

class SkyScannerApi {
    readonly baseUrl: string;

    readonly defaultHeaders: HeadersInit;

    constructor(options: { baseUrl: string }) {
        this.baseUrl = options.baseUrl;
        this.defaultHeaders = {
            'x-rapidapi-key': 'de24ccb21dmshd84ce6669053dfep178518jsnce232c3dea79',
            "x-rapidapi-host": 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',

        };
    }

    private getHeaders(): HeadersInit {
        return {
            ...this.defaultHeaders,
        };
    }

    private async get(url: string, options?: { headers?: HeadersInit }) {
        return fetch(`${this.baseUrl}/${url}`, {
            headers: options?.headers || this.getHeaders(),
            method: 'GET',
        });
    }

    private async post(url: string, options: { headers?: HeadersInit; body: unknown }) {
        return fetch(`${this.baseUrl}/${url}`, {
            headers: options.headers || this.getHeaders(),
            method: 'POST',
            body: JSON.stringify(options.body),
        });
    }

// public methods:
    public async postData(url: string, options: { headers?: HeadersInit; body: unknown }) {
        return this.post(url, options);
    }

    public async getData(url: string, options?: { headers?: HeadersInit }) {
        return this.get(url, options).then((response) => response.json());
    }
}

const skyScannerApi = new SkyScannerApi({
    baseUrl: BASE_URL,
});

export default skyScannerApi;
