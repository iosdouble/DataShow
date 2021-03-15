$(function () {
    var  path = "http://"+window.location.host;
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
        var total = [];
        var data1 = {};
        
        $.ajax({
        	type:'post',
    		async:false,
    		url:path+'/portal/org/villagePeople',
    		dataType:'json',
    		success:function(res){
    			
    			for(var j=0;j<res.data.length;j++){
    				data1 = {
						name:res.data[j].name,
						value : res.data[j].count
    				}
    				total.push(data1);
    			}
    	
    		},
    		error:function(){
    			console.log('fail');
    		}
        })
        for(var i=0;i<total.length;i++){
        	total[0].name = '肃州区';
        }
		
var data = total;

//var data = [
//    {name: '全部', value: 69},
//     {name: '银达镇', value: 69},
//     {name: '果园镇', value: 12},
//     {name: '三墩镇', value: 12},
//     {name: '泉湖镇', value: 12},
//     {name: '西峰镇', value: 14},
//     {name: '西洞镇', value: 15},
//     {name: '总寨镇', value: 16},
//     {name: '铧尖镇', value: 69},
//     {name: '黄泥堡裕固族乡', value: 12},
//     {name: '东洞镇', value: 12},
//     {name: '上坝镇', value: 12},
//     {name: '下河清镇', value: 14},
//     {name: '金佛寺镇', value: 15},
//     {name: '丰乐镇', value: 16},
//     {name: '清水镇', value: 16},
//];
var geoCoordMap = {
    '肃州区':[98.514431,39.751267],
    '银达镇':[98.576409,39.810687],
    '果园镇':[98.487474,39.806783],
    '三墩镇':[98.731518,39.788871],
    '泉湖镇':[98.591513,39.754279],
    '西峰镇':[98.435112,39.733162],
    '西洞镇':[98.459281,39.654312],
    '总寨镇':[98.666601,39.65602],
    '铧尖镇':[98.657341,39.717084],
    '黄泥堡裕固族乡':[98.838694,39.722549],
    '东洞镇':[98.63409,39.551714],
    '上坝镇':[98.712401,39.61286],
    '下河清镇':[98.980462,39.560477],
    '金佛寺镇':[98.780061,39.425903],
    '丰乐镇':[98.897147,39.389238],
    '清水镇':[99.065828,39.365553],
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    //console.log(res)
    return res;
};

option = {
   // backgroundColor: '#404a59',
  /***  title: {
        text: '实时行驶车辆',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },**/
    tooltip : {
        trigger: 'item',
		formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value + '人';
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
    },
    // visualMap: {
    //     type: 'piecewise',
    //     textStyle: {
    //         color: '#fff'
    //     },
    //     pieces: [
    //         // {min: 300, label: '国家级基地', color: '#e3bf4c'},
    //         // {min: 200, max: 300, label: '省级基地', color: '#be4f51'},
    //         {min: 100, max: 200, label: '肃州区政府', color: '#60c2cc'}
    //     ],
    //     color: ['#e3bf4c']
    // },
  
    geo: {
        map: '肃州区',
        label: {
            emphasis: {
                show: true
            }
        },
        roam: false,//禁止其放大缩小
        //视觉比例大小
        zoom: 1.1,
        itemStyle: {
            normal: {
                areaColor: '#4c60ff',
                borderColor: '#002097'
            },
            emphasis: {
                areaColor: '#293fff'
            }
        }
    },
    series : [
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // data: convertData(data.sort(function(a, b) {
            //     return b.value - a.value;
            // }).slice(0, 6)),
            data: convertData(data),
            symbolSize: 10,
            showEffectOn: 'render',
            zlevel: 2,
            // zoom:,
            rippleEffect: {
                period: 2.5, //波纹秒数
                brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果
                scale: 5 //波纹范围
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'top',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: "#f8f80a", //字体和点颜色
                    label: {
                        textStyle: {
                            fontWeight: 'bold', //字体
                            fontSize: 12, //字体大小
                            color: "#ffffff"
                        }
                    },
                },
                emphasis:{
                    label:{
                        show: true
                    }
                }
            },
        }
		
		/**
		,
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 20;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffd800',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,.3)'
                }
            },
            zlevel: 1
        }
		**/
    ]
};

myChart.setOption(option);
		
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})