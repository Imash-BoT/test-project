try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
  var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
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
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  exports.catch = async (ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat) => {
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    await ӄʀǟӄɨռʐ
      .sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          contentText: `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived},
              
◆ 𝘞𝘦 𝘙𝘢𝘯 𝘐𝘯𝘵𝘰 𝘚𝘰𝘮𝘦 𝘌𝘳𝘳𝘰𝘳 ◆
➤ 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_!`,
          footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
          buttons: [
            {
              buttonId: `${ᴋᴇɪ}help`,
              buttonText: { displayText: `${ᴋᴇɪ}help` },
              type: 1,
            },
          ],
          headerType: 1,
        },
        MessageType.buttonsMessage,
        {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        }
      )
      .then(console.log(ℓαвєяяσя));
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    return await ӄʀǟӄɨռʐ
      .sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.Myself,
        {
          contentText: `⚡Try Command: _${ᴋᴇɪ}${FinalName}_ Again Later!`,
          footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭  \n📅ᴅᴀᴛᴇ: _${Clock}_


Error: ${ℓαвєяяσя}`,
          buttons: [
            {
              buttonId: `${ᴋᴇɪ}bugreport`,
              buttonText: { displayText: `${ᴋᴇɪ}bugreport` },
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
      .then(console.log(ℓαвєяяσя));
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
