/*CMD
  command: /ban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *Send the user's Telegram ID to ban?*
  keyboard: 
  aliases: 
CMD*/

var idForBan = message;

if (user.telegramid == idForBan) {
  Bot.sendMessage("Error: User is not found!")
  return
}

Bot.blockChat(idForBan)
Bot.sendMessage("Successfully banned: " + idForBan)
