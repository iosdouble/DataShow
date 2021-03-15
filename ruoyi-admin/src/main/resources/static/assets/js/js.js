
$(function () {
    var  path = "http://"+window.location.host;
echarts_1();
echarts_2();
echarts_3();
echarts_4();
echarts_5();
echarts_6();

// echarts_31();
// echarts_32();
// echarts_33();

// 村干部分布情况
function echarts_1() {
	
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('echart1'));
	
	
	myChart.setOption({
//		option = {
				  //  backgroundColor: '#00265f',
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    grid: {
				        left: '0%',
						top:'10px',
				        right: '0%',
				        bottom: '4%',
				       containLabel: true
				    },
				    xAxis: [{
				        type: 'category',
//				        data: ['银达', '果园', '三墩', '泉湖', '西峰', '西洞', '总寨', '铧尖', '黄泥堡', '东洞', '上坝', '下河清', '金佛寺', '丰乐', '清水'],
				        data:[],
				        axisLine: {
				            show: true,
				         lineStyle: {
				                color: "rgba(255,255,255,.1)",
				                width: 1,
				                type: "solid"
				            },
				        },
						
				        axisTick: {
				            show: false,
				        },
						axisLabel:  {
				                interval: 0,
				               // rotate:50,
				                show: true,
				                splitNumber: 15,
				                textStyle: {
				 					color: "rgba(255,255,255,.6)",
				                    fontSize: '14',
				                },
				                formatter:function(value){
				                    var str = value.split('');
				                    return str.join('\n');
				                },
				                // rotate:-30
				            },
				    }],
				    yAxis: [{
				        type: 'value',
				        axisLabel: {
				            // formatter: '{value} %',
				            interval: 0,
							show:true,
				            textStyle: {
				                color: "rgba(255,255,255,.6)",
				                fontSize: '14',
				            },
				        },
				        axisTick: {
				            show: false,
				        },
				        axisLine: {
				            show: true,
				            lineStyle: {
				                color: "rgba(255,255,255,.1	)",
				                width: 1,
				                type: "solid"
				            },
				        },
				        splitLine: {
				            lineStyle: {
				               color: "rgba(255,255,255,.1)",
				            }
				        }
				    }],
				    series: [
						{
				        type: 'bar',
//				        data: [200, 275, 300, 900, 1600, 1200, 600,200, 300, 300, 900, 1500, 1200, 600,400],
				        data:[],
				        barWidth:'50%', //柱子宽度
				        barGap: 4, //柱子之间间距
				        itemStyle: {
				            normal: {
				                color:'#2f89cf',
				                opacity: 1,
								barBorderRadius: 5,
				            }
				        },
				        //柱子顶部数据
				        // label:{
				        //     show:true,
				        //     position:'top',
				        // }
				    }
						
					]
//			}
	});
	
	
	var nameX = [];
	var numY = [];
	
	$.ajax({
		type:'post',
		async:false,
		url:path+'/portal/org/villagePeople',
		dataType:'json',
		success: function(res){
			//alert(res)
//			console.log(res.data)
//			console.log(res)
			for(var i = 0; i< res.data.length; i++){
				nameX.push(res.data[i].name);
			}
			for(var j = 0; j< res.data.length; j++){
				numY.push(res.data[j].count);
			}
			
			myChart.setOption({        //加载数据图表
                xAxis: {
                    data: nameX
                },
                series: [{
                    // 根据名字对应到相应的系列
//                    name: '销量',
                    data: numY
                }]
            });
			
		},
		error:function(){
			console.log('fail');
		}
	})


      
        // 使用刚指定的配置项和数据显示图表。
//        myChart.setOption(option,true);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

// 村干部学历情况
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC']
        myChart.setOption({
        	 
//        	 option = {
        			    // backgroundColor: '#0e2147',
        			    tooltip: {
        			        trigger: 'axis',
        			        axisPointer: {
        			            type: 'shadow'
        			        }
        			    },
        			    grid: {
        			        left: '11%',
        			        top: '12%',
        			        right: '0%',
        			        bottom: '8%',
        			        containLabel: true
        			    },
        			    xAxis: [{
        			        show: false,
        			    }],
        			    yAxis: [{
        			        axisTick: 'none',
        			        axisLine: 'none',
        			        offset: '27',
        			        axisLabel: {
        			            textStyle: {
        			                color: '#ffffff',
        			                fontSize: '14',
        			            }
        			        },
        			        data: ['初中及以下', '高中', '大专', '本科', '研究生及以上']
        			    }, {
        			        axisTick: 'none',
        			        axisLine: 'none',
        			        axisLabel: {
        			            textStyle: {
        			                color: '#ffffff',
        			                fontSize: '16',
        			            }
        			        },
        			        data: ['', '', '', '', '']
        			    }, {
        			        name: '分拨延误TOP 10',
        			        nameGap: '50',
        			        nameTextStyle: {
        			            color: '#ffffff',
        			            fontSize: '16',
        			        },
        			        axisLine: {
        			            lineStyle: {
        			                color: 'rgba(0,0,0,0)'
        			            }
        			        },
        			        data: [],
        			    }],
        			    series: [{
        			            // name: '条',
        			            type: 'bar',
        			            yAxisIndex: 0,
//        			            data: [210, 132, 210, 530, 10],
        			            data:[],
        			            label: {
        			                normal: {
        			                    show: true,
        			                    position: 'right',
        			                    textStyle: {
        			                        color: '#ffffff',
        			                        fontSize: '12',
        			                    }
        			                }
        			            },
        			            barWidth: 8,
        			            itemStyle: {
        			                normal: {
        			                    color: function(params) {
        			                        var num = myColor.length;
        			                        return myColor[params.dataIndex % num]
        			                    },
        			                }
        			            },
        			            z: 2
        			        }, 
        			        {
        			            // name: '白框',
        			            type: 'bar',
        			            yAxisIndex: 1,
        			            barGap: '-100%',
        			            // data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
        			            barWidth: 20,
        			            itemStyle: {
        			                normal: {
        			                    color: '#0e2147',
        			                    barBorderRadius: 5,
        			                }
        			            },
        			            z: 1
        			        }, 
        			        // {
        			        //     name: '外框',
        			        //     type: 'bar',
        			        //     yAxisIndex: 2,
        			        //     barGap: '-100%',
        			        //     data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        			        //     barWidth: 5,
        			        //     itemStyle: {
        			        //         normal: {
        			        //             color: function(params) {
        			        //                 var num = myColor.length;
        			        //                 return myColor[params.dataIndex % num]
        			        //             },
        			        //             barBorderRadius: 10,
        			        //         }
        			        //     },
        			        //     z: 0
        			        // }
        			        // {
        			        //     name: '外圆',
        			        //     type: 'scatter',
        			        //     hoverAnimation: false,
        			        //     data: [0, 0, 0, 0, 0],
        			        //     yAxisIndex: 2,
        			        //     symbolSize:12,
        			        //     itemStyle: {
        			        //         normal: {
        			        //             color: function(params) {
        			        //                 var num = myColor.length;
        			        //                 return myColor[params.dataIndex % num]
        			        //             },
        			        //             opacity: 1,
        			        //         }
        			        //     },
        			        //     z: 2
        			        // }
        			    ]
//        			};
        });
        
        var nameY = [];
        var numX = [];
       
        $.ajax({
        	type:'post',
    		async:false,
    		url:path+'/portal/org/peopleEducation',
    		dataType:'json',
    		success:function(res){
    			var data = res.data.slice(0,5)
//    			console.log(res.data.slice(0,5))
    			for(var i = 0; i < data.length; i++){
    				numX.push(data[i]);
//    				console.log(numX)
    			}
    			myChart.setOption({        //加载数据图表
                    series: [{
                        // 根据名字对应到相应的系列
//                        name: '销量',
                        data: numX
                    }]
                });
    		},
    		error:function(){
    			console.log('fail')
    		}
        })
      
        // 使用刚指定的配置项和数据显示图表。
       
        window.addEventListener("resize",function(){
            myChart.resize();
        });
}




// 村干部培训情况
function echarts_3() {
var myChart = echarts.init(document.getElementById('echart3'));
    
    var legend =[];
    var value =[];
    $.ajax({
    	type:'post',
		async:false,
		url:path+'/portal/org/Range',
		dataType:'json',
		success:function(res){
//			console.log(res,88888)
			for(var key in res){
				legend.push(key);
				value.push(res[key]*1)
			}
//			console.log("value"+value)
		},
		error:function(){
			console.log('fail');
		}
    })
//    var legend = ['经济合作组织', '专业合作社', '社会组织', '其他组织'];
    
//    console.log(value,33333)

var data = [];
for (let i = 0; i < legend.length; i++) {
    data.push({
        name: legend[i],
        // value: (Math.random() * 100000).toFixed(0)
        value: value[i]
    });
}

option = {
// backgroundColor: '#05274C',
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708'],
    tooltip: { //提示框
        trigger: "item",
        triggerOn: "mousemove",
        // backgroundColor: "rgba(1,70,86,1)",
        borderColor: "rgba(0,246,255,1)",
        borderWidth: 0.5,
        textStyle: {
            fontSize: 16
        }
    },
    title: [{
        // text: 18653,
        // subtext: '',
        // textStyle: {
        //     fontSize: 20,
        //     color: "#fff"
        // },
        subtextStyle: {
            fontSize: 16,
            color: '#fff'
        },
        textAlign: "center",
        x: '25%',
        y: '23%',
    }],
series: [
    {
        color: ['#2AC9FD', '#76FBC0', '#35C96E', '#0086FF', '#48B188', '#5957C2'],
        type: 'pie',
        radius: ['43', '56'],
        labelLine: {
            normal: {
                length: 13,
                length2: 80,
                lineStyle: {
                    type: 'solid'
                }
            }
        },
        
        label: {
            normal: {
                formatter: (params) => {
//                     console.log(params,"sdsd");
                    return '{b| ' + params.name + '}  ' + '{c|' + params.percent.toFixed(0) + '}'
                },
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -46],
                height: 70,
                fontSize: 16,
                align: 'center',
                color: '#3494BD',
                rich: {
                    b: {
                        fontSize: 16,
                        lineHeight: 20,
                        color: '#41B3DC',
                        padding: [0, 0, 3, 0]
                    },
                    c: {
                        fontSize: 20,
                        lineHeight: 20,
                        color: 'orange'
                    }

                }
            }
        },
        data: data,
    },


//    {
//        type: 'pie',
//        radius: ['38', '41'],
//        data: [100],
//        label: {
//            show: false
//        }
//    },
//    
//    {
//        type: 'pie',
//        radius: ['33', '36'],
//        data: [100],
//        label: {
//            show: false
//        }
//    }
]
};
    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}


