const provider = require('../lib/provider');

const apiUrl = 'http://soundcloud.com/oembed';

const regExp = [
  /(https?:\/\/(soundcloud.com|snd.sc)\/(.*))/i,
  /https?:\/\/.+\.soundcloud\.com\/player\/\?url=(https?%3A\/\/.+\.soundcloud\.com\/tracks\/.+?)&/i,
];

function transform(match) {
  return match[1].replace('%3A//', '://');
}

module.exports = provider.create(apiUrl, regExp, transform);
