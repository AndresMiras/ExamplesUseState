import { print } from './utils';  

export const call = async (url, fn) => {
    try {
        const data = await fetch(url)
        const extract = await data.json();
        fn(extract);
    } catch(err) {
        print(err);
    }
}