// 村干部男女比例
function echarts_4() {
	
	
	// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart4'));
    let arr1=[];
    let obj1 ={};
    
    $.ajax({
    	type:'post',
		async:false,
		url:path+'/portal/org/sex',
		dataType:'json',
		success:function(res){
//			console.log(res)
			for(var i in res){
//				console.log(i,res[i],44444);
				arr1.push(res[i]*1);
			}
		}
    })
//    console.log(arr1,5566666)
    // console.log(myChart)

    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        },
        emphasis: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        }
    };
    
    
    var dataStyle = {
        normal: {
            formatter: '{c}%',
            position: 'center',
            show: true,
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                color: '#fff'
            }
        }
    };
    
    
    option = {
        // backgroundColor: '#142058',
        title: [
        //     {
        //     text: '',
        //     x: '20',
        //     y: '20',
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 20
        //     }
        // },
        {
            text: '男',
            left: '29.8%',
            top: '60%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#fff',
                textAlign: 'center',
            },
        }, {
            text: '女',
            left: '70%',
            top: '60%',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '16',
                textAlign: 'center',
            },
        }],
        series: [{
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['45%', '51%'],
                center: ['30%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [
                    {
                        value: arr1[0],
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#99da69'
                                }, {
                                    offset: 1,
                                    color: '#01babc'
                                }]),
                            }
                        },
                        label: dataStyle,
                    }, {
                        value: 25,
                        itemStyle: placeHolderStyle,
                    },
    
                ]
            },
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['45%', '51%'],
                center: ['70%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: arr1[1],
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#9f3edd'
                                }, {
                                    offset: 1,
                                    color: '#4897f6'
                                }]),
                            }
                        },
                        label: dataStyle,
                    }, {
                        value: 80,
                        itemStyle: placeHolderStyle,
                    },
    
                ]
            },
            
            //外圈的边框
            {
                // name: '总人数',
                type: 'pie',
                hoverAnimation: true, //鼠标经过的特效
                radius: ['51%', '52%'],
                center: ['30%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: 75,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#01babc'
                                }, {
                                    offset: 1,
                                    color: '#99da69'
                                }]),
                            }
                        },
                    }, {
                        value: 25,
                        itemStyle: placeHolderStyle,
                    },
    
                ]
            },
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['51%', '52%'],
                center: ['70%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: 2,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4897f6'
                                }, {
                                    offset: 1,
                                    color: '#9f3edd'
                                }]),
                            }
                        },
                    }, {
                        value: 25,
                        itemStyle: placeHolderStyle,
                    },
    
                ]
            },
        ]
    };

    
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });

}


