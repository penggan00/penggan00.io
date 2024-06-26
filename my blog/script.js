document.querySelector('.copy-button').addEventListener('click', function() {
    // 获取代码块元素
    var codeBlock = document.getElementById('code-block').innerText;
    // 创建一个临时的textarea元素
    var tempTextarea = document.createElement('textarea');
    // 将代码块内容赋值给textarea
    tempTextarea.value = codeBlock;
    // 将textarea添加到body
    document.body.appendChild(tempTextarea);
    // 选中textarea中的内容
    tempTextarea.select();
    // 执行复制命令
    document.execCommand('copy');
    // 移除临时的textarea
    document.body.removeChild(tempTextarea);
    // 显示复制成功信息
    alert('代码已复制到剪贴板');
});

// 显示最后修改日期和时间
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleString();

// 设置文章标题
document.getElementById('articleTitle').textContent = "Your Article Title";
