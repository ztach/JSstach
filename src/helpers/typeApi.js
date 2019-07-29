import {typItemApiUrl,dictItemApiUrl,dictsItemApiUrl} from './routes';
import * as api from './apis';

export const get = (id) =>
    api.get(typItemApiUrl(id))

export const getAllTypes = () => 
    api.get(typItemApiUrl()); 
 
export const getd = (id) =>
api.get(dictItemApiUrl(id))

export const getAllDict = () =>
    api.get(dictItemApiUrl())

export const getAllDicts = () =>
    api.get(dictsItemApiUrl())


export const createType = params =>
    api.post(typItemApiUrl(),{...params})

export const createDict = params =>
    api.post(dictItemApiUrl(),{...params})


export const updateType = (id, params) =>
    api.put(typItemApiUrl(id), {...params })

export const updateDict = (id, params) =>
    api.put(dictItemApiUrl(id), {...params })
 
export const destroyType = (id) =>
    api.destroy(typItemApiUrl(id))

export const destroyDict = (id) =>
    api.destroy(dictItemApiUrl(id))
  