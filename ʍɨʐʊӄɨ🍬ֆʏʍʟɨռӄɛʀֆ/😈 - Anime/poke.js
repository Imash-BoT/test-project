// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const Mizuki_Buttons = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/cleanRF");
const ffmpeg = require(`fluent-ffmpeg`);
const _πππ_ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/_πππ_`);
const κ°α΄α΄α΄ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/oShit`);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
const Downloader = require(`nodejs-file-downloader`);
const anime = require(`anime-actions`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var str = scriptName;
var newScpt = str.slice(0, -3).toLowerCase();
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
module.exports = {
  name: newScpt,
  async handle(ΣΚΗΣΙ¨ΥΌΚ, chat, ππππΣπ, Needs, κ±Ιͺα΄Κα΄α΄, Clock, Ping, Timers) {
    try {
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
      var Raw = await anime.poke();
      const defaultnm = ππππΣπ.commandName;
      var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `πηͺπππΣπβ’ α΄ α΄ΚΙͺκ°Ιͺα΄α΄ κ°ΙͺΚα΄ > ` + FinalName.toUpperCase() + `βοΈ`
      );
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      if (!Raw.endsWith(`.gif`) && !Raw.endsWith(`.mp4`)) {
        var Raw = await anime.poke();
        Raw = Raw;
        Κα΄Κα΄α΄κ±α΄ = Raw;
      } else {
        Κα΄Κα΄α΄κ±α΄ = Raw;
      }
      console.log(Κα΄Κα΄α΄κ±α΄);
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      const downloader = await new Downloader({
        url: Κα΄Κα΄α΄κ±α΄,
        directory: `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ`,
        fileName: `${Ping}_${FinalName}.gif`,
        cloneFiles: false,
      });
      try {
        await downloader.download();
      } catch (βΞ±Π²ΡΡΡΟΡ) {
        try {
          return Mizuki_Buttons.MTB(
            ΣΚΗΣΙ¨ΥΌΚ,
            chat,
            ππππΣπ,
            `π£ππ¨π¬π‘π’-ππ¨π¬π‘π’ β’@${κ±α΄Ι΄α΄α΄Κeceived},
        
π€§ππ©π©π¬π’π ππ³πΊ ππ¨π’πͺπ―!
_Server Didn't Send Any Response_`
          );
        } catch (βΞ±Π²ΡΡΡΟΡ) {
          κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
        }
      }
      if (ππππΣπ.isReply) {
        await ffmpeg(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.gif`)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.mp4`)
          .on(`end`, async () => {
            var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
            var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
            var Receiver =
              chat.message.extendedTextMessage.contextInfo.participant;
            var personreceived = Receiver.substring(0, Receiver.length - 15);
            await ΣΚΗΣΙ¨ΥΌΚ
              .sendMessage(
                ππππΣπ.chatId,
                fs.readFileSync(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.mp4`),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄, Receiver] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `(c)ππ’π³π?π€π’πππ¨π­  πα΄α΄α΄α΄: _${Clock}_

ββββββπ₯­ππ¨π©π’π: _*${FinalName}*_
β
βπͺ ππ«π¨π¦: @${κ±α΄Ι΄α΄α΄Κeceived}
βπ ππ¨: @${personreceived}
ββββββββγ`,
                }
              )
              .then(
                cleanRF.cleanRF(
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.mp4`,
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.gif`
                )
              )
              .catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
          });
      } else {
        await ffmpeg(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.gif`)
          .outputOptions([
            `-pix_fmt yuv420p`,
            `-c:v libx264`,
            `-movflags +faststart`,
            `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
          ])
          .save(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.mp4`)
          .on(`end`, async () => {
            await ΣΚΗΣΙ¨ΥΌΚ
              .sendMessage(
                ππππΣπ.chatId,
                fs.readFileSync(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.mp4`),
                MessageType.video,
                {
                  contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄] },
                  quoted: chat,
                  mimetype: `video/gif`,
                  caption: `(c)ππ’π³π?π€π’πππ¨π­  πα΄α΄α΄α΄: _${Clock}_

ββββββπ₯­ππ¨π©π’π: _*${FinalName}*_
β
βπ―ππ‘ππ¦π¬ππ₯π―π: @${κ±α΄Ι΄α΄α΄Κeceived}
ββββββββγ`,
                }
              )
              .then(
                cleanRF.cleanRF(
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.mp4`,
                  `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${Ping}_${FinalName}.gif`
                )
              )
              .catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
          });
      }
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    } catch (βΞ±Π²ΡΡΡΟΡ) {
      κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
      console.log(βΞ±Π²ΡΡΡΟΡ);
    }
  },
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
