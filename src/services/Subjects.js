import Api from '../helpers/Api';

const Subjects = {
    async get() {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.get('/subjects');
            return results.data.subjects;
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    }
};

export default Subjects;
