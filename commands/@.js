/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Common functions
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

// in command @
// pass more important data to bot and user
function readUserData() {
  if (!user) {
    return
  }

  bot.currency = AdminPanel.getFieldValue({
    panel_name: "AdminInfo", // panel name
    field_name: "currency" // field name 
  })

  user.link = Libs.commonLib.getLinkFor(user);
  user.balance = Libs.ResourcesLib.userRes("balance").value();
  user.wallet = User.getProperty("wallet");

  user.addBalance = function(amount) {
    Libs.ResourcesLib.userRes("balance").add(amount)
  }
}

readUserData();

var Admin = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "ADMIN_ID" // field name
})

// You need to comment this lines for /setup in first time
if((command)&&(command.folder == "Admin" && user.telegramid != Admin)){
  // only admin can run command from Admin Panel's folder
  // any common bjs here for admin
  return
}

