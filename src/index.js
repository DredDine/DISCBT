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
const TOKEN = "MTEyNjY5MTc5ODQ1MDk3MDcyNA.GRmL0W.WuWVe4cI2URX8AC_py_OFAs48m-IFbxzjdPyGY";
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
          .setLabel('Claim me')
          .setStyle(ButtonStyle.Danger);
  
        const row = new ActionRowBuilder().addComponents(button);
  
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
      const role = interaction.guild.roles.cache.get(ROLE); // Replace with your role ID
  
      if (role) {
        try {
          await interaction.member.roles.add(role);
          await interaction.reply({content: `✅ تمت إضافة <@&${ROLE}> بنجاح!`, ephemeral: true });
        } catch (error) {
          console.error('Error adding the role:', error);
        }
      } else {
        console.error('Invalid role ID.');
      }
    }
  });

client.login(TOKEN);