// 村干部年龄分布
function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5'));

    var xMax = 100;
    
    myChart.setOption({
    	tooltip: {
            trigger: 'item',
            formatter: '{a}<br />{b}: {c}',
            "axisPointer": {
                "type": "none"
            },
        },
                grid: {
               top: '5%',
               left: '3%',
               right: '8%',
               bottom: '5%',
               containLabel: true
             },
        yAxis: [{
            type: 'category',
            show: true,
            data: [
                '30岁及以下', '31-45岁', '46-50岁', '51-60岁', '60岁及以上'
            ],
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#ffffff'
                } 
            },
            "axisTick": { //y轴刻度线
                "show": false
            },
            splitLine: {
                show: false
            },
        }],
        xAxis: [{
            type: 'value',
            //  position:'top',
            show: false,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                rotate: 0,
                textStyle: {
                    color: '#ffffff'
                }
            }
        }],
        series: [{
            name: '',
            type: 'bar',
            stack: '',
            z: 1,
            barWidth: '30%',
            // data: [20, 32, 11, 65, 25],
            data: [],
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#f44120', '#fd7b09', '#ffbf37', '#f2ff36', '#4fae36',
                            '#308cef', '#4c41cc'
                        ];
                        return colorList[params.dataIndex]
                    },
                    "label": {
                        "show": false,
                        "textStyle": {
                            "color": "rgba(255,255,255,1)"
                        },
                        position: 'right',
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            }
        }, {
            name: '占位',
            type: 'bar',
            barWidth: '25%',
            barGap: '-124%',
            silent: true,
            itemStyle: {
                normal: {
                    borderWidth: 0.6,
                    color: 'transparent',
                    // borderColor: '#49698f',
                    barBorderRadius: 50,
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "rgba(255,255,255,1)"
                        },
                        "position": "right",
                        formatter: function(p) {
                            return data[p.dataIndex];
                        }
                    }
                }
            },
