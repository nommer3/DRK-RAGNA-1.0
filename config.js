//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "mgomajonathan@gmail.com";
global.location = "gabon, Libreville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/241062196950 , https://wa.me/24107164732";
global.sudo = process.env.SUDO || "24107164732";
global.owner = process.env.OWNER_NUMBER || "241062197960";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0R6UkdXRXVZVW9icFErQklDNlpoY3lBK0JwQnlnZERuTjJMSlpjNGhYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjFyK2o5ektWcnRlbnVScm5SQ2x5WnVheXBHM01IWlRnbDVObUUzcmREMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSHpTcVhiQ3loVDZId3JBb2ZOSUYyOCt3NTZMcnErMU1NS2ZDVEpqNG00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2dGt3ZWZ4VTVNVkJUSEdSeWh6VTV1Y3IrR3VsL3dYUTRsK25SMGwwcmxFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCbGhrOXNIMTNEenp2SGZLOTdXUkhiUnF0bDJFWTlFWnBlcGdZeUxNa2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFNko2Y0VzN1NxU1k1ZzZtc2tQWXN4UStiMC81bjBtaDRUM0RJR25PU0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hHUzJ4VHNaQ0t2QVc0ZDN1QkNyQU4wNmRaWHpSNmhWVUhkZm5SMy9Ydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk1rUXNuNStKR0RQM2hsSDNuRkozcEd2SHdNcFNkbmlaanVoUFNQYnBTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNZzVtSDJGTENuV1VFZ3JxYzdiMFpwTnRvVzc1d3c3WkVoN1pIZnV4c0RhOWVFWTRWZGUvM08vWEhYdVNtdG4wU1BBRk5jTWhZZk84Y09Ham1YTmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6InBoZUY5L0YvbUd6bmtxQW1tQ054SWRPWFlnQmxtZmQxK0RjMDJTK3R0WWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InV2TWg2S1F0U2VXV21PQVdtYUNIYVEiLCJwaG9uZUlkIjoiNWIwNmNhYmUtMzI1YS00ZTc4LWI0NmQtM2IyMzAwY2E1OTc4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJQekx1K2lzSzc5cjlGbnZqaERTQyt1bEQrVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtaGIzVWdIUjNHOGJuWXpaeEhQNFNrOFQ1U3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVJGWERZTlMiLCJtZSI6eyJpZCI6IjI0MTAyMTk3OTYwOjgzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8kvCdkbvwnZGs8J2RufCdkbTwnZGw8J2RtfCdkajwnZG78J2RtvCdkbkg8J2Rq/Cdkawg8J2RsyfwnZG28J2RtPCdkanwnZG58J2RrOC8hiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlcxd0lNQkVMVG15NzRHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZXpjQVdBZzZWaTI5NU5xelhwd1ZlYldmREFHYVJiR1VYOWRSb3lHMzczWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK1Fzd2R5TWdFdE5BTHZpcERpQ3l0RUcyU0RqaXZiZHRib2JiYkhucnFHWVJFcjJwNlhobGZqT2lMbEV6enA5NDAvalIxRHIzMjFZbWJESk5oODdqQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjhtTllKaWxsR1ZiNytNT2x2eTA2VnJUaXJETCtjdWg0eHdURS9FRUg1T1hZMlV3bFVQRlRrRGxQZ2NWZnlnYlJDdnBpOEo2dXJFY2QxRDdxRlhnMGhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQxMDIxOTc5NjA6ODNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHMzQUZnSU9sWXR2ZVRhczE2Y0ZYbTFud3dCbWtXeGxGL1hVYU1odCs5MiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTg3ODA4Mn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "✓",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝑫𝑬 𝑳'𝑶𝑴𝑩𝑹𝑬",
  packname: process.env.PACK_NAME || "🌹𝑱𝑶𝑹𝑫𝑨𝑵🌹",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "𝑱𝑶𝑹𝑫𝑨𝑵👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
