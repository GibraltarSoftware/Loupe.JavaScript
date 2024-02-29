import { LoupeAgent } from '@gibraltarsoftware/loupe-typescript';

const loupe = new LoupeAgent(window, document);
loupe.setLogServer('http://localhost:58080/');

const someObject = { name: "test", code: 123, nestedObj: { a: 1} };
loupe.verbose('Javascript', 'verbose caption', 'verbose description', null, null, someObject, null);
loupe.information('Javascript', 'info caption', 'info description', null, null, someObject, null);
loupe.warning('Javascript', 'warning caption', 'warning description', null, null, someObject, null);
loupe.error('Javascript', 'error caption', 'error description', null, null, someObject, null);
loupe.critical('Javascript', 'critical caption', 'critical description', null, null, someObject, null);