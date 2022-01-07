# Big Money bot


## It is an Demo bot repository for BigMoney ( ReferEarnBot by Untoldhacker).
Author repo - Untoldhacker: https://github.com/Untoldhacker-Dev/friendly-octo-fortnight


## Detailed Functions:

Main Menu: 💰 Balance , ⚙️Set wallet , 👫 Referral , 🎁 Daily Bonus , ⛽ Stats

## Function:
 - (💰 Balance ) /balance: View Your Funds
 - (⚙️Set wallet) /setWallet: Set Your withdrawal wallet 
 - (👫 Referral) /referral: Get Your Refer link
 - (🎁 Daily Bonus) /bonus: claim your Dialy bonus (after every 24 hours)
 - (⛽ Stats) /stat: View bot's statistics, users count, total withdrawals

<hr> 

![Main Menu](https://github.com/Untoldhacker-Dev/pictoQue/blob/main/Screenshot_2021-10-16-07-47-03-370.jpeg)

<p> ✏️Admin Panel: Edit- Bonus, Minimum Withdraw, Refer commission, Currency,  Ban, Unban, Add / Remove funds </p>

## Function: 
 - Edit Bonus- Change Daily bonus amount
 - Edit Minimum Withdraw - Change minimum withdrawal amount 
 - Edit Refer Commission - Change refer bonus amount
 - Edit Currency - Change bot's Currency
 - Ban - Ban any bad user by it's telegram id 
 - Unban - Unban any bad user by it's telegram id 
 - Edit bonus cooldown - Change bonus claim time
 - Add / Remove funds - Send funds or Remove funds from an user's balance by it's telegram id.

## How to Login to Admin panel?
run `/setup`, an In-App Admin panel will open, set all the values, also /panel is available then
![Admin Panel](https://github.com/Untoldhacker-Dev/pictoQue/blob/main/Screenshot_2021-11-06-14-40-34-952.jpeg)


## What it is?
This repository can be imported to [Bots.Business](https://bots.business) as a worked chat bot.

[Bots.Business](https://bots.business) - it is probably the first CBPaaS - Chat Bot Platform as a Service.

A CBPaaS is a cloud-based platform that enables developers to create chatbots without needing to build backend infrastructure.

## Create your own bot for Telegram from this Git repo

How to create bot?

1. Create bot with [@BotFather](https://telegram.me/BotFather) and take Secret Token

2. Create bot in App and add Secret Token

3. Add Public Key from App as [Deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) with read access (and write access for bot exporting if you need it)

4. Do import for this git repo

Now you can talk with yours new Telegram Bot

See [more](https://help.bots.business/getting-started)

## Commands - in commands folder

File name - it is command name (Bot it can be rewritten in command description)

Command can have: `name`, `help`, `aliases` (second names), `answer`, `keyboard`, `scnarios` (for simple logic) and other options.

### Command description

It is file header:

    /*CMD
      command: /test
      help: this is help for ccommand
      need_reply: [ true or false here ]
      auto_retry_time: [ time in sec ]
      answer: it is example answer for /test command
      keyboard: button1, button2
      aliases: /test2, /test3
    CMD*/

See [more](https://help.bots.business/commands)

### Command body

It is command code in JavaScript.

Use Bot Java Script for logic in command.

For example:

> Bot.sendMessage(2+2);

See [more](https://help.bots.business/scenarios-and-bjs)

## Libraries - in libs folder

You can store common code in the libs folder. File name - it is library name.

For example code in myLib.js:

    function hello(){ Bot.sendMessage("Hello from lib!") }
    function goodbye(name){ Bot.sendMessage("Goodbye, " + name) }
    publish({
      sayHello: hello,
      sayGoodbyeTo: goodbye
    })

then you can run in any bot's command:

    Libs.myLib.hello()
    Libs.myLib.sayGoodbyeTo("Alice")

See [more](https://help.bots.business/git/library)

## Other bots example

See other bots examples in the [github](https://github.com/bots-business?utf8=✓&tab=repositories&q=&type=public&language=javascript) or in the [Bot Store](https://bots.business/)

## Other help

[Help.bots.business](https://help.bots.business)

## API

See [API](https://api.bots.business/docs#/docs/summary)

![](https://bots.business/images/web-logo.png)

