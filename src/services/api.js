import axios from 'axios';

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
});

const marvelKey = `ts=1631744233383&apikey=1b1a58ca65785a26927cdcc98f13e726&hash=d230432fb0496dd3ce25645ceed9da32`;

export {
    api,
    marvelKey,
};

//ts+privateKey+publicKey
//
//
//
