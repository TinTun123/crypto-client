import type { UseFetchOptions } from 'nuxt/app'


export function useApiFetch<T> (url: string, options: UseFetchOptions<T> = {}) {

    let headers : any = {};

    const token = useCookie('XSRF-TOKEN');

    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string;
    }

    if (process.server) {

        headers = {
            ...headers,
            ...useRequestHeaders(["referer", "cookie"])   
        }
    }


    

    return useFetch("https://827c-2405-9800-b500-3f2f-f7bd-4f38-9f4b-87b.ngrok-free.app/" + url, {
        credentials : 'include',
        watch : false,
        ...options,
        headers : {
            ...headers,
            ...options?.headers,
            referer : 'https://warm-custard-55ab21.netlify.app/'
        },
        onRequest({request, response, options}) {
        },
    })
}