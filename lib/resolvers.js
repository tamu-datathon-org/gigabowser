const fs = require('fs');
const fm = require('front-matter');
const showdown  = require('showdown'),
      converter = new showdown.Converter();

converter.setFlavor('github');

// get all variables for each page
const pages = require('./pages');

/**
 * Render an EJS template
 * @param pageName      The title of this page
 * @param templateFile  Name of the ejs template to use
 */
exports.renderPage = (pageName, templateFile) => {
    return (req, res) => {
        const newReq = {
            ...req,
            // this access the variables for that page
            ...pages[pageName],
            pageName: pageName
        };
        res.render(templateFile, { req: newReq });
    }
}

/**
 * Render a markdown file using a EJS template
 * @param markdownFilePath  The filename of the markdown post
 * @param templatFile       (default="post.ejs") Name of the ejs template to use
 */
exports.renderPost = (markdownFilePath, templateFile="post") => {
    return (req, res) => {
        fs.readFile(markdownFilePath, (err, data) => {
            if (err) throw err;
            var content = fm(data.toString());
            let html = converter.makeHtml(content.body);
            req.pageName = content.attributes.title;
            req.postTitle = content.attributes.title;
            req.postDate = content.attributes.date;
            req.postAuthor = content.attributes.author;
            req.postShortTitle = content.attributes.short_title;
            if (content.attributes.parent && content.attributes.parent == "Featured Caregivers") {
                req.parentPage = { href: "/featured", pageName: content.attributes.parent };
            } else if(content.attributes.parent && content.attributes.parent == "Blog") {
                req.parentPage = { href: "/blog", pageName: content.attributes.parent };
            } else {
                req.parentPage = { href: "#", pageName: content.attributes.parent };
            }
            if (content.attributes.header_image) 
                req.postHeaderImage = { 
                    imgSrc: content.attributes.header_image.url, 
                    imgAlt: content.attributes.header_image.alt, 
                    imgSubtitle: content.attributes.header_image.subtitle,
                    imgMaxWidth: content.attributes.header_image.width
                };
            req.postContent = html;
            res.render(templateFile, { req });
        })
    }
}