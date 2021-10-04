import { api, marvelKey } from './api';

class Personagens {
    async obtemPersonagens() {
        const resposta = await api.get(`/characters?${marvelKey}`);
        return resposta.data.data;
    }
}

export default new Personagens();