module.exports.skippable = require('./skippable');
module.exports.withData = require('./withData');
module.exports.withQuery = require('./withQuery');
module.exports.withResult = require('./withResult');
module.exports.validateSchema = require('./validateSchema');
module.exports.stashRecord = require('./stashRecord');
module.exports.preventChange = require('./preventChange');
module.exports.protect = require('./protect');

module.exports = Object.assign(module.exports, require('./strictQuery'))
