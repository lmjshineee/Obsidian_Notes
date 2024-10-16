```javascript

function generateLinkMap(dv, fileName) {

    if (!fileName) {

        fileName = dv.current().file.name;

    }

  

    let page = dv.page(fileName);

    if (!page) {

        dv.paragraph(`错误：未找到文件 "${fileName}"`);

        return;

    }

  

    // 过滤掉图片链接

    function isNotImage(link) {

        return !link.toLowerCase().endsWith('.png') &&

               !link.toLowerCase().endsWith('.jpg') &&

               !link.toLowerCase().endsWith('.jpeg') &&

               !link.toLowerCase().endsWith('.gif') &&

               !link.toLowerCase().endsWith('.svg');

    }

  

    // 获取文件标题（如果没有标题，则使用文件名）

    function getFileTitle(filePath) {

        let page = dv.page(filePath);

        return page ? (page.file.frontmatter.title || page.file.name) : filePath;

    }

  

    let outLinks = page.file.outlinks

        .map(link => link.path)

        .filter(isNotImage);

  

    let inLinks = dv.pages()

        .where(p => p.file.outlinks.map(l => l.path).includes(fileName))

        .file.path;

  

    let mermaidCode = "graph TD\n";

  

    function safeNodeId(name) {

        return name.replace(/[^a-zA-Z0-9]/g, "_");

    }

  

    let currentFileTitle = getFileTitle(fileName);

    mermaidCode += `  ${safeNodeId(fileName)}["${currentFileTitle}"]\n`;

  

    outLinks.forEach(link => {

        let linkTitle = getFileTitle(link);

        mermaidCode += `  ${safeNodeId(fileName)} --> ${safeNodeId(link)}["${linkTitle}"]\n`;

    });

  

    inLinks.forEach(link => {

        let linkTitle = getFileTitle(link);

        mermaidCode += `  ${safeNodeId(link)}["${linkTitle}"] --> ${safeNodeId(fileName)}\n`;

    });

  

    dv.paragraph("```mermaid\n" + mermaidCode + "```");

  

    let allLinks = [...new Set([fileName, ...outLinks, ...inLinks])];

    let linkList = "### 相关链接\n";

    allLinks.forEach(link => {

        linkList += `- [[${link}]]\n`;

    });

  

    dv.paragraph(linkList);

}

````