//            data: data.map(function(d) {
//                return xMax
//            }),
        }, ]
    });
    
    var data = [];
    
    $.ajax({
    	type:'post',
		async:false,
		url:path+'/portal/org/age',
		dataType:'json',
		success:function(res){
//			console.log(res)
			for(var key in res){
				data.push(res[key])
			}
//			console.log(data)
			myChart.setOption({
				series:[{
					data:data
				}]
			})
		},
		error:function(){
			console.log('fail');
		}
    })
    

    // 使用刚指定的配置项和数据显示图表。
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}


// 村干部兼职情况
function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart6'));
    
    var legend =[];
    var value =[];
    $.ajax({
    	type:'post',
		async:false,
		url:path+'/portal/org/part',
		dataType:'json',
		success:function(res){
//			console.log(res,88888)
			for(var key in res){
				legend.push(key);
				value.push(res[key]*1)
			}
//			console.log("value"+value)
		},
		error:function(){
			console.log('fail');
		}
    })
//    var legend = ['经济合作组织', '专业合作社', '社会组织', '其他组织'];
    
//    console.log(value,33333)

var data = [];
for (let i = 0; i < legend.length; i++) {
    data.push({
        name: legend[i],
        // value: (Math.random() * 100000).toFixed(0)
        value: value[i]
    });
}

option = {
// backgroundColor: '#05274C',
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708'],
    tooltip: { //提示框
        trigger: "item",
        triggerOn: "mousemove",
        // backgroundColor: "rgba(1,70,86,1)",
        borderColor: "rgba(0,246,255,1)",
        borderWidth: 0.5,
        textStyle: {
            fontSize: 16
        }
    },
    title: [{
        // text: 18653,
        // subtext: '',
        // textStyle: {
        //     fontSize: 20,
        //     color: "#fff"
        // },
        subtextStyle: {
            fontSize: 16,
            color: '#fff'
        },
        textAlign: "center",
        x: '25%',
        y: '23%',
    }],
series: [
    {
        color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
        type: 'pie',
        radius: ['43', '56'],
        labelLine: {
            normal: {
                length: 13,
                length2: 80,
                lineStyle: {
                    type: 'solid'
                }
            }
        },
        
        label: {
            normal: {
                formatter: (params) => {
//                     console.log(params,"sdsd");
                    return '{b| ' + params.name + '}  ' + '{c|' + params.percent.toFixed(0) + '}'
                },
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -86],
                height: 70,
                fontSize: 16,
                align: 'center',
                color: '#3494BD',
                rich: {
                    b: {
                        fontSize: 16,
                        lineHeight: 20,
                        color: '#41B3DC',
                        padding: [0, 0, 5, 0]
                    },
                    c: {
                        fontSize: 20,
                        lineHeight: 20,
                        color: 'orange'
                    }

                }
            }
        },
        data: data,
    },


    {
        type: 'pie',
        radius: ['38', '41'],
        data: [100],
        label: {
            show: false
        }
    },
    
    {
        type: 'pie',
        radius: ['33', '36'],
        data: [100],
        label: {
            show: false
        }
    }
]
};
    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
  



		
		
		

})


		









