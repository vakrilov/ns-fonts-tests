var frame = require("ui/frame");

exports.navigate = function(args){
  frame.topmost().navigate(args.object.text);
}