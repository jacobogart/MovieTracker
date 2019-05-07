import { jacobKey, baseUrl } from '../utils/API-logins'

export const fetchDiscover = () => {
  return fetch(`${baseUrl}discover/movie${jacobKey}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Discover failed to fetch');
      } else {
        return response.json();
      }
  });
}

