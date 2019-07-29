const serverUrl = 'http://localhost:3001';
export const typItemApiUrl = id => 
    id ? `${serverUrl}/type/${id}` : `${serverUrl}/type/`;

export const dictItemApiUrl = id =>
    id ? `${serverUrl}/dict/${id}` : `${serverUrl}/dict/`;

export const dictsItemApiUrl = id =>
    id ? `${serverUrl}/dicts/${id}` : `${serverUrl}/dicts/`;
