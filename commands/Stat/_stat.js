/*CMD
  command: /stat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Stat
  answer: 
  keyboard: 
  aliases: ⛽ stats
CMD*/

var totalUsers = Libs.ResourcesLib.anotherChatRes("totalUsers", "global").value()

var totalPayment = Libs.ResourcesLib.anotherChatRes(
  "totalPayment",
  "global"
).value()

Bot.sendMessage(
  "*👥Total Users: " +
  totalUsers +
  "\n🏦Total Withdrawals: " +
  totalPayment +
  " " +
  bot.currency +
  "*"
)
