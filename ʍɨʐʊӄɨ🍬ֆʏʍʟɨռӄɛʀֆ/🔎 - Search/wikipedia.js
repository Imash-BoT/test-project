// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../สษจสสำษจ๐ฐ๏ธึษสสษส/cleanRF");
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const vers = require(`../../package.json`);
let cheerio = require("cheerio");
let axios = require("axios");
const fs = require(`fs`);
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `wikipedia`,
  ๐๐ฎ๐ฎ6สึสษ: `*${แดแดษช}wikipedia* (text)`,
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
      async function wikipedia(querry) {
        try {
          const link = await axios.get(
            `https://en.wikipedia.org/wiki/${querry}`
          );
          const $ = cheerio.load(link.data);
          let title = $("#firstHeading").text().trim();
          let thumb =
            $("#mw-content-text")
              .find(
                "div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img"
              )
              .attr("src") || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
          let contents = [];
          $("#mw-content-text > div.mw-parser-output").each(function (
            rayy,
            Ra
          ) {
            let explanation = $(Ra).find("p").text().trim();
            contents.push(explanation);
          });
          for (let i of contents) {
            const data = {
              status: link.status,
              result: {
                title: title,
                thumb: "https:" + thumb,
                contents: i,
              },
            };
            return data;
          }
        } catch (err) {
          var notFond = {
            status: link.status,
            Pesan: err,
          };
          return notFond;
        }
      }
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      wikipedia(Needs.join(` `))
        .then((res) => {
          if (res.result.thumb.endsWith(`not-found.png`)) {
            var thumbs = `./สษจสสำษจโฃ๏ธฦึสษ/Mizuki_Wikipedia.png`;
          } else {
            var thumbs = res.result.thumb;
          }
          try {
            return Mizuki_Buttons.MIB(
              ำสวำษจีผส,
              chat,
              ๐๐๐๐ำ๐,
              `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived},
              
โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐ฅช ๐๐ข๐ญ๐ฅ๐: ${res.result.title}
โโ๐ ๐๐ข๐ค๐ขโค ${res.result.contents.trim()}`,
              thumbs
            );
          } catch (โฮฑะฒัััฯั) {
            ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
          }
          console.log(res.result.thumb);
        })
        .catch(() => {
          try {
            return Mizuki_Buttons.MTB(
              ำสวำษจีผส,
              chat,
              ๐๐๐๐ำ๐,
              `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived},

๐คง๐๐ฉ๐ฉ๐ฌ๐ข๐ ๐๐ณ๐บ ๐๐จ๐ข๐ช๐ฏ!
*Nothing found for: _${Needs.join(` `)}_*`
            );
          } catch (โฮฑะฒัััฯั) {
            ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
          }
        });

      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    } catch (โฮฑะฒัััฯั) {
      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      console.log(โฮฑะฒัััฯั);
    }
  },
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
