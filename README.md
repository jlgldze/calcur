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

[在线图表中心](https://jlgldze.github.io/calcur/charts/)包含三组图表，数据均截至 2026-10-09：

- [14只ETF B策略](https://jlgldze.github.io/calcur/charts/etf-b.html)
- [9只保障房REIT B策略](https://jlgldze.github.io/calcur/charts/housing-b.html)
- [保障房REIT利差](https://jlgldze.github.io/calcur/charts/housing-spread.html)：7张图

北京时间每个沪深交易日18:30启动本地数据更新，完成出图、校验后发布；休市跳过，失败保留上一版。最近成功数据更新：2026-10-09T18:39:58+08:00。

支持手机布局、适应宽度、2倍及3倍缩放、原图下载；计算器首页保留图表入口。`charts/manifest.json`记录实际数据日期、更新时间、标的、图片大小及SHA-256。

B图采用后复权价格、交易日横轴；灰圈使用未来20个交易日作事后标注。利差图保留六只后复权/10年国债及招商蛇口未复权/30年国债的口径。

