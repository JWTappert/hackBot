import ICommand from '@/library/interfaces/iCommand';
import { Message } from 'discord.js';

let Lmgtfy: ICommand;

export default Lmgtfy = class {

  /* istanbul ignore next */
  static get description(): string {
    return 'When someone is being...lazy...?';
  }

  public static execute(args: string[], msg: Message) {
    return msg.channel.send(`<http://lmgtfy.com/?q=${args.join('+')}>`);
  }

};
