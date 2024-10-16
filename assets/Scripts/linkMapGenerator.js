class LinkMapGenerator {
    constructor(dv) {
        this.dv = dv;
    }

    generate(fileName = null) {
        if (fileName === null) {
            fileName = this.dv.current().file.name;
        }

        let page = this.dv.page(fileName);
        if (!page) {
            this.dv.paragraph(`错误：未找到文件 "${fileName}"`);
            return;
        }

        let outLinks = page.file.outlinks.map(link => link.path);
        let inLinks = this.dv.pages()
            .where(p => p.file.outlinks.map(l => l.path).includes(fileName))
            .file.name;

        let mermaidCode = this.generateMermaidCode(fileName, outLinks, inLinks);
        this.dv.paragraph("```mermaid\n" + mermaidCode + "```");

        let linkList = this.generateLinkList(fileName, outLinks, inLinks);
        this.dv.paragraph(linkList);
    }

    generateMermaidCode(fileName, outLinks, inLinks) {
        let mermaidCode = "graph TD\n";

        outLinks.forEach(link => {
            mermaidCode += `  ${this.safeNodeId(fileName)}["${fileName}"] --> ${this.safeNodeId(link)}["${link}"]\n`;
        });

        inLinks.forEach(link => {
            mermaidCode += `  ${this.safeNodeId(link)}["${link}"] --> ${this.safeNodeId(fileName)}["${fileName}"]\n`;
        });

        return mermaidCode;
    }

    generateLinkList(fileName, outLinks, inLinks) {
        let allLinks = [...new Set([fileName, ...outLinks, ...inLinks])];
        let linkList = "### 相关链接\n";
        allLinks.forEach(link => {
            linkList += `- [[${link}]]\n`;
        });
        return linkList;
    }

    safeNodeId(name) {
        return name.replace(/[^a-zA-Z0-9]/g, "_");
    }
}

module.exports = LinkMapGenerator;