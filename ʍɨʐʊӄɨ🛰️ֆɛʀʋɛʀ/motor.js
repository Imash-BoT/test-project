try {
  // ā¬” ā¢šš«šš¤š¢š§š³ ā¬”==========================ā¬”    š (c)ēŖšššÓš š    ā¬”==========================ā¬” šššā¢ ā¬”
  const { MessageType } = require(`@adiwajshing/baileys`);
  const _ššš_ = require(`./_ššš_`);
  require(`python-format-js`);
  const vers = require(`../package.json`);
  const speed = require("performance-now");
  let Timestamp = speed();
  const Ping = speed() - Timestamp;
  const date = require("date-and-time");
  const now = new Date();
  date.format(now, "ddd, MMM DD YYYY");
  const pattern = date.compile("ddd, MMM DD YYYY");
  const Clock = date.format(now, pattern);
  // ā¬” ā¢šš«šš¤š¢š§š³ ā¬”==========================ā¬”    š (c)ēŖšššÓš š    ā¬”==========================ā¬” šššā¢ ā¬”
  exports.nomentioncontact = async (args, ÓŹĒÓÉØÕ¼Ź, ššššÓš) => {
    var jidNumber = ``;
    var countryCode = _ššš_.CCD;
    if (isNaN(args[0]) || args[0][0] === `+`) {
      if (args[0][0] === `@` || args[0][0] === `+`) {
        jidNumber = args[0].substring(1, args[0].length + 1);
      } else {
        ÓŹĒÓÉØÕ¼Ź.sendMessage(
          ššššÓš.chatId,
          `\n(c)šš¢š³š®š¤š¢šššØš­  \nš°ļøį“ÉŖÉ“É¢: _${Ping.toFixed(4)}s_\nšį“į“į“į“: _${Clock}_

*Enter valid contact number.* Approved Syntax:
1. XXXXXXXXXX 
2. Tag the person 3. +(YYY)XXXXXXXXXX. 
_(YY- Country Code, without zeros)_`,
          MessageType.text
        );
        return;
      }
    } else {
      jidNumber = args[0];
    }
    // ā¬” ā¢šš«šš¤š¢š§š³ ā¬”==========================ā¬”    š (c)ēŖšššÓš š    ā¬”==========================ā¬” šššā¢ ā¬”
    if (jidNumber.length < 8 || jidNumber.length > 13) {
      ÓŹĒÓÉØÕ¼Ź.sendMessage(
        ššššÓš.chatId,
        `\n(c)šš¢š³š®š¤š¢šššØš­  \nš°ļøį“ÉŖÉ“É¢: _${Ping.toFixed(4)}s_\nšį“į“į“į“: _${Clock}_

*Enter valid contact number.* Approved Syntax:
1. XXXXXXXXXX 
2. Tag the person 
3. +(YYY)XXXXXXXXXX. 
_(YY- Country Code, without zeros)_`,
        MessageType.text
      );
      return;
    } else if (jidNumber.length === 10) {
      jidNumber = countryCode + jidNumber;
    }
    var isOnWhatsApp = await ÓŹĒÓÉØÕ¼Ź.isOnWhatsApp(jidNumber);
    if (isOnWhatsApp === undefined) {
      throw `NumberInvalid`;
    }
    return jidNumber;
  };
  // ā¬” ā¢šš«šš¤š¢š§š³ ā¬”==========================ā¬”    š (c)ēŖšššÓš š    ā¬”==========================ā¬” šššā¢ ā¬”
  exports.onwhatsappserver = async (chatId, groupMembers) => {
    var isMember = false;
    if (!(chatId === undefined)) {
      for (const index in groupMembers) {
        if (chatId == groupMembers[index].jid.split(`@`)[0]) {
          isMember = true;
        }
      }
      return isMember;
    } else {
      return isMember;
    }
  };
  // ā¬” ā¢šš«šš¤š¢š§š³ ā¬”==========================ā¬”    š (c)ēŖšššÓš š    ā¬”==========================ā¬” šššā¢ ā¬”
} catch (āĪ±Š²ŃŃŃĻŃ) {
  console.log(āĪ±Š²ŃŃŃĻŃ);
}
