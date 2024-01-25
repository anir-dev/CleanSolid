// Hay que agregar la dependencia de axios ```yarn add axios``` o ```npm i axios```
// import axios from 'axios';

export class HttpClient {

    // async get(url: string) {
    //     const { data, status } = await axios.get(url);
    //     console.log({ status });
    //     return { data, status };
    // }

    async get(url: string) {
        const resp = await fetch(url);

        const data = await resp.json();

        return { data, status: resp.status };
    }
}