/*CMD
  command: /bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bonus
  answer: 
  keyboard: 
  aliases: 🎁 daily bonus
CMD*/

function onEnding(time) {
  // can give bonus now
  Bot.sendMessage("You have bonus now: " + bonus + " " + bot.currency)
  user.setBalance(bonus)

  return true // if false - cooldown is not restarted
}

function onWaiting(waitTime) {
  // we have active cooldown
  Bot.sendMessage("Please wait: " + waitTime + " secs")
}

var bonus = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "bonus" // field name
})

if (bonus == null || isNaN(bonus)) {
  Bot.sendMessage(
    "*Oops! Daily Bonus is Unavailable. As it is not set by Admin.*"
  )
  return
}

bonus = parseFloat(bonus);

var cooldownTime = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "bonus_cooldown" // field name
})

Libs.CooldownLib.user.watch({
  name: "BonusCooldown",
  time: parseInt(cooldownTime)*60*60, // cooldown hours in AdminPanel
  onEnding: onEnding,
  onWaiting: onWaiting
})

