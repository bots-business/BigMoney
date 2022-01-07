/*CMD
  command: /panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var keyboard = [
  [
    { title: "⚠️ Ban", command: "/ban" },
    { title: "⚠️ Unban", command: "/unban" }
  ],
  [{ title: "Add/Remove Funds", command: "/send-funds" }]
]

Bot.sendInlineKeyboard(
  keyboard,
  "*Welcome. Admin!\nYou can run /setup to edit other values such as: Minimum Withdrawal, Refer commission, Daily bonus amount, Currency Name.*"
)
