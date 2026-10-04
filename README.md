# calcur · HTML 计算器

一个单文件的中文网页计算器，使用 HTML、CSS 和原生 JavaScript。界面、样式和计算逻辑都在 [index.html](index.html)，无需后端或构建工具。

## 使用方法

下载或克隆仓库，用浏览器直接打开 `index.html` 即可。

- 支持加、减、乘、除、括号和小数
- 可点击按钮，也可在输入框中直接输入表达式，例如 `(12+3)*4/5`
- 按 Enter 计算，Esc 清空，Backspace 退格
- `Ans` 将上一次计算结果插入表达式
- 输入不支持的字符、格式错误或得到无效结果时会显示提示

## 文件结构

- [index.html](index.html)：完整页面与计算逻辑
- [README.md](README.md)：使用和维护说明

## 维护说明

直接编辑 `index.html`，重新在浏览器中打开即可检查变化。仓库已启用 GitHub Pages；本次整理只补充说明，没有更改页面或部署配置。

计算使用 JavaScript 数值运算，结果显示最多保留 12 位小数。当前没有自动化测试，修改计算逻辑后应检查基础运算、括号、小数、清空、退格和 Ans 行为。

## 趋势图表

[在线图表中心](https://jlgldze.github.io/calcur/charts/)包含三组现有图表：

- [14只ETF B策略](https://jlgldze.github.io/calcur/charts/etf-b.html)：数据截至2026-09-28
- [9只保障房REIT B策略](https://jlgldze.github.io/calcur/charts/housing-b.html)：数据截至2026-09-30
- [保障房REIT利差](https://jlgldze.github.io/calcur/charts/housing-spread.html)：7张图，数据截至2026-09-30

页面保留原图，支持适应宽度、2倍和3倍缩放，以及原图下载。手机和桌面浏览器均可直接访问，无需第三方脚本。原计算器首页也有图表入口。

图表是2026-10-04发布的静态快照，不自动更新行情。`charts/manifest.json`记录组别、标的、数据日期、文件大小及SHA-256。B图灰圈使用未来20个交易日作事后标注；利差图分别保留后复权/未复权价格及10年/30年国债口径，详见页面说明和原图。
