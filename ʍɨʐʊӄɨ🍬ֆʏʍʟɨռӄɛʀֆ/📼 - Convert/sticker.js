// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../สษจสสำษจ๐ฐ๏ธึษสสษส/cleanRF");
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `sticker`,
  ๐๐ฎ๐ฎ6สึสษ: `*${แดแดษช}sticker* (reply image/gif/video)`,
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
      if (๐๐๐๐ำ๐.isReplyImage) {
        var FILEOBJECT = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var FILEID = chat.message.extendedTextMessage.contextInfo.stanzaId;
        console.log(FILEOBJECT);
        await ำสวำษจีผส
          .downloadAndSaveMediaMessage(FILEOBJECT, `./สษจสสำษจ๐๏ธศถษสึ/${FILEID}`)
          .then(async () => {
            const pathcheck = await fs.existsSync(
              `./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.jpeg`
            );
            if (pathcheck) {
              console.log(`${FILEID}.JPEG`);
              ffmpeg(`./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.jpeg`)
                .outputOptions([`-y`, `-vcodec libwebp`])
                .videoFilters(
                  `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
                  `format=rgba`,
                  `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
                )
                .save(`./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.webp`)
                .on(`end`, async () => {
                  await ำสวำษจีผส
                    .sendMessage(
                      ๐๐๐๐ำ๐.chatId,
                      fs.readFileSync(`./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.webp`),
                      MessageType.sticker,
                      { quoted: chat }
                    )
                    .then(
                      cleanRF.cleanRF(
                        `./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.jpeg`,
                        `./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.webp`
                      )
                    )
                    .catch((โฮฑะฒัััฯั) =>
                      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat)
                    );
                })
                .on(`error`, async (โฮฑะฒัััฯั) => {
                  console.log(โฮฑะฒัััฯั);
                });
              // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
            } else {
              console.log(`${FILEID}.PNG`);
              ffmpeg(`./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.png`)
                .outputOptions([`-y`, `-vcodec libwebp`])
                .videoFilters(
                  `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease`,
                  `format=rgba`,
                  `pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
                )
                .save(`./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.webp`)
                .on(`end`, async () => {
                  await ำสวำษจีผส
                    .sendMessage(
                      ๐๐๐๐ำ๐.chatId,
                      fs.readFileSync(`./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.webp`),
                      MessageType.sticker,
                      { quoted: chat }
                    )
                    .then(
                      cleanRF.cleanRF(
                        `./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.png`,
                        `./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.webp`
                      )
                    )
                    .catch((โฮฑะฒัััฯั) =>
                      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat)
                    );
                })
                .on(`error`, async (โฮฑะฒัััฯั) => {
                  console.log(โฮฑะฒัััฯั);
                });
            }
          });
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      } else if (๐๐๐๐ำ๐.isReplyVideo || ๐๐๐๐ำ๐.isReplyGIF) {
        var VIDEOBJECT = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var VIDEOID = chat.message.extendedTextMessage.contextInfo.stanzaId;
        console.log(VIDEOBJECT);
        await ำสวำษจีผส
          .downloadAndSaveMediaMessage(VIDEOBJECT, `./สษจสสำษจ๐๏ธศถษสึ/${VIDEOID}`)
          .then(async () => {
            ffmpeg(`./สษจสสำษจ๐๏ธศถษสึ/${VIDEOID}.mp4`)
              .duration(8)
              .outputOptions([
                `-y`,
                `-vcodec libwebp`,
                `-lossless 1`,
                `-qscale 1`,
                `-preset default`,
                `-loop 0`,
                `-an`,
                `-vsync 0`,
                `-s 600x600`,
              ])
              .videoFilters(
                `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
              )
              .save(`./สษจสสำษจ๐๏ธศถษสึ/${VIDEOID}.webp`)
              .on(`end`, async () => {
                await ำสวำษจีผส
                  .sendMessage(
                    ๐๐๐๐ำ๐.chatId,
                    fs.readFileSync(`./สษจสสำษจ๐๏ธศถษสึ/${VIDEOID}.webp`),
                    MessageType.sticker,
                    { quoted: chat }
                  )
                  .then(
                    cleanRF.cleanRF(
                      `./สษจสสำษจ๐๏ธศถษสึ/${VIDEOID}.mp4`,
                      `./สษจสสำษจ๐๏ธศถษสึ/${FILEID}.webp`
                    )
                  )
                  .catch((โฮฑะฒัััฯั) =>
                    ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat)
                  );
              })
              .on(`error`, async (โฮฑะฒัััฯั) => {
                console.log(โฮฑะฒัััฯั);
              });
          });
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      } else {
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
      }
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    } catch (โฮฑะฒัััฯั) {
      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      console.log(โฮฑะฒัััฯั);
    }
  },
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
