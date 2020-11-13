# test_project

## regulation 分支--测试 git commit 提交规范

### npm i -D 以下包

--@commitlint/cli
--@commitlint/config-conventional
--@vue/cli-plugin-eslint
--babel-eslint
--commitizen
--cz-conventional-changelog
--eslint
--eslint-plugin-vue
--husky
--lint-staged

"config": {
"commitizen": {
"path": "./node_modules/cz-conventional-changelog"
}
},
"husky": {
"hooks": {
"pre-commit": "lint-staged",
"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
}
},

"lint-staged": {
"\*.{js,vue}": [
"eslint --fix",
"git add"
]
},
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"precommit": "lint-staged",
"commit": "git-cz"
},

-大致分为三个部分(使用空行分割): -标题行: 必填, 描述主要修改类型和内容 -主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等 -页脚注释: 放 Breaking Changes 或 Closed Issues
-type: commit 的类型
-feat: 新功能、新特性
-fix: 修改 bug
-perf: 更改代码，以提高性能
-refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
-docs: 文档修改
-style: 代码格式修改, 注意不是 css 修改（例如分号修改）
-test: 测试用例新增、修改
-build: 影响项目构建或依赖项修改
-revert: 恢复上一次提交
-ci: 持续集成相关文件修改
-chore: 其他修改（不在上述类型中的修改）
-release: 发布新版本
-workflow: 工作流相关文件修改
-scope: commit 影响的范围, 比如: route, component, utils, build...
-subject: commit 的概述
-body: commit 具体修改内容, 可以分为多行.
-footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接. -示例
-fix（修复 BUG） -如果修复的这个 BUG 只影响当前修改的文件，可不加范围。如果影响的范围比较大，要加上范围描述。

- -例如这次 BUG 修复影响到全局，可以加个 global。如果影响的是某个目录或某个功能，可以加上该目录的路径，或者对应的功能名称。
- -// 示例 1
  -fix(global):修复 checkbox 不能复选的问题
  -// 示例 2 下面圆括号里的 common 为通用管理的名称
  -fix(common): 修复字体过小的 BUG，将通用管理下所有页面的默认字体大小修改为 14px
  -// 示例 3
  -fix: value.length -> values.length
  -feat（添加新功能或新页面）
  -feat: 添加网站主页静态页面
- -这是一个示例，假设对点检任务静态页面进行了一些描述。
- -这里是备注，可以是放 BUG 链接或者一些重要性的东西。
  -chore（其他修改）
  -chore 的中文翻译为日常事务、例行工作，顾名思义，即不在其他 commit 类型中的修改，都可以用 chore 表示。
- -chore: 将表格中的查看详情改为详情
