const orm = require('./config/orm.js');

orm.select('party_name', 'parties');

orm.select('client_name', 'clients');

orm.leftJoin(
    ['client_name', 'party_name'],
    'clients',
    'parties',
    'id',
    'client_id'
);
