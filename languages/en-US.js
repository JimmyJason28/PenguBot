const { Language, util } = require("klasa");

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            // Klasa's Default Sentences.
            DEFAULT: (key) => `${key} has not been localized for en-US yet.`,
            DEFAULT_LANGUAGE: "Default Language",
            SETTING_GATEWAY_EXPECTS_GUILD: "The parameter <Guild> expects either a Guild or a Guild Object.",
            SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `The value ${data} for the key ${key} does not exist.`,
            SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `The value ${data} for the key ${key} already exists.`,
            SETTING_GATEWAY_SPECIFY_VALUE: "You must specify the value to add or filter.",
            SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `The key ${key} is not an Array.`,
            SETTING_GATEWAY_KEY_NOEXT: (key) => `The key ${key} does not exist in the current data schema.`,
            SETTING_GATEWAY_INVALID_TYPE: "The type parameter must be either add or remove.",
            RESOLVER_INVALID_CUSTOM: (name, type) => `${name} must be a valid ${type}.`,
            RESOLVER_INVALID_PIECE: (name, piece) => `${name} must be a valid ${piece} name.`,
            RESOLVER_INVALID_MSG: (name) => `${name} must be a valid message id.`,
            RESOLVER_INVALID_USER: (name) => `${name} must be a mention or valid user id.`,
            RESOLVER_INVALID_MEMBER: (name) => `${name} must be a mention or valid user id.`,
            RESOLVER_INVALID_CHANNEL: (name) => `${name} must be a channel tag or valid channel id.`,
            RESOLVER_INVALID_EMOJI: (name) => `${name} must be a custom emoji tag or valid emoji id.`,
            RESOLVER_INVALID_GUILD: (name) => `${name} must be a valid guild id.`,
            RESOLVER_INVALID_ROLE: (name) => `${name} must be a role mention or role id.`,
            RESOLVER_INVALID_LITERAL: (name) => `Your option did not match the only possibility: ${name}`,
            RESOLVER_INVALID_BOOL: (name) => `${name} must be true or false.`,
            RESOLVER_INVALID_INT: (name) => `${name} must be an integer.`,
            RESOLVER_INVALID_FLOAT: (name) => `${name} must be a valid number.`,
            RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} must follow this regex pattern \`${pattern}\`.`,
            RESOLVER_INVALID_URL: (name) => `${name} must be a valid url.`,
            RESOLVER_INVALID_DATE: (name) => `${name} must be a valid date.`,
            RESOLVER_INVALID_DURATION: (name) => `${name} must be a valid duration string.`,
            RESOLVER_INVALID_TIME: (name) => `${name} must be a valid duration or date string.`,
            RESOLVER_STRING_SUFFIX: " characters",
            RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} must be exactly ${min}${suffix}.`,
            RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} must be between ${min} and ${max}${suffix}.`,
            RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} must be greater than ${min}${suffix}.`,
            RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} must be less than ${max}${suffix}.`,
            REACTIONHANDLER_PROMPT: "Which page would you like to jump to?",
            COMMANDMESSAGE_MISSING: "Missing one or more required arguments after end of input.",
            COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} is a required argument.`,
            COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Missing a required option: (${possibles})`,
            COMMANDMESSAGE_NOMATCH: (possibles) => `Your option didn't match any of the possibilities: (${possibles})`,
            MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | You have **${time}** seconds to respond to this prompt with a valid argument. Type **"ABORT"** to abort this prompt.`, // eslint-disable-line max-len
            MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time) => `${tag} | **${name}** is a repeating argument | You have **${time}** seconds to respond to this prompt with additional valid arguments. Type **"CANCEL"** to cancel this prompt.`, // eslint-disable-line max-len
            MONITOR_COMMAND_HANDLER_ABORTED: "Aborted",
            INHIBITOR_COOLDOWN: (remaining) => `You have just used this command. You can use this command again in ${remaining} second${remaining === 1 ? "" : "s"}.`,
            INHIBITOR_DISABLED: "<:penguError:435712890884849664> ***This command is currently disabled***",
            INHIBITOR_DISABLED_GROUP: "<:penguError:435712890884849664> ***This command group is currently disabled***",
            INHIBITOR_MISSING_BOT_PERMS: (missing) => `Insufficient permissions, missing: **${missing}**`,
            INHIBITOR_NSFW: "You may not use NSFW commands in this channel.",
            INHIBITOR_PERMISSIONS: "You do not have permission to use this command",
            INHIBITOR_REQUIRED_CONFIGS: (configs) => `The guild is missing the **${configs.join(", ")}** guild setting${configs.length !== 1 ? "s" : ""} and thus the command cannot run.`,
            INHIBITOR_RUNIN: (types) => `This command is only available in ${types} channels`,
            INHIBITOR_RUNIN_NONE: (name) => `The ${name} command is not configured to run in any channel.`,
            COMMAND_BLACKLIST_DESCRIPTION: "Blacklists or un-blacklists users and guilds from the bot.",
            COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) => [
                usersAdded.length ? `**Users Added**\n${util.codeBlock("", usersAdded.join(", "))}` : "",
                usersRemoved.length ? `**Users Removed**\n${util.codeBlock("", usersRemoved.join(", "))}` : "",
                guildsAdded.length ? `**Guilds Added**\n${util.codeBlock("", guildsAdded.join(", "))}` : "",
                guildsRemoved.length ? `**Guilds Removed**\n${util.codeBlock("", guildsRemoved.join(", "))}` : ""
            ].filter(val => val !== "").join("\n"),
            COMMAND_EVAL_DESCRIPTION: "Evaluates arbitrary Javascript. Reserved for bot owner.",
            COMMAND_EVAL_EXTENDEDHELP: [
                "The eval command evaluates code as-in, any error thrown from it will be handled.",
                "It also uses the flags feature. Write --silent, --depth=number or --async to customize the output.",
                "The --silent flag will make it output nothing.",
                "The --depth flag accepts a number, for example, --depth=2, to customize util.inspect's depth.",
                "The --async flag will wrap the code into an async function where you can enjoy the use of await, however, if you want to return something, you will need the return keyword",
                "The --showHidden flag will enable the showHidden option in util.inspect.",
                "If the output is too large, it'll send the output as a file, or in the console if the bot does not have the ATTACH_FILES permission."
            ].join("\n"),
            COMMAND_EVAL_ERROR: (time, output, type) => `**Error**:${output}\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_SENDFILE: (time, type) => `Output was too long... sent the result as a file.\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_SENDCONSOLE: (time, type) => `Output was too long... sent the result to console.\n**Type**:${type}\n${time}`,
            COMMAND_UNLOAD: (type, name) => `<:penguSuccess:435712876506775553> Unloaded ${type}: ${name}`,
            COMMAND_UNLOAD_DESCRIPTION: "Unloads the klasa piece.",
            COMMAND_TRANSFER_ERROR: "<:penguError:435712890884849664> That file has been transfered already or never existed.",
            COMMAND_TRANSFER_SUCCESS: (type, name) => `<:penguSuccess:435712876506775553> Successfully transferred ${type}: ${name}`,
            COMMAND_TRANSFER_FAILED: (type, name) => `Transfer of ${type}: ${name} to Client has failed. Please check your Console.`,
            COMMAND_TRANSFER_DESCRIPTION: "Transfers a core piece to its respective folder",
            COMMAND_RELOAD: (type, name) => `<:penguSuccess:435712876506775553> Reloaded ${type}: ${name}`,
            COMMAND_RELOAD_ALL: (type) => `<:penguSuccess:435712876506775553> Reloaded all ${type}.`,
            COMMAND_RELOAD_DESCRIPTION: "Reloads a klasa piece, or all pieces of a klasa store.",
            COMMAND_REBOOT: "Rebooting...",
            COMMAND_REBOOT_DESCRIPTION: "Reboots the bot.",
            COMMAND_LOAD: (time, type, name) => `<:penguSuccess:435712876506775553> Successfully loaded ${type}: ${name}. (Took: ${time})`,
            COMMAND_LOAD_FAIL: "The file does not exist, or an error occurred while loading your file. Please check your console.",
            COMMAND_LOAD_ERROR: (type, name, error) => `<:penguError:435712890884849664> Failed to load ${type}: ${name}. Reason:${util.codeBlock("js", error)}`,
            COMMAND_LOAD_DESCRIPTION: "Load a piece from your bot.",
            COMMAND_PING: "Ping?",
            COMMAND_PING_DESCRIPTION: "Runs a connection test to Discord.",
            COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`,
            COMMAND_INVITE_SELFBOT: "Why would you need an invite link for a selfbot...",
            COMMAND_INVITE: (client) => [
                `**👉 | Invite PenguBot to your Discord Guild:**`,
                `<${client.invite}>`
            ],
            COMMAND_SUPPORT: `**__PenguBot Support Guild__**\n• **Invite Link:** https://discord.gg/u8WYw5r`,
            COMMAND_INVITE_DESCRIPTION: "Displays the join server link of the bot.",
            COMMAND_INFO: [
                "**__PenguBot Information__**",
                "PenguBot is a Multi-Purpose Discord Bot which is filled with features ranging from",
                "Moderation, Fun, Utilities and more. It is developed in NodeJS using many different",
                "technologies such as MongoDB, JavaScript and Linux.",
                "",
                "• **Author:** [AdityaTD#5346](https://www.AdityaTD.me)",
                "",
                "**__General Information__**",
                `• **Version:** ${this.client.config.main.version}`,
                "• **Website:** <https://www.PenguBot.cc>",
                "• **Patreon:** <https://www.Patreon.com/PenguBot>",
                "• **Discord Guild:** <https://discord.gg/6KpTfqR>",
                "• **GitHub:** <https://www.github.com/AdityaTD/PenguBot>",
                "• **Database:** MongoDB"
            ],
            COMMAND_DONATE: [
                "**__Support PenguBot__**",
                "PenguBot runs on multipe servers rented out across the globe and that requires the",
                "rent.If you'd like to support PenguBot and it's financial costs please visit the following:",
                "",
                "• **Patreon:** https://www.patreon.com/PenguBot",
                "• **Crypto Donations:** https://1upcoin.com/donate/adityatd",
                "• **PenguBot's Donation Page:** https://www.PenguBot.cc/donate"
            ],
            COMMAND_INFO_DESCRIPTION: "Provides some information about this bot.",
            COMMAND_HELP_DESCRIPTION: "Display help for a command.",
            COMMAND_HELP_NO_EXTENDED: "No extended help available.",
            COMMAND_HELP_DM: "📥 | The list of commands you have access to has been sent to your DMs.",
            COMMAND_HELP_NODM: "<:penguError:435712890884849664> | You have DMs disabled, I couldn't send you the commands in DMs.",
            COMMAND_HELP_USAGE: (usage) => `usage :: ${usage}`,
            COMMAND_HELP_EXTENDED: "Extended Help ::",
            COMMAND_ENABLE: (type, name) => `+ Successfully enabled ${type}: ${name}`,
            COMMAND_ENABLE_DESCRIPTION: "Re-enables or temporarily enables a command/inhibitor/monitor/finalizer. Default state restored on reboot.",
            COMMAND_DISABLE: (type, name) => `+ Successfully disabled ${type}: ${name}`,
            COMMAND_DISABLE_DESCRIPTION: "Re-disables or temporarily disables a command/inhibitor/monitor/finalizer/event. Default state restored on reboot.",
            COMMAND_DISABLE_WARN: "You probably don't want to disable that, since you wouldn't be able to run any command to enable it again",
            COMMAND_CONF_NOKEY: "You must provide a key",
            COMMAND_CONF_NOVALUE: "You must provide a value",
            COMMAND_CONF_GUARDED: (name) => `${util.toTitleCase(name)} may not be disabled.`,
            COMMAND_CONF_UPDATED: (key, response) => `Successfully updated the key **${key}**: \`${response}\``,
            COMMAND_CONF_KEY_NOT_ARRAY: "This key is not array type. Use the action 'reset' instead.",
            COMMAND_CONF_GET_NOEXT: (key) => `The key **${key}** does not seem to exist.`,
            COMMAND_CONF_GET: (key, value) => `The value for the key **${key}** is: \`${value}\``,
            COMMAND_CONF_RESET: (key, response) => `The key **${key}** has been reset to: \`${response}\``,
            COMMAND_CONF_NOCHANGE: (key) => `The value for **${key}** was already that value.`,
            COMMAND_CONF_SERVER_DESCRIPTION: "Define per-server configuration.",
            COMMAND_CONF_SERVER: (key, list) => `**Server Configuration${key}**\n${list}`,
            COMMAND_CONF_USER_DESCRIPTION: "Define per-user configuration.",
            COMMAND_CONF_USER: (key, list) => `**User Configuration${key}**\n${list}`,
            COMMAND_STATS: (memUsage, uptime, users, servers, channels, klasaVersion, discordVersion, processVersion, msg) => [
                "**__PenguBot Statistics__**",
                "",
                `• **Memory Usage:** ${memUsage} MB`,
                `• **Uptime:** ${uptime}`,
                `• **Users (Shard):** ${users}`,
                `• **Servers/Guilds (Shard):** ${servers}`,
                `• **Channels (Shard):** ${channels}`,
                `• **Discord.js Version:** v${discordVersion}`,
                `• **Node.js Version:** ${processVersion}`,
                this.client.options.shardCount ? `• **Shard:** ${((msg.guild ? msg.guild.shardID : msg.channel.shardID) || this.client.options.shardId) + 1} / ${this.client.options.shardCount}` : ""
            ],
            COMMAND_STATS_DESCRIPTION: "Provides some details about the bot and stats.",
            MESSAGE_PROMPT_TIMEOUT: "The prompt has timed out.",
            COMMAND_UPVOTE: ["**__Vote for PenguBot__**",
                "Want PenguBot to become bigger and be available in more guilds you visit?",
                "Then vote for PenguBot via the link below and also unlock access to",
                "limited features that only upvoters can have access to!",
                "",
                "• **Vote:** https://discordbots.org/bot/PenguBot/vote"],
            COMMAND_TOGGLE_GROUP_DESCRPTION: "Disable/Enable Command Categories.",
            COMMAND_TOGGLE_COMMAND_DESCRPTION: "Disable/Enable Commands in your guild.",
            COMMAND_SUPPORT_DESCRIPTION: "Link to join PenguBot's Support Guild.",

            // Pengu's Sentences
            MESSAGE_PREFIX_SET: "Successfully updated the guild's prefix to:",
            MESSAGE_CURRENT_PREFIX: "Guild's current prefix is:",
            MESSAGE_PENGU: "here you go!",

            // Kick Messages
            MESSAGE_KICKED: "was kicked!",
            MESSAGE_KICK_YOURSELF: "You can not kick yourself!",
            MESSAGE_KICK_PENGU: "Why would you want to kick me?",
            MESSAGE_KICK_CANT: "This user can't be kicked.",

            // Ban Messages
            MESSAGE_BANNED: "was banned!",
            MESSAGE_SOFTBANNED: "was soft banned!",
            MESSAGE_BAN_YOURSELF: "You can not ban yourself!",
            MESSAGE_BAN_PENGU: "Why would you want to ban me?",
            MESSAGE_BAN_CANT: "This user can't be banned!",

            // Make Admin and Mod Messages
            MESSAGE_ADMIN_ADD: "is now a Pengu Admin!",
            MESSAGE_ADMIN_REMOVE: "is no longer a Pengu Admin!",
            MESSAGE_MOD_ADD: "is now a Pengu Moderator!",
            MESSAGE_MOD_REMOVE: "is no longer a Pengu Moderator!",
            MESSAGE_DJ_ADD: "is now a Pengu DJ!",
            MESSAGE_DJ_REMOVE: "is no longer a Pengu DJ!",

            // Mute Command Messages
            MESSAGE_MUTED: "was muted!",
            MESSAGE_UNMUTED: "was un-muted!",

            // Other Mod Commands Messages
            MESSAGE_PRUNE_DELETED: "message(s) were deleted!",

            // Custom Commands Messages
            MESSAGE_CMD_ADDED: "command was added by",
            MESSAGE_CMD_UPDATED: "command was updated by",
            MESSAGE_CMD_REMOVED: "command was removed by",
            MESSAGE_CMD_NOTFOUND: "command was not found!",
            MESSAGE_CMD_EXISTS: "command with this name already exists in Pengu as a default or custom command!",
            MESSAGE_NO_CMDS: "Your guild has no custom commands, ask an admin or above to make one!",
            MESSAGE_COMMAND_CUSTOM_ENABLED: "Custom Commands are now Enabled!",
            MESSAGE_COMMAND_CUSTOM_DISABLED: "Custom Commands are now Disabled!",

            // Welcome & Leave messages
            MESSAGE_WLCM_ENABLED: "Welcome Messages are now Enabeld!",
            MESSAGE_WLCM_DISABLED: "Welcome Messages are now Disabled!",
            MESSAGE_LEAVE_ENABLED: "Leave Messages are now Enabeld!",
            MESSAGE_LEAVE_DISABLED: "Leave Messages are now Disabled!",
            MESSAGE_WELCOME_SET: "Welcome message has now been set!",
            MESSAGE_LEAVE_SET: "Leave message has now been set!",
            MESSAGE_WELCOME_CHANNEL_SET: "Welcome messages channel has now been set!",
            MESSAGE_LEAVE_CHANNEL_SET: "Leave messages channel has now been set!",

            // Autoroles Messages
            MESSAGE_AUTOROLES_ENABLED: "Auto Roles have been enabled in this guild!",
            MESSAGE_AUTOROLES_DISABLED: "Auto Roles have been disabled in this guild!",
            MESSAGE_AUTOROLE_REMOVED: "role was removed from the Auto Roles!",
            MESSAGE_AUTOROLE_ADDED: "role was added in the Auto Roles!",

            // Utilities Messages
            MESSAGE_NEW_REMINDER: "New Reminder has been created with ID:",
            MESSAGE_LINK_SHORTEN: "Here's your Short URL:",
            MESSAGE_AVATAR: "Here's the avatar of",
            MESSAGE_AFK_TRUE: "Set your status to Away From Keyboard!",
            MESSAGE_AFK_FALSE: "Set your status to no longer Aaway From Keyboard!",
            MESSAGE_IS_AFK: "is currently AFK for:",
            MESSAGE_AFK_REMOVED: "was removed from the AFK status!",

            // Pengu's Commands Descriptions
            COMMAND_KICK_DESCRIPTION: "Allows moderators and above to kick users.",
            COMMAND_BAN_DESCRIPTION: "Allows moderators and above to ban users.",
            COMMAND_SOFTBAN_DESCRIPTION: "Allows moderators and above to softban users.",
            COMMAND_MAKE_ADMIN_DESCRIPTION: "Allows guild managers, admins and pengu admins to add new pengu admins.",
            COMMAND_MAKE_MOD_DESCRIPTION: "Allows guild managers, admins and pengu admins to add new pengu mods.",
            COMMAND_MUTE_DESCRIPTION: "Allows Pengu Moderators and above to Mute people.",
            COMMAND_SAY_DESCRIPTION: "Allows Pengu Moderators and above to make Pengu say stuff.",
            COMMAND_ADD_CMD_DESCRIPTION: "Allows Pengu Administrators and above to add custom commands to the guild.",
            COMMAND_TOGGLE_CUSTOM_DESCRIPTION: "Allows Pengu Administrators and above to enable or disable custom commands in the guild.",
            COMMAND_TOGGLE_WELCOME_DESCRPTION: "Allows Pengu Administrators and above to enable or disable welcome messages in the guild.",
            COMMAND_TOGGLE_LEAVE_DESCRPTION: "Allows Pengu Administrators and above to enable or disable welcome messages in the guild.",
            COMMAND_SET_WELCOME_DESCRPTION: "Allows Pengu Administrators and above set welcome messages in the guild.",
            COMMAND_SET_LEAVE_DESCRPTION: "Allows Pengu Administrators and above set leave messages in the guild.",
            COMMAND_CHANNEL_WELCOME_DESCRPTION: "Allows Pengu Administrators and above set welcome messages channel in the guild.",
            COMMAND_CHANNEL_LEAVE_DESCRPTION: "Allows Pengu Administrators and above set leave messages channel in the guild.",
            COMMAND_TOGGLE_ROLES_DESCRPTION: "Allows Pengu Administrators and above to enable or disable Auto Roles.",
            COMMAND_ADD_ROLES_DESCRPTION: "Allows Pengu Administrators and above to add new Auto Roles.",
            COMMAND_REMIND_DESCRIPTION: "Make Pengu remind you things so you don't forget.",
            COMMAND_SHORTEN_DESCRIPTION: "Let Pengu shorten your Long URLs in one simple command.",
            COMMAND_AFK_DESCRIPTION: "Set yourself AFK with a reason so other's know!",
            COMMAND_DEL_CMD_DESCRIPTION: "Allows Pengu Administrators and above to delete a custom command made previously.",
            COMMAND_LIST_CMDS_DESCRIPTION: "List all custom commands made in a guild.",
            COMMAND_TOGGLE_CUSTOM_DESCRPTION: "Allows Pengu Administrators and above to enable or disable custom commands in a guild.",
            COMMAND_MUTE_DESCRPTION: "Allows Pengu Moderators and above to Mute a person in the guild",
            COMMAND_PRUNE_DESCRIPTION: "Allows Pengu Moderators and above to Bulk Delete messages in a guild with filters.",
            COMMAND_MAKE_ADMIN_DESCRPTION: "Allows Administrators and Guild Owners to create new Pengu Admins.",
            COMMAND_MAKE_MODS_DESCRPTION: "Allows Pengu Admins and above to create new Pengu Mods.",
            COMMAND_PREFIX_DESCRIPTION: "Allows Pengu Admins and above to change a guild's prefix for PenguBot.",
            COMMAND_SHARDS_DESCRIPTION: "Check all the detailed shards information of PenguBot.",
            COMMAND_LMGTFY_DESCRIPTION: "Feeling lazy to google something? Let me google it for you.",
            COMMAND_UPVOTE_DESCRIPTION: "Vote for PenguBot on DBL and gain access to limited features in a second.",

            // Fun Commands Descriptions
            COMMAND_CAT_DESCRIPTION: "Cute Cat Photos and Facts with Pengu!",
            COMMAND_CHUCK_DESCRIPTION: "Chuck Norris Jokes just a command away!",
            COMMAND_COMPLIMENT_DESCRIPTION: "Be nice and compliment some people out there with Pengu!",
            COMMAND_COOKIE_DESCRIPTION: "Mouth watering Cookie pictures to make you even more hungry!",
            COMMAND_DADJOKE_DESCRIPTION: "Everyone loves jokes but what about some Dad Jokes?",
            COMMAND_DOG_DESCRIPTION: "Cute Doggo Pictures to make your day!",
            COMMAND_FML_DESCRIPTION: "Things which has made people say FML!",
            COMMAND_HUG_DESCRIPTION: "Someone needs a hug? Why wait, just give it!",
            COMMAND_PENGU_DESCRIPTION: "The Cute OG Pengu Pictures!",
            COMMAND_8BALL_DESCRIPTION: "Ask the magical 8ball your questions!",
            COMMAND_DICE_DESCRIPTION: "Roll a dice and get an outcome with Pengu!",
            COMMAND_INSULT_DESCRIPTION: "Don't be nice and insult a fellow guild member!",
            COMMAND_KISS_DESCRIPTION: "Get naughty and just kiss the person!",
            COMMAND_PUNCH_DESCRIPTION: "Someone's being naughty? Give them a strong punch!",
            COMMAND_COMIC_DESCRIPTION: "The OG Kids would still remember comics, it's for them!",
            COMMAND_FACT_DESCRIPTION: "Educate Yourself with Pengu!",
            COMMAND_RPS_DESCRIPTION: "Ever wanted to compete against Pengu in Rock, Paper, Scissors, the greatest eSport of all time? Now you can!",
            COMMAND_SLOTS_DESCRIPTION: "I don't promote gambling but you can if you want because I can!",
            COMMAND_TRUMP_DESCRIPTION: "Get Trumped by Trump Insults!",
            COMMAND_MOMMA_DESCRIPTION: "Still not tired of Yo Momma jokes? We got more, don't you worry!",
            COMMAND_FOX_DESCRIPTION: "Love foxes? Me too! Here's a picture of a fox.",
            COMMAND_ILLEGAL_DESCRIPTION: "Let's make things illegal by making trump sign the bills for it.",
            COMMAND_MCA_DESCRIPTION: "Generate yourself a Minecraft Achievement image because My Craft...",
            COMMAND_LIO_DESCRIPTION: "Add yours or other people's face on to the cute lio!",
            COMMAND_SLAP_DESCRIPTION: "Who's being naughty? Give them a tight slap!",
            COMMAND_PAT_DESCRIPTION: "Someone did a good job? Give them a pat.",
            COMMAND_CUDDLE_DESCRIPTION: "Cuddle in, it's time to relax, everything's gonna be fine.",
            COMMAND_TICKLE_DESCRIPTION: "Who's being tough on surface? Tickle them and make them laugh!",
            COMMAND_POKE_DESCRIPTION: "Ping someone by poking them!",
            COMMAND_FEED_DESCRIPTION: "Anyone hungry? Feed them some food.",

            // NSFW Commands
            COMMAND_ANAL_DESCRIPTION: "-NOT SAFE FOR WORK- Anal images.",
            COMMAND_BOOBS_DESCRIPTION: "-NOT SAFE FOR WORK- Boobs images.",
            COMMAND_BOOTY_DESCRIPTION: "-NOT SAFE FOR WORK- Booty images.",
            COMMAND_PUSSY_DESCRIPTION: "-NOT SAFE FOR WORK- Pussy images.",
            COMMAND_TEEN_DESCRIPTION: "-NOT SAFE FOR WORK- Teen images.",
            COMMAND_SNAP_DESCRIPTION: "-NOT SAFE FOR WORK- Snapchat Images.",
            COMMAND_AMETEUR_DESCRIPTION: "-NOT SAFE FOR WORK- Ameteur Images.",
            COMMAND_GIFS_DESCRIPTION: "-NOT SAFE FOR WORK- Animated Gifs.",
            COMMAND_GWNSFW_DESCRIPTION: "-NOT SAFE FOR WORK- Gone Wild Images.",
            COMMAND_LESB_DESCRIPTION: "-NOT SAFE FOR WORK- Lesbian Images.",
            COMMAND_MILF_DESCRIPTION: "-NOT SAFE FOR WORK- MILF images.",
            COMMAND_NEKOS_DESCRIPTION: "-NOT SAFE FOR WORK- Nekos Images.",

            // Utilities Commands
            COMMAND_GUILDINFO_DESCRIPTION: "Get brief information about a guild with this command.",
            COMMAND_TWSTATS_DESCRIPTION: "Check Twitch Statistics live on the go.",
            COMMAND_URBAN_DESCRIPTION: "Find meanings of words on Urban Dictionary.",
            COMMAND_USERINFO_DESCRIPTION: "Get brief user information in a single command.",
            COMMAND_WEATHER_DESCRIPTION: "Get weather of your area easily and in a fun way.",
            COMMAND_YTSTATS_DESCRIPTION: "Check YouTube Statistics live on the go.",
            COMMAND_ADBLOCK_DESCRIPTION: "Enable/Disable Auto Deletion of Invite Links. Pengu Mods and above can bypass this.",
            COMMAND_TRANSLATE_DESCRIPTION: "Translate a sentence or message to any selected language.",

            // Profile Commands
            COMMAND_LEVELUP_DESCRIPTION: "Enable/Disable Level Up Announcements of Users in your guild.",
            COMMAND_REP_DESCRIPTION: "Give your valuable rep point to someone to make them feel special.",
            COMMAND_PROFILE_DESCRIPTION: "Check yours or other users fancy profiles!",
            COMMAND_DAILY_DESCRIPTION: "Claim your daily 100 Snowflakes which you can use to buy cosmetics.",
            COMMAND_TITLE_DESCRIPTION: "Set your title which will be visible in your profile.",
            COMMAND_SNOWFLAKES_DESCRIPTION: "Check your Snowflakes or send your Snowflakes to others.",

            // Dev Commands
            COMMAND_EXEC_DESCRIPTION: "-BOT OWNER ONLY-",
            COMMAND_SG_DESCRIPTION: "-BOT OWNER ONLY-",
            COMMAND_TPG_DESCRIPTION: "-BOT OWNER ONLY-",
            COMMAND_DONATE_DESCRIPTION: "Donate to PenguBot and help make something awesome!",

            // Music Commands
            COMMAND_DMSONG_DESCRIPTION: "Make Pengu send you the current song in your DMs.",
            COMMAND_LOOP_DESCRIPTION: "Loop a song so it repeats when it finishes playing.",
            COMMAND_LYRICS_DESCRIPTION: "Get a song's lyrics directly with Pengu.",
            COMMAND_MUSIC_DESCRIPTION: "Detailed information for all Music Commands.",
            COMMAND_NOWPLAYING_DESCRIPTION: "Know which song is currently playing and what is it's progress.",
            COMMAND_PLAY_DESCRIPTION: "Play Songs from YouTube/Twitch/SoundCloud/Mixer/Live Streams, etc. with Pengu.",
            COMMAND_SHUFFLE_DESCRIPTION: "Shuffle songs in the queue to be randomized.",
            COMMAND_QUEUE_DESCRIPTION: "See the current song queue in an interactive manner",
            COMMAND_SKIP_DESCRIPTION: "Skip the current song or call a vote skip if there are more than 3 members in the VC.",
            COMMAND_STOP_DESCRIPTION: "Stop and Clear the queue if you're Pengu-DJ or are the only one listening.",
            COMMAND_MAKE_DJ_DESCRPTION: "Make a user Pengu DJ if you are Pengu Mod or above.",

            // Game Stats
            COMMAND_FORTNITE_DESCRIPTION: "Get Fortnite Game Statistics within Discord."
        };
    }

    async init() {
        await super.init();
    }

};
