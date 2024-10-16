```tasks
sort by status.type

hide created date
hide due date
hide postpone button
hide backlink
hide task count
hide edit button
```

```dataviewjs
// 获取当前文件名
let currentFile = dv.current().file.name;

// 获取出链
let outLinks = dv.current().file.outlinks.map(link => link.path);

// 获取入链
let inLinks = dv.pages()
    .where(p => p.file.outlinks.map(l => l.path).includes(currentFile))
    .file.name;

// 创建Mermaid流程图
let mermaidCode = "graph TD\n";

// 辅助函数：使用Base64编码文件名
function encodeFileName(fileName) {
    return btoa(unescape(encodeURIComponent(fileName))).replace(/=/g, '');
}

// 出链: 从当前笔记到链接笔记的箭头
outLinks.forEach(link => {
    let encodedCurrent = encodeFileName(currentFile);
    let encodedLink = encodeFileName(link);
    mermaidCode += `  ${encodedCurrent}["${currentFile}"] --> ${encodedLink}["${link}"]\n`;
});

// 入链: 从链接笔记到当前笔记的箭头
inLinks.forEach(link => {
    let encodedCurrent = encodeFileName(currentFile);
    let encodedLink = encodeFileName(link);
    mermaidCode += `  ${encodedLink}["${link}"] --> ${encodedCurrent}["${currentFile}"]\n`;
});

// 渲染Mermaid图表
dv.paragraph("```mermaid\n" + mermaidCode + "```");
```

[[2024-10-09|愿你天天开心]]

```dataviewjs
// 获取当前文件名
let currentFile = dv.current().file.name;

// 获取出链
let outLinks = dv.current().file.outlinks.map(link => link.path);

// 获取入链
let inLinks = dv.pages()
    .where(p => p.file.outlinks.map(l => l.path).includes(currentFile))
    .file.name;

// 创建Mermaid流程图
let mermaidCode = "graph TD\n";

// 辅助函数：创建安全的节点ID
function safeNodeId(fileName) {
    return fileName.replace(/[^a-zA-Z0-9]/g, "_");
}

// 出链: 从当前笔记到链接笔记的箭头
outLinks.forEach(link => {
    let safeCurrentId = safeNodeId(currentFile);
    let safeLinkId = safeNodeId(link);
    mermaidCode += `  ${safeCurrentId}["${currentFile}"] --> ${safeLinkId}["${link}"]\n`;
});

// 入链: 从链接笔记到当前笔记的箭头
inLinks.forEach(link => {
    let safeCurrentId = safeNodeId(currentFile);
    let safeLinkId = safeNodeId(link);
    mermaidCode += `  ${safeLinkId}["${link}"] --> ${safeCurrentId}["${currentFile}"]\n`;
});

// 渲染Mermaid图表
dv.paragraph("```mermaid\n" + mermaidCode + "```");

// 创建链接列表
let allLinks = [...new Set([currentFile, ...outLinks, ...inLinks])];
let linkList = "### 相关链接\n";
allLinks.forEach(link => {
    linkList += `- [[${link}]]\n`;
});

dv.paragraph(linkList);
```
![[assets/components/出入链.components]]



```markdown
# 根据优先级排序

## 隐私设置调整
隐藏以下内容：
- 创建日期
- 到期日期
- 推迟按钮
- 返回链接
- 任务计数
- 编辑按钮

## Mermaid 流程图生成代码优化

```dataviewjs
// 获取当前文件名
let currentFile = dv.current().file.name;

// 获取出链
let outLinks = dv.current().file.outlinks.map(link => link.path);

// 获取入链
let inLinks = dv.pages()
    .where(p => p.file.outlinks.map(l => l.path).includes(currentFile))
    .file.name;

// 创建Mermaid流程图
let mermaidCode = "graph TD\n";

// 辅助函数：创建安全的节点ID
function safeNodeId(fileName) {
    return fileName.replace(/[^a-zA-Z0-9]/g, "_");
}

// 出链: 从当前笔记到链接笔记的箭头
outLinks.forEach(link => {
    let safeCurrentId = safeNodeId(currentFile);
    let safeLinkId = safeNodeId(link);
    mermaidCode += `  ${safeCurrentId}["${currentFile}"] --> ${safeLinkId}["${link}"]\n`;
});

// 入链: 从链接笔记到当前笔记的箭头
inLinks.forEach(link => {
    let safeCurrentId = safeNodeId(currentFile);
    let safeLinkId = safeNodeId(link);
    mermaidCode += `  ${safeLinkId}["${link}"] --> ${safeCurrentId}["${currentFile}"]\n`;
});

// 渲染Mermaid图表
dv.paragraph("```mermaid\n" + mermaidCode + "```");

// 创建链接列表
let allLinks = [...new Set([currentFile, ...outLinks, ...inLinks])];
let linkList = "### 相关链接\n";
allLinks.forEach(link => {
    linkList += `- [[${link}]]\n`;
});

dv.paragraph(linkList);
```

## 任务记录更新

- [x] 更新任务记录逻辑 ➕ 2024-10-09 📅 2024-10-09 ✅ 2024-10-09
```
