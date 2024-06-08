const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347013029177";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_36_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA5MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMixcbiAgICAgICAgMjIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1d2dpeFduQ1JaMTl1S1Z3UzQvSnl4Wm5ub2g2VGc4WTBJVnMzQlRSbG5BPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMODMzdmVNY1J4Q0loRENMS3ZtMUZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhlNzA3NWMyLTE3NmQtNGQwMi05YzNkLWVkYWM1ZGRlZGZlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxODIsXG4gICAgICAxMTYsXG4gICAgICAxMjQsXG4gICAgICA4NixcbiAgICAgIDY2LFxuICAgICAgMjM3LFxuICAgICAgMTkxLFxuICAgICAgMTYsXG4gICAgICAyMTMsXG4gICAgICAxMDQsXG4gICAgICA5LFxuICAgICAgMjUzLFxuICAgICAgMjEwLFxuICAgICAgMTg4LFxuICAgICAgOTAsXG4gICAgICAyOSxcbiAgICAgIDgyLFxuICAgICAgOTAsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMjQwLFxuICAgICAgMjIxLFxuICAgICAgMTkyLFxuICAgICAgOTMsXG4gICAgICAxMzEsXG4gICAgICAyMTQsXG4gICAgICA3MCxcbiAgICAgIDE5MyxcbiAgICAgIDI1MSxcbiAgICAgIDg5LFxuICAgICAgODAsXG4gICAgICA3OSxcbiAgICAgIDEyMSxcbiAgICAgIDUxLFxuICAgICAgMTA0LFxuICAgICAgMTM2LFxuICAgICAgMjI5LFxuICAgICAgMjE0LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjUzOVdQRUwyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEzMDI5MTc3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNTgzOTU3MTc1NTIzNTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t5Ti9ZMEtFTHk4a2JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOTBxdEFqNk4vQ29Lemt1LzhFcnE2Q2ZJZWJBbVREM1d4dXJIUmdNZTdTST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmM2lkaHFoaUFyNVlWOTJESGRvUTBWd0xvSkttMWFYOWtENDdvQnQycm5menBScThyUkxUNFNzTjdLVmZjQVl2TjJ2cUl3a2xGUlZVc0hwQXg2Z3RpQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3VzFjY1NwbXF1Q2lqRzZOUWRsNENjZFN5TDREemlJbkY0Vm0ydVNvaFlEVzcwSnFkV0Z3d3luMnArSzNDaDlWb20wT1RIVFh1dnhocFFjazBjY2hBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEzMDI5MTc3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4NTM3NTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
