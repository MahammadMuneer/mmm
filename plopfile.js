const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + " is required";
    }
    return true;
  };
};

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("basics", {
    description: "this is a skeleton plopfile",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of your component?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "plop-templates/component/component.module.scss.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/component/index.ts.hbs",
      },
    ],
  });
};
