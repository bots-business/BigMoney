/*CMD
  command: withdrawRequest
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

let value = parseFloat(message)

function sendMsgNeedMoreAmount() {
  Bot.sendMessage(
    "_❌ Minimum Withdraw " + minimum_withdraw + " " + bot.currency + "_"
  )
  return
}
function sendMsgLessAmount() {
  Bot.sendMessage(`❌ Maximum Withdraw ${user.balance} ${bot.currency} `)
  return
}
function sendMessageIncorrectAmount() {
  Bot.sendMessage("*Incorrect Amount!\nPlease enter positive numbers only*")
  return
}
function sendWithdrawRequest() {
  Bot.sendMessage(
    ` ✅ Withdrawal Sent Successfully\nIt takes some transaction fee`+
    `\n\n💳 Transaction Details:- \n 💰Amount: ${value} ${bot.currency} ` +
    `\n💼 Wallet:  ${user.wallet} \n\n⏰Wait few hours We Will Check And Pay You ` +
    `\n\n✅ NOTE:❗**\nIf You Do Fake Refer You Will Banned\n\n🌹 Payment Channel : ${channel} `
  )

  user.setBalance(-value)
  Api.sendMessage({
    chat_id: channel,
    text: `🔋 New Withdraw Request 🏦\n\n▪️ Status: Pending` +
      `\n▪️ User: ${user.link} \n▪️ User ID:  ${user.telegramid} ` +
      `\n▪️ Amount: ${message} ${bot.currency} ` +
      ` \n\n💳 Wallet: \n ${user.wallet} \n\n👮🏻‍♂ Bot : @${bot.name}`,
    parse_mode: "Markdown"
  })
  userPayment.add(value)
}

var minimum_withdraw = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "minimum_withdraw" // field name
})

var channel = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "withdraw_channel" // field name
})

if (!options.minimum_withdraw) {
  Bot.sendMessage(
    "Seems You have incorrect Information set In App's Admin panel for *minimum withdraw*!"
  )
  return
}

if (!channel || !channel.startsWith("@")) {
  Bot.sendMessage(
    "Seems You have incorrect Information set In App's Admin panel for *channel*!"
  )
  return
}

var lib = Libs.ReferralLib
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")

if (isNaN(value)) {
  sendMessageIncorrectAmount()
}

if (parseFloat(value) < Math.round(minimum_withdraw)) {
  sendMsgNeedMoreAmount()
}

if (parseFloat(value) > user.balance) {
  sendMsgLessAmount()
}
sendWithdrawRequest()

