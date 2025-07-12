var globalData = null;
$(document.body).ready(function(){
	//初始化数据
	xlinfo=a.xlinfo;
	if($("#keywords").val()!='请输入关键词查询'){
		loadData($("#keywords").val());
	}else{
		loadData("");	
	}
});

var xlinfo=Array();
var xlcount = 0;
var ser_id=Array();
	
//载入数据
var loadData = function(str){
	var ser_id = filterData(str);
	//document.write(xlcount);
	var result='';
	var keyword = $('.input1').val();
	if(xlcount!=0){		
		var j=1;
		for(var i=0;i<xlcount;i++){
			if(j<20){	
				if(j%2==1){
					result += '<tr><td width="30%">'+xlinfo[ser_id[i]]['question']+'</td><td align="center">'+xlinfo[ser_id[i]]['opt1']+'</td></tr>';
				}
				//result += '<li class="sec3li1">'+xlinfo[ser_id[i]]['question']+'</li><li class="sec3li2">'+xlinfo[ser_id[i]]['opt1']+'</li>';
			}
			j++;
		}
		$("#result").html(result);
		$("#result").show();
		$("#result td").html(function(){
        return $(this).text().replace(keyword,"<b>"+keyword+"</b>");
		})
	}else{
		$("#result").html('<tr><td colspan="2">没有搜索到相关的结果!</td></tr>');
		$("#result").show();
	}
	}


var lastValue = "";
var searchData = function(obj,e){
	if(e.keyCode==116 || 17==e.keyCode){
		return;
	}
	if(e.ctrlKey && e.keyCode==32){
		return;
	}
	if(obj.value==lastValue){
		return;
	}
	lastValue = obj.value;
	if(obj.value.length!=0){
		loadData(obj.value);
	}else{
		loadData("");
	}
}

//填充数据
var filterData = function(str){
	if(typeof(str)=="undefined" || str.length==0){
		xlcount=0;
		for(var i in xlinfo){
			ser_id[i]=i;
			xlcount+=1;
		}
		return ser_id;
	}
	
	xlcount=0;
	for(var i in xlinfo){
		if(xlinfo[i].question.indexOf(str)<0) continue;
		ser_id[xlcount]=i;
		xlcount+=1;
	}
	return ser_id;
}

var clean = function(){
	document.getElementById("keywords").value="";
	loadData("");
}