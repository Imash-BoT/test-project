// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../สษจสสำษจ๐ฐ๏ธึษสสษส/cleanRF");
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
const malScraper = require(`mal-scraper`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const vers = require(`../../package.json`);
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `anime`,
  ๐๐ฎ๐ฎ6สึสษ: `*${แดแดษช}anime* (anime name)`,
  async handle(ำสวำษจีผส, chat, ๐๐๐๐ำ๐, Needs, ๊ฑษชแดสแดแด, Clock, Ping, Timers) {
    try {
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
      var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
      const defaultnm = ๐๐๐๐ำ๐.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "๐็ช๐๐๐ำ๐โข แด แดสษช๊ฐษชแดแด ๊ฐษชสแด > " + FinalName.toUpperCase() + "โ๏ธ"
      );
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      if (Needs.length === 0) {
        var ๐Usage = ๊ฑษชแดสแดแด.get(๐๐๐๐ำ๐.commandName);
        ๐๐ฎ๐ฎสึสษ = ๐Usage.๐๐ฎ๐ฎ6สึสษ === undefined ? `Null` : ๐Usage.๐๐ฎ๐ฎ6สึสษ;
        const ษดแดแดแดแดสษขแดแดแดษดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/ษดแดแดแดแดสษขแดแดแดษดแด`);
        return ษดแดแดแดแดสษขแดแดแดษดแด
          .ษดแดแดแดแดสษขแดแดแดษดแด(
            ำสวำษจีผส,
            chat,
            ๐๐๐๐ำ๐,
            ๊ฑแดษดแดแดสษชแด,
            ๊ฑแดษดแดแดสeceived,
            ๐๐๐๐ำ๐.commandName,
            ๐๐ฎ๐ฎสึสษ
          )
          .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
      } // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      const name = Needs.join(` `);
      malScraper.getInfoFromName(name).then(async (data) => {
        const AnimeInfos = `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived},

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐ก๐๐ข๐ญ๐ฅ๐: *${data.title}*
โ๐ง๐ฃ๐ฟ๐ฒ๐บ๐ถ๐ฒ๐ฟ๐ฒ๐ฑ: _${data.premiered}_
โ๐๐๐ฟ๐ผ๐ฎ๐ฑ๐ฐ๐ฎ๐๐: _${data.broadcast}_
โโ๐๐ฒ๐ป๐ฟ๐ฒ๐: _${data.genres}_
โ๐๐๐ป๐ด๐น๐ถ๐๐ต๐ง๐ถ๐๐น๐ฒ: _${data.englishTitle}_
โ๐ถ๐๐ฎ๐ฝ๐ฎ๐ป๐ฒ๐๐ฒ๐ง๐ถ๐๐น๐ฒ: _${data.japaneseTitle}_
โ๐ซ๐ง๐๐ฝ๐ฒ: _${data.type}_
โ๐๐๐ฝ๐ถ๐๐ผ๐ฑ๐ฒ๐: _${data.episodes}_
โ๐ฅ๐ฅ๐ฎ๐๐ถ๐ป๐ด: _${data.rating}_
โ๐ฐ๏ธ๐๐ถ๐ฟ๐ฒ๐ฑ: _${data.aired}_
โ๐ฏ๐ฆ๐ฐ๐ผ๐ฟ๐ฒ: _${data.score}_
โโญ๐๐ฎ๐๐ผ๐ฟ๐ถ๐๐ฒ๐: _${data.favorites}_
โ๐๐ฅ๐ฎ๐ป๐ธ๐ฒ๐ฑ: _${data.ranked}_
โโฐ๐๐๐ฟ๐ฎ๐๐ถ๐ผ๐ป: _${data.duration}_
โ๐ธ๐ฆ๐๐๐ฑ๐ถ๐ผ๐: _${data.studios}_
โ๐ฅณ๐ฃ๐ผ๐ฝ๐๐น๐ฎ๐ฟ๐ถ๐๐: _${data.popularity}_
โ๐ฅท๐ ๐ฒ๐บ๐ฏ๐ฒ๐ฟ๐: _${data.members}_
โ๐๐ฝโ๐ฆ๐ฐ๐ผ๐ฟ๐ฒ๐ฆ๐๐ฎ๐๐: _${data.scoreStats}_
โ๐ซ๐ฆ๐ผ๐๐ฟ๐ฐ๐ฒ: _${data.source}_
โ๐๐ฆ๐๐ป๐ผ๐ป๐๐บ๐: _${data.synonyms}_
โ๐ธ๏ธ๐ฆ๐๐ฎ๐๐๐: _${data.status}_
โ๐ฏ๐๐ฑ: _${data.id}_
โ๐ฅ๐๐ผ๐๐ป๐น๐ผ๐ฎ๐ฑ: _${data.url}_
โโโโโโโโใ`;
        return Mizuki_Buttons.MIB(
          ำสวำษจีผส,
          chat,
          ๐๐๐๐ำ๐,
          AnimeInfos,
          data.picture
        );
      });
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    } catch (โฮฑะฒัััฯั) {
      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      console.log(โฮฑะฒัััฯั);
    }
  },
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
