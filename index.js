const fs = require('fs');
const handlebars = require('handlebars');
const minify = require('html-minifier').minify;

handlebars.registerHelper('displayUrl', function (url) {
    if (!url) {
        return '';
    }

    return String(url).replace(/^https?:\/\//i, '');
});

function render(resume) {
    if (typeof resume !== 'undefined') {
        resume.basics.profiles.forEach(profile => {
            profile.network = profile.network.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        });
    }

    const template = fs.readFileSync(__dirname + '/resume.hbs', 'utf-8');

    const html = handlebars.compile(template)({
        resume: resume
    });

    return minify(html, {
        collapseWhitespace: true,
        minifyCSS: true
    });
}

module.exports = {
	render: render
};
