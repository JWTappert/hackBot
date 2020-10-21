import Version from '@/commands/version';
import { Message } from 'discord.js';
import { message as mockMessage, MockedMessage } from '../mocks/discord';

let sendMock: MockedMessage;
beforeEach(() => {
  sendMock = jest.fn();
  mockMessage.channel.send = sendMock;
});

describe('Version Command', () => {
  describe('Execute', () => {
    test('Sends message with current running version', () => {
      Version.execute([], mockMessage);
      const message = sendMock.mock.calls[0][0];
      const found = /Hackbot test is running v(\d+\.){2}\d+/.test(message);
      expect(found).toEqual(true);
    });
  });
});
