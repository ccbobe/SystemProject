$(function() {
		var datacpu1 = [];
		var plotcpu1data = [];
		var datacpu2 = [];
		var plotcpu2data = [];
		var datacpu3 = [];
		var plotcpu3data = [];
		var datacpu4 = [];
		var plotcpu4data = [];
		var datacpu5 = [];
		var plotcpu5data = [];
		var datacpu6 = [];
		var plotcpu6data = [];
		var datacpu7 = [];
		var plotcpu7data = [];
		var datacpu8 = [];
		var plotcpu8data = [];
		var datacpu9 = [];
		var plotcpu9data = [];
		var datacpu10 = [];
		var plotcpu10data = [];
		var datacpu11 = [];
		var plotcpu11data = [];
		var datacpu12 = [];
		var plotcpu12data = [];
		var datacpu13 = [];
		var plotcpu13data = [];
		var datacpu14 = [];
		var plotcpu14data = [];
		var datacpu15 = [];
		var plotcpu15data = [];
		var datacpu16 = [];
		var plotcpu16data = [];
		var datacpu = [];
		var plotcpudata = [];
		var datarom = [];
		var plotromdata = [];
		var pointNum = 50;
		var point = 100;
		//初始化数据
		fuChuZhi(datacpu1, plotcpu1data, pointNum);
		fuChuZhi(datacpu2, plotcpu2data, pointNum);
		fuChuZhi(datacpu3, plotcpu3data, pointNum);
		fuChuZhi(datacpu4, plotcpu4data, pointNum);
		fuChuZhi(datacpu5, plotcpu5data, pointNum);
		fuChuZhi(datacpu6, plotcpu6data, pointNum);
		fuChuZhi(datacpu7, plotcpu7data, pointNum);
		fuChuZhi(datacpu8, plotcpu8data, pointNum);
		fuChuZhi(datacpu9, plotcpu9data, pointNum);
		fuChuZhi(datacpu10, plotcpu10data, pointNum);
		fuChuZhi(datacpu11, plotcpu11data, pointNum);
		fuChuZhi(datacpu12, plotcpu12data, pointNum);
		fuChuZhi(datacpu13, plotcpu13data, pointNum);
		fuChuZhi(datacpu14, plotcpu14data, pointNum);
		fuChuZhi(datacpu15, plotcpu15data, pointNum);
		fuChuZhi(datacpu16, plotcpu16data, pointNum);
		fuChuZhi(datacpu, plotcpudata, point);
		fuChuZhi(datarom, plotromdata, pointNum);

		var options = {
			series : {
				shadowSize : 0
			}, // 绘制线的阴影，不绘制设置 0
			yaxis : {
				min : 0,
				max : 100
			}, // Y 轴的最大值最小值
			xaxis : {
				show : false
			}
		// 不显示 X 轴
		};
		var plot1 = $.plot($("#cpu1"), [ plotcpu1data ], options);
		var plot2 = $.plot($("#cpu2"), [ plotcpu2data ], options);
		var plot3 = $.plot($("#cpu3"), [ plotcpu3data ], options);
		var plot4 = $.plot($("#cpu4"), [ plotcpu4data ], options);
		var plot5 = $.plot($("#cpu5"), [ plotcpu5data ], options);
		var plot6 = $.plot($("#cpu6"), [ plotcpu6data ], options);
		var plot7 = $.plot($("#cpu7"), [ plotcpu7data ], options);
		var plot8 = $.plot($("#cpu8"), [ plotcpu8data ], options);
		var plot9 = $.plot($("#cpu9"), [ plotcpu9data ], options);
		var plot10 = $.plot($("#cpu10"), [ plotcpu10data ], options);
		var plot11 = $.plot($("#cpu11"), [ plotcpu11data ], options);
		var plot12 = $.plot($("#cpu12"), [ plotcpu12data ], options);
		var plot13 = $.plot($("#cpu13"), [ plotcpu13data ], options);
		var plot14 = $.plot($("#cpu14"), [ plotcpu14data ], options);
		var plot15 = $.plot($("#cpu15"), [ plotcpu15data ], options);
		var plot16 = $.plot($("#cpu16"), [ plotcpu16data ], options); 
		var plotCpu = $.plot($("#cpu"), [ plotcpudata ], options);
		var plotRom = $.plot($("#rom"), [ plotromdata ], options);
		//请求响应后的处理方法
		function updateData(cpuMap) {
			var str = cpuMap.cpu0;
			datacpu1 = datacpu1.slice(1);
			datacpu1.push(str);

			datacpu2 = datacpu2.slice(1);
			datacpu2.push(cpuMap.cpu1);

			datacpu3 = datacpu3.slice(1);
			datacpu3.push(cpuMap.cpu2);

			datacpu4 = datacpu4.slice(1);
			datacpu4.push(cpuMap.cpu3);

			datacpu5 = datacpu5.slice(1);
			datacpu5.push(cpuMap.cpu4);

			datacpu6 = datacpu6.slice(1);
			datacpu6.push(cpuMap.cpu5);

			datacpu7 = datacpu7.slice(1);
			datacpu7.push(cpuMap.cpu6);

			datacpu8 = datacpu8.slice(1);
			datacpu8.push(cpuMap.cpu7);
			
 			datacpu9 = datacpu9.slice(1);
			datacpu9.push(cpuMap.cpu8);

			datacpu10 = datacpu10.slice(1);
			datacpu10.push(cpuMap.cpu9);

			datacpu11 = datacpu11.slice(1);
			datacpu11.push(cpuMap.cpu10);

			datacpu12 = datacpu12.slice(1);
			datacpu12.push(cpuMap.cpu11);

			datacpu13 = datacpu13.slice(1);
			datacpu13.push(cpuMap.cpu12);

			datacpu14 = datacpu14.slice(1);
			datacpu14.push(cpuMap.cpu13);

			datacpu15 = datacpu15.slice(1);
			datacpu15.push(cpuMap.cpu14);

			datacpu16 = datacpu16.slice(1);
			datacpu16.push(cpuMap.cpu15); 

			datacpu = datacpu.slice(1);
			datacpu.push(cpuMap.cpu);
			$("#cpushiyonglv").html(cpuMap.cpu + '%');

			datarom = datarom.slice(1);
			datarom.push(cpuMap.rom);
			$("#romshiyonglv").html(cpuMap.rom + '%');

			plotcpu1data = [];
			plotcpu2data = [];
			plotcpu3data = [];
			plotcpu4data = [];
			plotcpu5data = [];
			plotcpu6data = [];
			plotcpu7data = [];
 			plotcpu8data = [];
			plotcpu9data = [];
			plotcpu10data = [];
			plotcpu11data = [];
			plotcpu12data = [];
			plotcpu13data = [];
			plotcpu14data = [];
			plotcpu15data = [];
			plotcpu16data = []; 
			plotcpudata = [];
			plotromdata = [];

			valueForPoint(datacpu1, plotcpu1data);
			valueForPoint(datacpu2, plotcpu2data);
			valueForPoint(datacpu3, plotcpu3data);
			valueForPoint(datacpu4, plotcpu4data);
			valueForPoint(datacpu5, plotcpu5data);
			valueForPoint(datacpu6, plotcpu6data);
			valueForPoint(datacpu7, plotcpu7data);
			valueForPoint(datacpu8, plotcpu8data);
			valueForPoint(datacpu9, plotcpu9data);
			valueForPoint(datacpu10, plotcpu10data);
			valueForPoint(datacpu11, plotcpu11data);
			valueForPoint(datacpu12, plotcpu12data);
			valueForPoint(datacpu13, plotcpu13data);
			valueForPoint(datacpu14, plotcpu14data);
			valueForPoint(datacpu15, plotcpu15data);
			valueForPoint(datacpu16, plotcpu16data);
			valueForPoint(datacpu, plotcpudata);
			valueForPoint(datarom, plotromdata);

			drawLine(plotcpu1data, plot1);
			drawLine(plotcpu2data, plot2);
			drawLine(plotcpu3data, plot3);
			drawLine(plotcpu4data, plot4);
			drawLine(plotcpu5data, plot5);
			drawLine(plotcpu6data, plot6);
			drawLine(plotcpu7data, plot7);
			drawLine(plotcpu8data, plot8);
 			drawLine(plotcpu9data, plot9);
			drawLine(plotcpu10data, plot10);
			drawLine(plotcpu11data, plot11);
			drawLine(plotcpu12data, plot12);
			drawLine(plotcpu13data, plot13);
			drawLine(plotcpu14data, plot14);
			drawLine(plotcpu15data, plot15);
			drawLine(plotcpu16data, plot16); 
			drawLine(plotcpudata, plotCpu);
			drawLine(plotromdata, plotRom);
		}

		requestServlet();
		//画线方法，res是数据集合数组
		function drawLine(res, plot) {
			plot.setData([ res ]);
			plot.draw();
		}

		function fuChuZhi(cpudata, plotdata, pointNum) {
			for (var i = 0; i < pointNum; i++) {
				cpudata[i] = 0;
			}
			valueForPoint(cpudata, plotdata);
		}

		function valueForPoint(data, plotdata) {
			for (var i = 0; i < data.length; ++i) {
				plotdata.push([ i, data[i] ]);
			}
		}

	});