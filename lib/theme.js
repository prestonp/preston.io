module.exports = function(theme) {
  if (typeof theme !== 'string') throw new Error('theme() expects string');

  return function(req, res, next) {
    res.locals.theme = theme;
    next();
  }
}
