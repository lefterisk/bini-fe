import Api from '../helpers/Api';

const Countries = {
    async get() {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.get('/countries');
            return results.data.countries;
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    }
};

export default Countries;
