import Api from '../helpers/Api';

const Libraries = {
    async get() {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.get('/libraries');
            return results.data.libraries;
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    }
};

export default Libraries;
