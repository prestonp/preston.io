exports.index = function(req, res){
  res.render('index');
};

exports.work = function(req, res) {
  res.render('work');
}

exports.about = function(req, res) {
  res.render('about');
}
