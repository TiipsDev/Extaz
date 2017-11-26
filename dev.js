'use strict';
const Discord =require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const music = require('./music.js');
const tool = require('./tool.js');
const ms = require("ms");
const dateFormat = require('dateformat');
dateFormat('d$, ddd, mmm, yyyy, h:MM:ss');
const fs = require("fs");
const con = console.log

client.on('message', message => {
    if(message.content === config.prefix + 'ping') {
    message.reply(`Pong ! (${Math.round(client.ping)} ms)`);
    }
    if(message.content === (config.prefix + 'help') || message.content.startsWith(config.prefix + 'h')) {
        .setDescription("Utilise < &help > *ou &h* pour affiché les détails des commandes")
        .addField("⚙ **MODERATION**", "\n&**ban** - Ban un utilisateur, avec ou sans limite de temps.\n&**unban** - Unban un utilisateur.\n&**mute** - Mute un utilisateur, avec ou sans limite de temps.\n&**unmute** - Unmute un utilisateur.\n&**kick** - Kick un utilisateur. ", true)
        .addField("📰 **INFORMATIONS**", "\n&**news** - Affiche les nouvelles commandes disponible du bot.\n&**serverinfo** ou ***si*** - Affiche les informations du serveur.\n&**serverlist** - Affiche la liste des serveurs du bot.\n&**userinfo** ou ***ui*** - Affiche vos informations ou ceux d'un utilisateur.\n&**owner** ou ***createur*** - Affiche le créateur du bot.\n&**stats** - Affiche l'état du bot. ", true)
        .addField("🎲 **FUN**", "\n**&8ball** ou ***&8b*** - Pose une question il te réponds !", true)
        .addField("📝 **UTILE**", "\n&__**afk**__ - Met un status d'AFK qui s'affiche lorsque vous êtes mentionné.\n&**createinvite** - Creation d'un lien d'invitation vers le serveur\n&**yt** - Envoie un lien YouTube selon la recherche.\n&**google** : Envoi votre recherche sous forme de lien a cliquez \n &**invite** ou ***inv*** : Sert a m'invitez sur ton serveurs", false)
        .setTitle(":notes:Commande musical")
        .setDescription("__** ATTENTION PREFIX **commandes font avec $$**m**__")
        .addField("**MUSIC**", "\n__&m__ **play** - Ajoute une musique ou une playlist à la queue.\n__&m__ **np** - Affiche le son actuel.\n__&m__ **join** - Fait rejoindre le bot.\n__&m__ **skip** - Skip la musique.\n__&m__ **leave** - Stop la musique.\n__&m__ **vol `0 à 100`** - Affiche ou modifie le volume. ", true)
    if(message.content === (config.prefix + 'invite') || message.content.startsWith(config.prefix + 'inv')) {
        const embed = new Discord.RichEmbed();
            embed.setTitle("Invitation du bot");
            embed.setAuthor(`${client.user.tag}`, `${client.user.avatarURL}`);
            embed.setColor(0x00AE86);
            embed.setFooter("By Extaz" ,`${client.user.avatarURL}`);
            embed.setThumbnail(`${client.user.avatarURL}`);
            message.channel.send("Voici le lien: \nhttps://discordapp.com/oauth2/authorize?client_id=374329448654176256&scope=bot&permissions=-1")
    }
    if(message.content === config.prefix + "support") {
        message.channel.send("__**Un problème sur le bot? :warning: **__ \n **Contacte : \n<:FlecheVerte:372432690978488325> Reborn#5186 \n<:FlecheVerte:372432690978488325> [ ExTaz™ ]#5040 \n<:FlecheVerte:372432690978488325> Tipskiq#7875 **\n Rejoinds le support ici :arrow_forward: https://www.discord.gg/RNgQ8ds ")
    }
    if(message.content === (config.prefix + 'owner') || message.content.startsWith(config.prefix + 'createur')){
    message.reply('Le créateur du bot est **[ ExTaz™ ]#5040**\nLes deux autres developpeurs sont : **Tipskiq📝#7875** et **Reborn#5186**') 
    }
    if(message.content.startsWith('$$m')){
        music.processCommand(message) }
}


});

    
 });
    
 
    
    client.login(config.token)