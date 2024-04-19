import Parse from 'parse';

export const APPLICATION_ID = "o0WaJDslPtko1addbjoCN1LK3rOcJw4XRwl8Ji0Y"
export const MASTER_KEY = "lvukh8ST3zTH9npZWMklZ79nSQR03kKWB79TpnbO"
export const SERVER_HOST = "http://localhost:1337"

Parse.initialize(APPLICATION_ID, MASTER_KEY);
Parse.serverURL = `${SERVER_HOST}/parse`

export default Parse