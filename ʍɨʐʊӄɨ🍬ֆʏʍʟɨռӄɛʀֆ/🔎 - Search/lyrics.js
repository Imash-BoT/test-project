// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Second_Try_Lyrics = require(`songlyrics`).default;
const First_Try_Lyrics = require("genius-lyrics");
const Third_Try_Lyrics = require(`music-lyrics`);
const GeniusClient = new First_Try_Lyrics.Client();
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const vers = require(`../../package.json`);
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `lyrics`,
  ๐๐ฎ๐ฎ6สึสษ: `*${แดแดษช}lyrics* (song name)`,
  async handle(ำสวำษจีผส, chat, ๐๐๐๐ำ๐, Needs, ๊ฑษชแดสแดแด, Clock, Ping, Timers) {
    // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    const Song = `${Needs.join(` `)}`;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    const defaultnm = ๐๐๐๐ำ๐.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    console.log("๐็ช๐๐๐ำ๐โข แด แดสษช๊ฐษชแดแด ๊ฐษชสแด > " + FinalName.toUpperCase() + "โ๏ธ");
    // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    if (Needs.length === 0) {
      var ๐Usage = ๊ฑษชแดสแดแด.get(๐๐๐๐ำ๐.commandName);
      ๐๐ฎ๐ฎสึสษ = ๐Usage.๐๐ฎ๐ฎ6สึสษ === undefined ? `Null` : ๐Usage.๐๐ฎ๐ฎ6สึสษ;
      const ษดแดแดแดแดสษขแดแดแดษดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/ษดแดแดแดแดสษขแดแดแดษดแด`);
      return ษดแดแดแดแดสษขแดแดแดษดแด.ษดแดแดแดแดสษขแดแดแดษดแด(
        ำสวำษจีผส,
        chat,
        ๐๐๐๐ำ๐,
        ๊ฑแดษดแดแดสษชแด,
        ๊ฑแดษดแดแดสeceived,
        ๐๐๐๐ำ๐.commandName,
        ๐๐ฎ๐ฎสึสษ
      );
    }
    // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    try {
      try {
        console.log(`๐Genius-Lyrics๐    โฌก==========================โฌก`);
        const searches = await GeniusClient.songs.search(Song);
        const GeniusSong = searches[0];
        const Geniuslyrics = await GeniusSong.lyrics();
        Mizuki_Buttons.MIB(
          ำสวำษจีผส,
          chat,
          ๐๐๐๐ำ๐,
          `โข๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived},

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐ ๐๐๐ฟ๐ถ๐ฐ๐ ๐๐ผ๐๐ป๐ฑ ๐๐ผ๐ฟ: _${Song}_
โ๐น ๐๐ข๐ญ๐ฅ๐: *${GeniusSong.raw.title}*
โ๐ก ๐๐๐ฟ๐ถ๐ฐ๐ ๐ฆ๐ผ๐๐ฟ๐ฐ๐ฒ: _Genius-Lyrics_
โ๐ ๐๐๐ฟ๐ถ๐ฐ๐ ๐จ๐ฟ๐น: ${GeniusSong.raw.url}
โโโโโโโโใ ๐๐๐๐ฟ๐ถ๐ฐ๐๐
${Geniuslyrics}`,
          GeniusSong.raw.song_art_image_thumbnail_url
        );
      } catch (โฮฑะฒัััฯั) {
        console.log(โฮฑะฒัััฯั);
        try {
          console.log(`๐Music-Lyrics๐    โฌก==========================โฌก`);
          const lyricssong = await Second_Try_Lyrics(Song);
          Mizuki_Buttons.MTB(
            ำสวำษจีผส,
            chat,
            ๐๐๐๐ำ๐,
            `โข๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived},

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐ ๐๐๐ฟ๐ถ๐ฐ๐ ๐๐ผ๐๐ป๐ฑ ๐๐ผ๐ฟ: _${Song}_
โ๐ก ๐๐๐ฟ๐ถ๐ฐ๐ ๐ฆ๐ผ๐๐ฟ๐ฐ๐ฒ: ${lyricssong.source.name}
โ๐ ๐๐๐ฟ๐ถ๐ฐ๐ ๐จ๐ฟ๐น: ${lyricssong.source.link}
โโโโโโโโใ ๐๐๐๐ฟ๐ถ๐ฐ๐๐
${lyricssong.lyrics}`
          );
        } catch (โฮฑะฒัััฯั) {
          console.log(โฮฑะฒัััฯั);
          try {
          } catch (โฮฑะฒัััฯั) {
            console.log(โฮฑะฒัััฯั);
            console.log(`๐Song-Lyrics๐    โฌก==========================โฌก`);
            const lyric = await Third_Try_Lyrics.search(Song);
            Mizuki_Buttons.MTB(
              ำสวำษจีผส,
              chat,
              ๐๐๐๐ำ๐,
              `โข๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived},

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐ ๐๐๐ฟ๐ถ๐ฐ๐ ๐๐ผ๐๐ป๐ฑ ๐๐ผ๐ฟ: _${Song}_
โโโโโโโโใ ๐๐๐๐ฟ๐ถ๐ฐ๐๐
${lyric}`
            );
          }
        }
      }
    } catch (โฮฑะฒัััฯั) {
      try {
        return Mizuki_Buttons.MTB(
          ำสวำษจีผส,
          chat,
          ๐๐๐๐ำ๐,
          `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived},

๐คง๐๐ฉ๐ฉ๐ฌ๐ข๐ ๐๐ณ๐บ ๐๐จ๐ข๐ช๐ฏ!
_No Such Song Lyrics Found_`
        );
      } catch (โฮฑะฒัััฯั) {
        ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      }
    }
    // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
  },
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
