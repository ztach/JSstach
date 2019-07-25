import {typItemApiUrl,dictItemApiUrl} from './routes';
import * as api from './apis';

export const get = (id) =>
    api.get(typItemApiUrl(id))

export const getAllTypes = () => 
    api.get(typItemApiUrl()); 

export const getd = (id) =>
api.get(dictItemApiUrl(id))

export const getAllDicts = () =>
    api.get(dictItemApiUrl())

export const create = params =>
    api.post(typItemApiUrl(),{...params})

export const update = (id, params) =>
    api.put(typItemApiUrl(id), {...params })
 
export const destroy = (id) =>
    api.destroy(typItemApiUrl(id))

  