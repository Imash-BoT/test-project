// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const Mizuki_Buttons = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _πππ_ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/_πππ_`);
const κ°α΄α΄α΄ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/oShit`);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
module.exports = {
  name: `meme`,
  async handle(ΣΚΗΣΙ¨ΥΌΚ, chat, ππππΣπ, Needs, κ±Ιͺα΄Κα΄α΄, Clock, Ping, Timers) {
    try {
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
      var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
      const defaultnm = ππππΣπ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "πηͺπππΣπβ’ α΄ α΄ΚΙͺκ°Ιͺα΄α΄ κ°ΙͺΚα΄ > " + FinalName.toUpperCase() + "βοΈ"
      );
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      var num = Math.floor(Math.random() * (500 - 1) + 1);
      await ΣΚΗΣΙ¨ΥΌΚ.sendMessage(
        ππππΣπ.chatId,
        { url: `https://ctk-api.herokuapp.com/meme/${num}` },
        MessageType.image,
        {
          quoted: chat,
          mimetype: Mimetype.png && Mimetype.jpeg,
        }
      );
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    } catch (βΞ±Π²ΡΡΡΟΡ) {
      κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
      console.log(βΞ±Π²ΡΡΡΟΡ);
    }
  },
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
