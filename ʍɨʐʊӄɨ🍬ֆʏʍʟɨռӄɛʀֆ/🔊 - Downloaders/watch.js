// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { ytv } = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/youmaker`);
const cleanRF = require("../../สษจสสำษจ๐ฐ๏ธึษสสษส/cleanRF");
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const request = require(`request`);
const yts = require(`yt-search`);
const axios = require(`axios`);
const vers = require(`../../package.json`);
const fs = require(`fs`);
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `watch`,
  ๐๐ฎ๐ฎ6สึสษ: `*${แดแดษช}watch* <youtube video name>

๐ธ๐๐ฌ๐ข๐ง๐  ๐๐ข๐ง๐ค? _${แดแดษช}ytvideo_
๐๐๐๐๐ซ๐๐ก ๐๐จ๐ฎ๐๐ฎ๐๐? _${แดแดษช}ytsearch_`,
  async handle(ำสวำษจีผส, chat, ๐๐๐๐ำ๐, Needs, ๊ฑษชแดสแดแด, Clock, Ping, Timers) {
    try {
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
      var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
      const defaultnm = ๐๐๐๐ำ๐.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `๐็ช๐๐๐ำ๐โข แด แดสษช๊ฐษชแดแด ๊ฐษชสแด > ` + FinalName.toUpperCase() + `โ๏ธ`
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
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      } else if (๐๐๐๐ำ๐.body.includes("http")) {
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
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      } else {
        const LinkForGroups = await yts(Needs.join(` `));
        const GroupVideos = LinkForGroups.videos.slice(0, 1);
        const filename = `./สษจสสำษจ๐๏ธศถษสึ/${FinalName}_${๊ฑแดษดแดแดสษชแด}_${Date.now()}`;
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        const DVideo = async (url, text = "") => {
          let mime = "";
          var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              mime = res.headers["content-type"];
              request(uri)
                .pipe(fs.createWriteStream(filename))
                .on("close", callback);
            });
          };
          download(url, filename, async function () {
            let media = fs.readFileSync(filename);
            let type = mime.split("/")[0] + "Message";
            if (mime === "image/gif") {
              type = MessageType.video;
              mime = Mimetype.gif;
            }
            if (mime.split("/")[0] === "audio") {
              mime = Mimetype.mp4Audio;
            }
            await ำสวำษจีผส
              .sendMessage(๐๐๐๐ำ๐.chatId, media, type, {
                quoted: chat,
                contextInfo: { mentionedJid: [๊ฑแดษดแดแดสษชแด] },
                mimetype: mime,
                caption: text,
              })
              .then(cleanRF.cleanRF(filename))
              .catch((โฮฑะฒัััฯั) =>
                ๊ฐแดแดแด.catch(
                  `*No Song Found... Try Different Search Terms!*

โโโโโโโค๐๐ง๐ฎ ๐๐ฉ๐๐๐ง ๐พ๐ค๐ข๐ข๐๐ฃ๐๐จ:
โ${แดแดษช}ytsearch (song name)
โ${แดแดษช}ytaudio (song link)
โ${แดแดษช}ytvideo (video link)
โโโโโโโโใ`,
                  ำสวำษจีผส,
                  ๐๐๐๐ำ๐,
                  chat
                )
              );
          });
        };
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        await GroupVideos.forEach(async function (youfound) {
          if (youfound.seconds > "1800") {
            console.log(`
${youfound.videoId}
${youfound.url}
${youfound.title}
${youfound.description}
${youfound.timestamp}
${youfound.duration}
${youfound.ago}
${youfound.views}
${youfound.author.name}
${youfound.thumbnail}`);
            const media = await ำสวำษจีผส.prepareMessage(
              ๐๐๐๐ำ๐.chatId,
              { url: youfound.thumbnail },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
              }
            );
            const buttons = [
              {
                buttonId: `${แดแดษช}list`,
                buttonText: { displayText: `${แดแดษช}list` },
                type: 1,
              },
            ];
            const buttonMessage = {
              contentText: `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived}, ๐ฅ๐๐ข๐๐๐จ
๐ฃ๐น๐ฒ๐ฎ๐๐ฒ ๐๐ต๐ผ๐ผ๐๐ฒ ๐๐ถ๐น๐ฒ ๐ฆ๐บ๐ฎ๐น๐น๐ฒ๐ฟ ๐ง๐ต๐ฒ๐ป ๐ฏ๐ฌ๐บ๐ถ๐ป๐๐๐ฒ๐!

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐ป๐๐ข๐ญ๐ฅ๐โค ${youfound.title}
โโฐ๐๐ฎ๐ซ๐๐ญ๐ข๐จ๐งโค ${youfound.timestamp}
โ๐๐๐๐ฌ๐๐ซ๐ข๐ฉ๐ญ๐ข๐จ๐งโค ${youfound.description}
โ๐๐๐ข๐ง๐คโค ${youfound.url}
โโโโโโโโใ`,
              footerText: `\n(c)๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ \n๐แดแดแดแด: _${Clock}_`,
              buttons: buttons,
              headerType: 4,
              imageMessage: media.message.imageMessage,
            };
            await ำสวำษจีผส
              .sendMessage(
                ๐๐๐๐ำ๐.chatId,
                buttonMessage,
                MessageType.buttonsMessage,
                {
                  quoted: chat,
                  contextInfo: { mentionedJid: [๊ฑแดษดแดแดสษชแด] },
                }
              )
              .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
          } else {
            await ytv(youfound.url)
              .then(async (gotResp) => {
                console.log(youfound.url);
                const { dl_link, thumb, title, filesizeF, filesize } = gotResp;
                console.log(
                  dl_link +
                    "\n" +
                    thumb +
                    "\n" +
                    title +
                    "\n" +
                    filesizeF +
                    "\n" +
                    filesize
                );
                axios
                  .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                  .then(async (a) => {
                    const captionsYtmp4 = `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived},    
๐ฅ๐๐ข๐๐๐จ ๐ฃ๐น๐ฒ๐ฎ๐๐ฒ ๐๐ฎ๐ถ๐ ๐ณ๐ผ๐ฟ ๐๐ต๐ฒ ๐ฑ๐ฒ๐น๐ถ๐๐ฒ๐ฟ๐ ๐ผ๐ณ ๐๐ข๐๐๐จ!

โโโโโโ๐ฅญ๐๐จ๐ฉ๐ข๐: _*${FinalName}*_
โ
โ๐ป๐๐ข๐ญ๐ฅ๐โค ${youfound.title}
โ๐๐๐ข๐๐ฐ๐ฌโค ${youfound.views}
โโฐ๐๐ฎ๐ซ๐๐ญ๐ข๐จ๐งโค ${youfound.timestamp}
โโ๏ธ๐๐ฎ๐ญ๐ก๐จ๐ซโค ${youfound.author.name}
โ๐๐๐๐ฌ๐๐ซ๐ข๐ฉ๐ญ๐ข๐จ๐งโค ${youfound.description}
โ๐๐๐ข๐ง๐คโค ${youfound.url}
โโโโโโโโใ`;
                    DVideo(thumb, captionsYtmp4);
                    DVideo(dl_link);
                  });
              })
              .catch((โฮฑะฒัััฯั) =>
                ๊ฐแดแดแด.catch(
                  `*No Song Found... Try Different Search Terms!*

โโโโโโโค๐๐ง๐ฎ ๐๐ฉ๐๐๐ง ๐พ๐ค๐ข๐ข๐๐ฃ๐๐จ:
โ${แดแดษช}ytsearch (song name)
โ${แดแดษช}ytaudio (song link)
โ${แดแดษช}ytvideo (video link)
โโโโโโโโใ`,
                  ำสวำษจีผส,
                  ๐๐๐๐ำ๐,
                  chat
                )
              );
          }
        });
      }
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    } catch (โฮฑะฒัััฯั) {
      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      console.log(โฮฑะฒัััฯั);
    }
  },
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
