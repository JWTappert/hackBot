import ICommand from '@/library/interfaces/iCommand';
import { Message } from 'discord.js';

let Say: ICommand;

export default Say = class {

  /* istanbul ignore next */
  public static get description(): string {
    return 'Echos back the string passed as arguments.';
  }

  public static execute(args: string[], msg: Message) {
    const saying = args.join(' ');
    return msg.channel.send(saying);
  }

};
