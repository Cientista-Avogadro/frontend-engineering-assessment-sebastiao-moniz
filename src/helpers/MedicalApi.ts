import {ApiResultType} from "../types";

const API_URL = "https://randomuser.me/api";

interface IQueryProps{
    page:number;
    results:number;
}

const getAllMedicals = async ({page, results}:IQueryProps): Promise<ApiResultType> =>
    await fetch(`${API_URL}/?page=${page}&results=${results}`).then((res) => res.json());

export {
    getAllMedicals
}