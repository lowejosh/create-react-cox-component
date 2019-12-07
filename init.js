const fs = require("fs");
const componentName = process.argv[2];

// file suffix : template file
const inputs = {
  index: "template.index",
  types: "template.types",
  actions: "template.actions",
  reducer: "template.reducer",
  context: "template.context",
  styles: "template.styles"
};

Object.entries(inputs).forEach(([name, file]) => {
  const content = fs
    .readFileSync(file, "utf8")
    .replace(/COMPONENT_NAME/g, componentName);
  const suffix = name === "component" ? "tsx" : "ts";

  fs.writeFile(
    name === "index" ? "index.ts" : `${componentName}.${name}.${suffix}`,
    content,
    err => {
      return err
        ? console.log(err)
        : console.log(
            `successfully created ${componentName}.${name}.${suffix}`
          );
    }
  );
});
