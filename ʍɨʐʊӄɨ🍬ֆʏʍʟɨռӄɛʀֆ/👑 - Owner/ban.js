// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const BanList = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/BanList`);
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
const motor = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/motor`);
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `ban`,
  ๐๐ฎ๐ฎ6สึสษ: `These are the configurations -
๐If you send the command in a group *without replying* to anyone, the bot will be *disabled for that group.*
๐If you send the command in a group and *reply to someone*, they will not be able to use the bot in that *specific group.*
๐If you send the command in *personal chat* of a person, they will be blacklisted from using the bot in *any group.*`,
  async handle(ำสวำษจีผส, chat, ๐๐๐๐ำ๐, Needs, ๊ฑษชแดสแดแด, Clock, Ping, Timers) {
    try {
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
      var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
      const defaultnm = ๐๐๐๐ำ๐.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "๐็ช๐๐๐ำ๐โข แด?แดสษช๊ฐษชแดแด ๊ฐษชสแด > " + FinalName.toUpperCase() + "โ๏ธ"
      );
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      if (!๐๐๐๐ำ๐.fromMe) {
        return Mizuki_Buttons.MIB(
          ำสวำษจีผส,
          chat,
          ๐๐๐๐ำ๐,
          `Who Is This Dumbo โข@${๊ฑแดษดแดแดสeceived} Trying to Use Owner-Only Commands.


โโโโโโโค ๐๐๐๐ซ๐ฆ๐ข๐ฌ๐ฌ๐ข๐จ๐ง   
โ  
โ*โ ๐๐๐ ๐ฐ๐๐ ๐ฝ๐๐ ๐ฐ๐๐๐๐?๐๐!*
โโโโโโโโใ`,
          _๐๐๐_.ษดแดแดแดแดแดษชษด
        );
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      }
      if (๐๐๐๐ำ๐.isPm && ๐๐๐๐ำ๐.fromMe) {
        let PersonToBanlist = ๐๐๐๐ำ๐.chatId;
        BanList.addBanlistUser(PersonToBanlist, ``);
        var User = PersonToBanlist.substring(0, PersonToBanlist.indexOf(`@`));
        return Mizuki_Static.MGS(
          ำสวำษจีผส,
          chat,
          ๐๐๐๐ำ๐,
          `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived} (Owner)

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐๐๐๐ง๐ง๐๐: ${User}
โ๐ก๏ธ๊ฑแดแดแด สแดษด แดแดแดแดแดแดแดแด
โโโโโโโโใ`,
          `./สษจสสำษจโฃ๏ธฦึสษ/๐๐๐๐ำ๐โข.mp4`
        );
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      } else {
        if (Needs.length > 0) {
          let PersonToBanlist = await motor.nomentioncontact(
            Needs,
            ำสวำษจีผส,
            ๐๐๐๐ำ๐
          );
          if (PersonToBanlist === undefined) return;
          PersonToBanlist += `@s.whatsapp.net`;
          if (๐๐๐๐ำ๐.owner === PersonToBanlist) {
            return;
          }
          BanList.addBanlistUser(PersonToBanlist, ๐๐๐๐ำ๐.chatId);
          return Mizuki_Static.MGS(
            ำสวำษจีผส,
            chat,
            ๐๐๐๐ำ๐,
            `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived} (Owner)

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐๐๐ซ๐จ๐ฎ๐ฉ ๐๐๐ง๐ง๐๐: ${๐๐๐๐ำ๐.groupName}
โ๐ก๏ธ๊ฑแดแดแด สแดษด แดแดแดแดแดแดแดแด
โโโโโโโโใ`,
            `./สษจสสำษจโฃ๏ธฦึสษ/๐๐๐๐ำ๐โข.mp4`
          );
          // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        } else if (๐๐๐๐ำ๐.isReply) {
          let PersonToBanlist = ๐๐๐๐ำ๐.replyParticipant;
          BanList.addBanlistUser(PersonToBanlist, ๐๐๐๐ำ๐.chatId);
          if (๐๐๐๐ำ๐.owner === PersonToBanlist) {
            return;
          }
          // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
          var User = PersonToBanlist.substring(0, PersonToBanlist.indexOf(`@`));
          BanList.addBanlistUser(PersonToBanlist, ๐๐๐๐ำ๐.chatId);
          return Mizuki_Static.MGS(
            ำสวำษจีผส,
            chat,
            ๐๐๐๐ำ๐,
            `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived} (Owner)

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐๐๐๐ง๐ง๐๐: ${User}
โ๐ก๏ธ๊ฑแดแดแด สแดษด แดแดแดแดแดแดแดแด
โโโโโโโโใ`,
            `./สษจสสำษจโฃ๏ธฦึสษ/๐๐๐๐ำ๐โข.mp4`
          );
          // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        } else {
          BanList.addBanlistUser(``, ๐๐๐๐ำ๐.chatId);
          return Mizuki_Static.MGS(
            ำสวำษจีผส,
            chat,
            ๐๐๐๐ำ๐,
            `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived} (Owner)

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐๐๐ซ๐จ๐ฎ๐ฉ ๐๐๐ง๐ง๐๐: ${๐๐๐๐ำ๐.groupName}
โ๐ก๏ธ๊ฑแดแดแด สแดษด แดแดแดแดแดแดแดแด
โโโโโโโโใ`,
            `./สษจสสำษจโฃ๏ธฦึสษ/๐๐๐๐ำ๐โข.mp4`
          );
        }
      }
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    } catch (โฮฑะฒัััฯั) {
      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      console.log(โฮฑะฒัััฯั);
    }
  },
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
