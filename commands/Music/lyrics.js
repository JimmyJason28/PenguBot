const { Command } = require("klasa");
const { MessageEmbed } = require("discord.js");
const lyrics = require("../../utils/lyrics.js");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            runIn: ["text"],
            cooldown: 10,
            aliases: ["songlyrics", "lyric"],
            requiredPermissions: ["USE_EXTERNAL_EMOJIS"],
            description: msg => msg.language.get("COMMAND_LYRICS_DESCRIPTION"),
            extendedHelp: "No extended help available.",
            usage: "<song:string>"
        });
    }

    async run(msg, [song]) {
        const req = await lyrics.request(`search?q=${song}`);
        const lyricdata = req.response.hits[0];
        if (!lyricdata) return msg.reply("The provided song could not be found. Please try again with a different one or contact us at <https://discord.gg/6KpTfqR>.");

        const picture = lyricdata.result.song_art_image_thumbnail_url;
        const extendedsong = lyricdata.result.title_with_featured;
        const artist = lyricdata.result.primary_artist.name;

        const lyricsbody = await lyrics.scrape(lyricdata.result.url);
        if (!lyricsbody) return msg.reply("The provided song's lyrics could not be found. Please try again with a different one or contact us at <https://discord.gg/6KpTfqR>.");

        const embed = new MessageEmbed()
            .setColor("#428bca")
            .setAuthor(`${extendedsong} - ${artist} | Lyrics`, this.client.user.avatarURL, `http://genius.com/${lyricdata.result.path}`)
            .setTimestamp()
            .setFooter("© PenguBot.com")
            .setDescription(lyricsbody.length >= 1900 ? `${lyricsbody.substr(0, 1900)}...` : lyricsbody)
            .setThumbnail(picture);
        return msg.sendEmbed(embed);
    }

};
