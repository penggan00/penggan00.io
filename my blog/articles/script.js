function copyToClipboard(button) {
    const pre = button.parentElement;
    const code = pre.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = '已复制';
        setTimeout(() => {
            button.textContent = '一键复制';
        }, 2000);
    }).catch(err => {
        console.log('复制失败', err);
    });
}

// 显示最后修改日期和时间
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleString();

// 设置文章标题
document.getElementById('articleTitle').textContent = "Your Article Title";
