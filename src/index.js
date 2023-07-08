const {
  Client,
  IntentsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  MessageEmbed
} = require('discord.js');
  
  const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });
  
  client.on('ready', (c) => {
    console.log(`✅✅✅ ${c.user.tag} is ALIIIVE ✅✅✅`);
  });

  client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === '!create') {

      const channel = client.channels.cache.get('1127013319795015680');

      if (channel) {
        const button = new ButtonBuilder()
          .setCustomId('roleee')
          .setLabel('claim me')
          .setStyle(ButtonStyle.Danger);
  
        const row = new ActionRowBuilder().addComponents(button);
  
        try {
          const embed = new MessageEmbed()
            .setTitle('SELF ROLES')
            .setDescription('اظغط على الزر ادناه للحصول على <@&1095366755368583228>');
  
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
      const role = interaction.guild.roles.cache.get('1095366755368583228'); // Replace with your role ID
  
      if (role) {
        try {
          await interaction.member.roles.add(role);
          await interaction.reply({content: '✅ تمت إضافة <@&1095366755368583228> بنجاح!', ephemeral: true });
        } catch (error) {
          console.error('Error adding the role:', error);
        }
      } else {
        console.error('Invalid role ID.');
      }
    }
  });

client.login("MTEyNjY5MTc5ODQ1MDk3MDcyNA.GRmL0W.WuWVe4cI2URX8AC_py_OFAs48m-IFbxzjdPyGY");