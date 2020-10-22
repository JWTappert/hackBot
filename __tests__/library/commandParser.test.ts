import CommandParser from '@/library/commandParser';

describe('CommandParser', () => {
  const messagePrefix = 'FAKE';
  let parser: CommandParser;

  beforeEach(() => {
    parser = new CommandParser(messagePrefix);
  });

  describe('Instantiation', () => {
    describe('With a valid prefix', () => {
      test('it is valid', () => {
        expect(parser.prefix).toMatch(messagePrefix);
      });
    });
    describe('With an invalid prefix', () => {
      test('it throws an exception', () => {
        const thrown = 'Prefix must be a non-empty string';
        expect(() => new CommandParser('')).toThrow(thrown);
        expect(() => new CommandParser('\n  \n\tg')).toThrow(thrown);
      });
    });
  });

  describe('Parsing messages', () => {

    describe('When the message content is not prefixed', () => {
      test('it returns undefined', () => {
        expect(parser.parse('An ignorable message')).toEqual(false);
      });
    });
    describe('When the message content is prefixed', () => {
      describe('and the content has many space-separated words', () => {
        test('it returns a command and the words as an array of arguments', () => {
          const expectedObject = {
            commandName: 'cmd',
            args: ['fee', 'fi', 'fo', 'funk']
          };
          expect(parser.parse(`${messagePrefix}cmd fee fi fo funk`)).toMatchObject(expectedObject);
        });
      });
      describe('and the content has no additional words', () => {
        test('it returns a command and an empty arguments array', () => {
          const expectedObject = {
            commandName: 'cmd',
            args: []
          };
          expect(parser.parse(`${messagePrefix}cmd`)).toMatchObject(expectedObject);
        });
      });
      describe('but the message content only contains the prefix', () => {
        test('it returns undefined', () => {
          expect(parser.parse(messagePrefix)).toEqual(false);
        });
      });
    });
  });
});
