// 獲取元素
var button20 = document.querySelector('.meeting-button:nth-of-type(1)');
var button30 = document.querySelector('.meeting-button:nth-of-type(2)');
var button50 = document.querySelector('.meeting-button:nth-of-type(3)');

// 獲取內容元素
var content20 = document.querySelector('.guide-card20');
var content30 = document.querySelector('.guide-card30');
var content50 = document.querySelector('.guide-card50');


// 設置初始化狀態
content20.style.display = 'block';
content30.style.display = 'none';
content50.style.display = 'none';


// 點擊事件
button20.addEventListener('click', function () {
    // 切換狀態
    content20.style.display = 'block';
    content30.style.display = 'none';
    content50.style.display = 'none';

});

button30.addEventListener('click', function () {
    // 切換狀態
    content20.style.display = 'none';
    content30.style.display = 'block';
    content50.style.display = 'none';

});

button50.addEventListener('click', function () {
    // 切換狀態
    content20.style.display = 'none';
    content30.style.display = 'none';
    content50.style.display = 'block';

});
