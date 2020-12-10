const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('/help' , { type: 'WATCHING' }); 
});

client.on('message', msg => {
  var lastmsg=msg.content;

  if (msg.content === 'mesco lindo') {
    msg.reply('posí');
  }
  if (msg.content === 'bigu manda') {
    msg.reply('a ver tecnicamente si');
  }
  if (msg.content === 'NeOS ataca!') {
    msg.reply('MAO');
  }
  if (lastmsg.indexOf("/math")==0) {
    var result;
    var operation = lastmsg.slice(6);
    try{
    result = eval(operation);
    }
    catch(err) {
      msg.reply("error lmao");
    }
    msg.reply(result);
  }
  if (lastmsg.indexOf("/help")==0) {
    msg.reply('first help me and i might help u later');
  }

});


client.login(process.env.CLIENT_TOKEN);


const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('uwu');
});
server.listen(3000);