/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Note!
// Please change @ command before setup

var isInstalled = AdminPanel.getPanel("Admin Information").fields

if (isInstalled) {
  // you need to remove this if you want run setup again
  return
}

var panel = {
  // Panel title
  title: "Several Panels",
  description: "Please fill here your admin-related information",
  // order index
  index: 0,
  icon: "lock",
  // save button title - default "SAVE"
  button_title: "SAVE",
  // command called on saving
  // not necessary
  /* on_saving:{
     command: "/on-saving",
     // if you need user
     user_id: user_id // Get it via Bot.sendMessage(user.id)
  },
  */

  // Fields for this Panel
  // here 1 field only
  fields: [
    {
      name: "ADMIN_ID",
      title: "Admin ID",
      description:
        "you can get your admin_id with BJS Bot.sendMessage(user.id)",
      type: "string",
      placeholder: "your admin id"
      // value: 100,   // default value
      // hidden: true  // if you need hidden field. By default - false
    },
    {
      name: "withdraw_channel",
      title: "Withdrawal Channel Username",
      description:
        "Set your payment channel username, make sure the bot is admin there with posting permissions.",
      type: "string",
      placeholder: "@ChannelUsername"
      // value: 100,   // default value
      // hidden: true  // if you need hidden field. By default - false
    },
    {
      name: "minimum_withdraw",
      title: "Minimum Withdrawal Settings",
      description: "Set your Minimum Withdraw Amount",
      type: "integer",
      placeholder: "Integer only!"
      // value: 100,   // default value
      // hidden: true  // if you need hidden field. By default - false
    },
    {
      name: "bonus",
      title: "bonus amount",
      description: "Set your Daily bonus amount",
      type: "integer",
      placeholder: "Integer only!"
      // value: 100,   // default value
      // hidden: true  // if you need hidden field. By default - false
    },
    {
      name: "bonus_cooldown",
      title: "Daily Bonus Time",
      description:
        "Set your Daily bonus Time in hours, users will wait for next x hours after receiving a bonus already, ",
      type: "integer",
      placeholder: "Bonus Time Limit: Hours",
      value: 24 // default value
      // hidden: true  // if you need hidden field. By default - false
    },
    {
      name: "refer_commision",
      title: "Referral Bonus",
      description: "Set your Referral Bonus here",
      type: "integer",
      placeholder: "Integer Only!"
      // value: 100,   // default value
      // hidden: true  // if you need hidden field. By default - false
    },
    {
      name: "currency",
      title: "Currency Name",
      description: "Set your Currency name",
      type: "string",
      placeholder: "USD, BTC, INR, etc."
      // value: 100,   // default value
      // hidden: true  // if you need hidden field. By default - false
    }

    // another fields here
    // if needed
    // ...
  ]
}

AdminPanel.setPanel({
  panel_name: "AdminInfo",
  data: panel
  // force: true // default false - save fields values
})
Bot.sendMessage(
  "*Admin Panel created in app, Please fill the required information.*"
)
