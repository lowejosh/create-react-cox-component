const fs = require("fs-extra");
const getComponentTemplate = require("./templates/template.component");
const getActionsTemplate = require("./templates/template.actions");
const getContextTemplate = require("./templates/template.context");
const getIndexTemplate = require("./templates/template.index");
const getReducerTemplate = require("./templates/template.reducer");
const getStylesTemplate = require("./templates/template.styles");
const getTypesTemplate = require("./templates/template.types");
const getHooksTemplate = require("./templates/template.hooks");

const init = path => {
  let componentName = path;
  let folder = "";

  // if a folder path is specified
  if (path.includes("/")) {
    componentName = path.substr(path.lastIndexOf("/") + 1, path.length);
    folder = path.substr(0, path.lastIndexOf("/"));
    fs.ensureDirSync(`./${folder}`);
  }

  // file suffix : content
  const inputs = {
    index: getIndexTemplate(componentName),
    component: getComponentTemplate(componentName),
    types: getTypesTemplate(componentName),
    actions: getActionsTemplate(),
    reducer: getReducerTemplate(componentName),
    context: getContextTemplate(componentName),
    hooks: getHooksTemplate(componentName),
    styles: getStylesTemplate(componentName)
  };

  // read/write files
  Object.entries(inputs).forEach(([name, content]) => {
    const suffix = name === "component" ? "tsx" : "ts";
    fs.writeFile(
      name === "index"
        ? folder.length
          ? `${folder}/index.ts`
          : "index.ts"
        : `${path}${name !== "component" ? `.${name}` : ""}.${suffix}`,
      content,
      err => {
        return err
          ? console.log(err)
          : console.log(
              name === "index"
                ? `successfully created ${folder}/index.ts`
                : `successfully created ${path}${
                    name !== "component" ? `.${name}` : ""
                  }.${suffix}`
            );
      }
    );
  });
};

module.exports = init;
