const net = require('net');

const server = net.createServer();

const handleConnection = (conn) => {
  let remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
  console.log(`connection from ${remoteAddress}`);

  conn.on('data', (data) => {
    console.log(`incoming data from ${remoteAddress}: ${data}`);
    conn.write(data);
  });

  conn.once('closed', () => {
    console.log(`connection from ${remoteAddress} closed`);
  });

  conn.on('error', (err) => {
    console.log(`there was an error while listening to connection from ${remoteAddress}`);
  });
};

const handleError = (err) => {
  console.log('there was a connection error', error);
};

server.on('connection', handleConnection);

server.on('error', handleError);

server.listen(21030, () => {
  console.log('listening ', server.address())
});
