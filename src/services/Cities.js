import Api from '../helpers/Api';

const Cities = {
    async get() {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.get('/cities');
            return results.data.cities;
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    }
};

export default Cities;
