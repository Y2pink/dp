function echarts_map() {
    var myChart = echarts.init(document.getElementById('map_1'));
    var guangdong = "js/44.json";

    $.get(guangdong, function (tjJson) {
        // 成功加载的处理代码
        echarts.registerMap('guangdong', tjJson);
        myChart.setOption({
            series: [{
                type: 'map',
                map: 'guangdong'
            }]
        });

        // 其他代码保持不变

        var option = {
            // 这里可以添加你的具体 ECharts 配置项
        };

        myChart.setOption(option);

        // 获取所有 ECharts 容器
        var echartContainers = document.querySelectorAll('.echart-container');
        var allCharts = [];
        echartContainers.forEach(function (container) {
            var chart = echarts.init(container);
            allCharts.push(chart);
        });

        // 添加 resize 事件监听
        window.addEventListener("resize", function () {
            myChart.resize();
            allCharts.forEach(function (chart) {
                chart.resize();
            });
        });
    }).fail(function (error) {
        console.error('JSON 文件加载失败:', error);
    });
}

// 调用函数初始化 ECharts 地图
echarts_map();