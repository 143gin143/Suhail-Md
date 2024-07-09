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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_17_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNixcbiAgICAgICAgNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDY0LFxuICAgICAgICA4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICA0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg4LFxuICAgICAgICA4LFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6TFFnbGoraGFSL3BTam5KWUg5VkJ4c3hwVlhIUDhlSHFOaFhkd1dVQlFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODE2ODA1MDk3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjI4NEM5MDY0OEU1QUE5OTk2Qjc0MTAwNjgyN0ZBNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTY3MDU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4MTY4MDUwOTcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQTA1MUIyMDNCM0YxNkJFNDI1QjczQzgxNDBBNEE0NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1NjcwNjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOW43NjFwc1dRM091bG8ycDBUeDlIQVwiLFxuICBcInBob25lSWRcIjogXCI5Yzg5ZWMzZi1mMDlkLTRmMzktODE2OS1mNTNkOGQ2NjU3MGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMTAyLFxuICAgICAgMjgsXG4gICAgICAxODUsXG4gICAgICAxNzEsXG4gICAgICAyMzksXG4gICAgICAxMTcsXG4gICAgICA5NixcbiAgICAgIDIxNSxcbiAgICAgIDMyLFxuICAgICAgMSxcbiAgICAgIDg2LFxuICAgICAgMyxcbiAgICAgIDEwNyxcbiAgICAgIDExNSxcbiAgICAgIDQzLFxuICAgICAgNTQsXG4gICAgICA1NixcbiAgICAgIDcyLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDEwOCxcbiAgICAgIDIwNSxcbiAgICAgIDU0LFxuICAgICAgMjUwLFxuICAgICAgMTc2LFxuICAgICAgMjksXG4gICAgICA4NyxcbiAgICAgIDIyLFxuICAgICAgOTUsXG4gICAgICAyMjMsXG4gICAgICA1NCxcbiAgICAgIDkyLFxuICAgICAgMTIxLFxuICAgICAgMjE4LFxuICAgICAgMTMsXG4gICAgICAxNDMsXG4gICAgICA4MSxcbiAgICAgIDE0NCxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUE5LRVlGQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MTY4MDUwOTcyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY3MDgzNTY0MDExNjI0OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVyJ3Mg4p2k77iP4pyoXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWlXL280Q0VJK0t0N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHOXRFQitRM3JhSHlqYTFGYlFrSEttNDA3RjVhK0I5VEJjVTU5djMyeUdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlV1ZHBBZzJEN2wwYmhORXBYOVVvWlZHdE5RYUIvS0t1cDJQdWZMb1FEeElVWXRSc0ZwZ0hUVUM4R0lMakx3ZStLQ05yMmRRTmp1RU9qOEYxYTFNeERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRUbms2UWVnNDlCQ0ptYkJuMnFWZlpOaFpBQzh4cmE3THBOeXZ5emdPTEVkQ3FTNVAxL3c1bTd3RW1rcHc2cDVoRFVTUEZMTGdQLzhRNjFhTlNzMmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODE2ODA1MDk3MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU2NzA1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ0NVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDQ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYzFxMmFQUTdYUE5BVGVVM0ZJdTZSVm05MUYvU0xsSEs5c1FvaXQ3Q0hvND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjgyOTgzMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDU2NzA1ODgwM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
