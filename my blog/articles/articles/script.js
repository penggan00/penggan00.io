function copyToClipboard(button) {
    const pre = button.parentElement;
    const code = pre.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = '已复制';
        setTimeout(() => {
            button.textContent = '复制';
        }, 2000);
    }).catch(err => {
        console.log('复制失败', err);
    });
}

// 设置文章标题
document.getElementById('articleTitle').textContent = "Your Article Title";