/*CMD
  command: /referral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Referral
  answer: 
  keyboard: 
  aliases: 👫 referral
CMD*/

var commission = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "refer_commision" // field name
})

if (!commission) {
  Bot.sendMessage("*Oops! Refer commission isn't setupped by admin!*")
  return
}

let lib = Libs.ReferralLib;

Bot.sendMessage(
  " Users\n\n⛔ Per Referral " +
  commission +
  " " +
  bot.currency +
  "!\n\n🔗 Referral Link ⬇️\n" +
  lib.getLink()
)
