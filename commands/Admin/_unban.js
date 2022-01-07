/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *Send The User's Telegram ID to Unban*
  keyboard: 
  aliases: 
CMD*/

var idForUnBan = message;

if (user.telegramid == idForUnBan) {
  Bot.sendMessage("Error: 404, User is not found!")
  return
}

Bot.unblockChat(idForUnBan)
Bot.sendMessage("Successfully unbanned: " + idForUnBan)
