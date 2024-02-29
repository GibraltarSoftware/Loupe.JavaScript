import { LoupeAgent } from '../loupe.agent';

jest.useFakeTimers();

// TODO - full coverage

describe('Testing Loupe Agent', () => {
  test('agent can be created', () => {
    const loupe = new LoupeAgent();

    expect(loupe).not.toBe(null);
  });

  test('throws if no origin is set', () => {
    const loupe = new LoupeAgent();
    expect(() => loupe.verbose('Javascript', 'verbose caption', 'verbose description')).toThrow(Error);
  });

  test('does not throw if origin is set', () => {
    const loupe = new LoupeAgent();
    loupe.setLogServer('http://localhost:8081');

    jest.runAllTimers();

    expect(() => loupe.verbose('Javascript', 'verbose caption', 'verbose description')).not.toThrow(Error);
  });
});
