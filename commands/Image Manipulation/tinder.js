const { Command } = require("klasa");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            cooldown: 8,
            requiredPermissions: ["ATTACH_FILES", "USE_EXTERNAL_EMOJIS", "EMBED_LINKS"],
            description: msg => msg.language.get("COMMAND_TINDER_DESCRIPTION"),
            extendedHelp: "No extended help available.",
            usage: "<MatchWith:user>"
        });
    }

    async run(msg, [MatchWith]) {
        if (MatchWith.id === msg.author.id) return msg.reply("Can't match you with yourself...");
        const image = await this.client.idiotic.tinderMatch(msg.author.displayAvatarURL({ format: "png", size: 256 }), MatchWith.displayAvatarURL({ format: "png", size: 256 }));
        return msg.channel.sendFile(image);
    }

};
