import {ref} from "vue";

export const useFetch = (url, options={}) => {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const request = async (url, options) => {
        loading.value = true;
        try {
            const result = await fetch(url, options);

            if(!result.ok) {
                throw new Error("Something went wrong");
            }

            data.value = await result.json();
        } catch(e) {
            error.value = e;
        } finally {
            loading.value = false
        }

    };

    request(url, options);

    return {error, data, loading, request}
};