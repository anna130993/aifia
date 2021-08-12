let dbURI;

switch (process.env.NODE_ENV) {
  case 'production':
    dbURI = `mongodb+srv://anna130993:${process.env.dbpass}@cluster0.jq4ob.mongodb.net/aifia?retryWrites=true&w=majority`;
    break;
  default:
    dbURI = 'mongodb://localhost:27017/aifia';
}

module.exports = {dbURI};
