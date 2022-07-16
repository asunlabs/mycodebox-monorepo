# Learning Prettier essentials

Note that VS code extension settings can be done in

- User
- Workspace

and the Workspace setting overrides the User one. When set it in workspace, VS code automatically creates a .vscode directory with settings.json file included.

1. Install prettier extension in VS code.
1. Set it as a default formatter.
1. Enable format on save.
1. Check automatic format changes by Prettier.

## Configuration

Prettier options can be customized through .prettierrc.json file in project root. Options are availiabe at [Configuring Prettier](https://prettier.io/docs/en/options.html)

```json
{
  "semi": false, // no semicolon at the end
  "singleQuote": false // 'no single quote for string'
}
```

## Reference

- [How to use Prettier in VS Code - Code Formatting](https://youtu.be/__eiQumLOEo)
