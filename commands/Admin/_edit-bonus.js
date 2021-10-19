/*CMD
  command: /edit-bonus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *Please Enter the amount of Bonus to set.*
  keyboard: 
  aliases: 
CMD*/

let value = message
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)

if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })

  return
} else Bot.setProperty("bonus", message)
Bot.sendMessage("*Daily bonus set to: " + message + "*")

