import builder from 'xmlbuilder';

const xml = builder
  .create('root')
  .ele('xmlbuilder')
  .ele('repo', { type: 'git' }, 'git://github.com/oozcitak/xmlbuilder-js.git')
  .end({ pretty: true });

console.log(xml);
