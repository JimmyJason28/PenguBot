const { Command } = require("klasa");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            runIn: ["text"],
            cooldown: 10,
            aliases: ["loopsong", "repeat"],
            permissionLevel: 0,
            requiredPermissions: ["USE_EXTERNAL_EMOJIS"],
            description: msg => msg.language.get("COMMAND_SKIP_DESCRIPTION"),
            extendedHelp: "No extended help available."
        });
        this.votes = new Map();
    }

    async run(msg) {
        const queue = this.client.queue.get(msg.guild.id);
        const player = this.client.lavalink.get(msg.guild.id);
        if (!msg.member.voiceChannel) return msg.sendMessage("<:penguError:435712890884849664> You're currently not in a voice channel.");
        if (!queue) return msg.sendMessage("<:penguError:435712890884849664> There's currently no music playing!");
        if (!player) return msg.sendMessage("<:penguError:435712890884849664> There's currently no music playing!");
        const threshold = Math.ceil(queue.vc.members.size / 3);
        const force = threshold <= 1 || queue.vc.members.size < threshold || await msg.hasAtLeastPermissionLevel(3);

        if (force) return msg.reply(this.skip(msg.guild, queue));

        const vote = this.votes.get(msg.guild.id);
        if (vote && vote.count >= 1) {
            if (vote.users.some(user => user === msg.author.id)) return msg.reply("<:penguError:435712890884849664> You've already voted to skip this song.");

            vote.count++;
            vote.users.push(msg.author.id);
            if (vote.count >= threshold) return msg.reply(this.skip(msg.guild, queue));

            const time = this.setTimeout(vote);
            const remaining = threshold - vote.count;

            return msg.sendMessage(`${vote.count} vote${vote.count > 1 ? "s" : ""} received so far, ${remaining} more ${remaining > 1 ? "are" : "is"} needed to skip this song. Five more seconds on the :clock1:! The vote will end in ${time} seconds.`); // eslint-disable-line max-len
        } else {
            const newVote = {
                count: 1,
                users: [msg.author.id],
                queue: queue,
                guild: msg.guild.id,
                start: Date.now(),
                timeout: null
            };

            const time = this.setTimeout(newVote);
            this.votes.set(msg.guild.id, newVote);
            const remaining = threshold - 1;

            return msg.sendMessage(`🕐 **Starting a Vote Skip:** ${remaining} more vote${remaining > 1 ? "s are" : " is"} required for this song to be skipped. The vote will end in ${time} seconds.`);
        }
    }

    skip(guild, queue) {
        if (this.votes.has(guild.id)) {
            clearTimeout(this.votes.get(guild.id).timeout);
            this.votes.delete(guild.id);
        }

        const current = queue.songs[0];
        queue.songs.shift();
        const song = queue.songs[0];
        if (!song) {
            setTimeout(async () => {
                await this.client.lavalink.leave(guild.id);
                return this.client.queue.delete(guild.id);
            }, 500);
            return "🎵 | **Music:** Finished playing the current queue. Enjoyed what you heard? Why not support us on Patreon at <https://www.Patreon.com/PenguBot>";
        }

        this.client.lavalink.get(guild.id).play(song.track);
        return `<:penguSuccess:435712876506775553> Skipped: **${current.name}**`;
    }

    setTimeout(vote) {
        const time = vote.start + 15000 - Date.now() + ((vote.count - 1) * 5000);
        clearTimeout(vote.timeout);
        vote.timeout = setTimeout(() => {
            this.votes.delete(vote.guild);
            vote.queue.tc.send("<:penguSuccess:435712876506775553> The vote to skip the current song has ended.");
        }, time);

        return Math.round(time / 1000);
    }

};
