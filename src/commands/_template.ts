import ICommand from '@/library/interfaces/iCommand';
import { Message } from 'discord.js';

// Hack for implementing with static properties/methods
let CommandName: ICommand;
export default CommandName = class {

  /* istanbul ignore next */
  static get description(): string {
    return 'This is a description of my awesome command.';
  }

  public static execute(args: string[], msg: Message) {
    // msg Class Info: https://discord.js.org/#/docs/main/stable/class/Message
    throw new Error(`Not Yet Implemented ${msg}`);
  }

};
