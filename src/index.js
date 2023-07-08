const {
  Client,
  IntentsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');
  
  const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });


// configs
const TOKEN = "MTEyNjY5MTc5ODQ1MDk3MDcyNA.GelI_u.JKBzl3vuJ1q9Ympg0wqxhyqn41bPHRiQbLwQfE";
const ROLE = '1095366755368583228';
const CHANNEL = '1127013319795015680';

  
  client.on('ready', (c) => {
    console.log(`✅✅✅ ${c.user.tag} is ALIIIVE ✅✅✅`);
  });

  client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === '!create') {

      const channel = client.channels.cache.get(CHANNEL);

      if (channel) {
        const button = new ButtonBuilder()
          .setCustomId('roleee')
          .setLabel('STAFF')
          .setStyle(ButtonStyle.Primary);
        const button1 = new ButtonBuilder()
          .setCustomId('roleee2')
          .setLabel('MOD')
          .setStyle(ButtonStyle.Danger);
        const button2 = new ButtonBuilder()
          .setCustomId('roleee3')
          .setLabel('dad')
          .setStyle(ButtonStyle.Secondary);
        const button3 = new ButtonBuilder()
          .setCustomId('roleee4')
          .setLabel('fsg')
          .setStyle(ButtonStyle.Danger);
        const button4 = new ButtonBuilder()
          .setCustomId('roleee5')
          .setLabel('dhd')
          .setStyle(ButtonStyle.Danger);
  
        const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
  
        try {
          const embed = new EmbedBuilder()
            .setTitle('SELF ROLES')
            .setDescription(`اظغط على الزر ادناه للحصول على <@&${ROLE}>`);
  
            await channel.send({
              embeds: [embed],
              components: [row],
            });

          console.log('msg sent!');

        } catch (error) {
          console.error('Error sending msg:', error);
        }
      } else {
        console.error('Invalid channel');
      }
    }
  });

  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'roleee') {
      const role = interaction.guild.roles.cache.get(ROLE);
  
      if (role) {
        if (interaction.member.roles.cache.has(ROLE)) { // check if the memeber have this role or not
        await interaction.member.roles.remove(ROLE); // remove it
        await interaction.reply({content: `✅ تمت ازالة <@&${ROLE}> بنجاح!`, ephemeral: true });
      } else {
        await interaction.member.roles.add(ROLE);
        await interaction.reply({content: `✅ تمت إضافة <@&${ROLE}> بنجاح!`, ephemeral: true });
      }
      } else {
        console.error('Invalid role ID.');
      }
    }
  });

client.login(TOKEN);