const fs = require("fs");
const fm = require("front-matter");
const showdown = require("showdown"),
  converter = new showdown.Converter();

converter.setFlavor("github");

// get all variables for each page
const pages = require("./pages");

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
      pageName
    };
    res.render(templateFile, {
      req: newReq
    });
  };
};

/**
 * Render a markdown file using a EJS template
 * @param markdownFilePath  The filename of the markdown post
 * @param templateFile       (default="post.ejs") Name of the ejs template to use
 */
exports.renderPost = (markdownFilePath, templateFile = "post") => {
  return (req, res) => {
    fs.readFile(markdownFilePath, (err, data) => {
      if (err)
        throw err;
      var content = fm(data.toString());
      let html = converter.makeHtml(content.body);
      const props = {
        ...content.attributes
      };
      /**
       * Props has to have a title (for the title tag) and a path string (ex "/events")
       */
      if (!props["title"] || !props["path"])
        throw new Error("Invalid Post Markdown (missing YAML params)");
      req.postContent = html;
      res.render(templateFile, {
        req,
        html,
        props
      });
    });
  };
};