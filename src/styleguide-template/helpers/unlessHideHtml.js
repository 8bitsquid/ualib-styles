module.exports.register = function(handlebars) {
    handlebars.registerHelper('unlessHideHtml', function(reference, options) {
        var re = /^(1.*|2.*)$/;
        return reference.match(re) !== null ?  options.inverse(this) : options.fn(this);
    });
};