/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "ADMIN_ID" // field name
})

var bonus = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "refer_commision" // field name
})

if (!admin) {
  Bot.sendMessage("Please /setup the bot first.")
  Bot.runCommand("/setup")
}

if (!bonus) {
  Bot.sendMessage(
    "*You won't get any refer commission as admin didn't set it in panel*"
  )
}

function onAttracted(refUser){
  // access to Bonus Res of refUser
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    `*🏧 New Referral You Got: ${bonus} ${bot.currency}*`
  )
  
  let refUserBonus = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  refUserBonus.add(bonus);  // add 100 bonus for friend
}

Libs.ReferralLib.track({
   onAttracted: onAttracted
});

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  Bot.sendMessage("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)

  balance.add(bonus) //Upperline Add
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    `*🏧 New Referral You Got: ${bonus} ${bot.currency}*`
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.track(trackOptions);

var old_user = Bot.getProperty("old_user")

if (!old_user) {
  var totalUsers = Libs.ResourcesLib.anotherChatRes("totalUsers", "global")
  totalUsers.add(1)
  Bot.setProperty("old_user", true)
}

Bot.sendKeyboard(
  "💰 Balance,⚙️Set wallet\n👫 Referral,💲Withdraw\n🎁 Daily Bonus,⛽ Stats",
  "*Welcome!*"
)
