try {
  // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  const _๐๐๐_ = require(`./_๐๐๐_`);
  var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
  var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
  require(`python-format-js`);
  const fs = require(`fs`);
  const cleanRF = require("./cleanRF");
  const vers = require(`../package.json`);
  const speed = require("performance-now");
  let Timestamp = speed();
  const Pong = speed() - Timestamp;
  const Ping = Pong.toFixed(4);
  const date = require("date-and-time");
  const now = new Date();
  date.format(now, "ddd, MMM DD YYYY");
  const pattern = date.compile("ddd, MMM DD YYYY");
  const Clock = date.format(now, pattern);
  // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
  exports.catch = async (โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat) => {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    const defaultnm = ๐๐๐๐ำ๐.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    await ำสวำษจีผส
      .sendMessage(
        ๐๐๐๐ำ๐.chatId,
        {
          contentText: `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived},
              
โ ๐๐ฆ ๐๐ข๐ฏ ๐๐ฏ๐ต๐ฐ ๐๐ฐ๐ฎ๐ฆ ๐๐ณ๐ณ๐ฐ๐ณ โ
โค ๐๐จ๐ฆ๐ฆ๐๐ง๐: _${แดแดษช}${FinalName}_!`,
          footerText: `\n(c)๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ \n๐แดแดแดแด: _${Clock}_`,
          buttons: [
            {
              buttonId: `${แดแดษช}help`,
              buttonText: { displayText: `${แดแดษช}help` },
              type: 1,
            },
          ],
          headerType: 1,
        },
        MessageType.buttonsMessage,
        {
          quoted: chat,
          contextInfo: { mentionedJid: [๊ฑแดษดแดแดสษชแด] },
        }
      )
      .then(console.log(โฮฑะฒัััฯั));
    // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    return await ำสวำษจีผส
      .sendMessage(
        ๐๐๐๐ำ๐.Myself,
        {
          contentText: `โกTry Command: _${แดแดษช}${FinalName}_ Again Later!`,
          footerText: `\n(c)๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ  \n๐แดแดแดแด: _${Clock}_


Error: ${โฮฑะฒัััฯั}`,
          buttons: [
            {
              buttonId: `${แดแดษช}bugreport`,
              buttonText: { displayText: `${แดแดษช}bugreport` },
              type: 1,
            },
          ],
          headerType: 1,
        },
        MessageType.buttonsMessage,
        {
          quoted: chat,
        }
      )
      .then(console.log(โฮฑะฒัััฯั));
  };
  // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
} catch (โฮฑะฒัััฯั) {
  console.log(โฮฑะฒัััฯั);
}
