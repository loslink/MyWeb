function creat_table(id,count) {
	
	var tempStr = '';
	for(var i = 0; i < count; i++) {
		
		tempStr += '<div topclassname="productListTopIcon" topswitch="on" productid="106" productname="" class="productTileForm " style="width: 217px; height: 232px;" faiwidth="217" faiheight="189" faiwidthor="257" faiheightor="180">';
        tempStr += '<div id="productTileForm106" class="topFlagImgDiv imgDiv " style="width:217px;height:189px;">';
        tempStr += '<table cellpadding="0" cellspacing="0"><tbody>';
            
        tempStr += '<tr id="module334product106"><td><a hidefocus="true"  target="_blank">';
        tempStr += '<img alt="" src="./img/'+(i+1)+'.jpg" title="" style="width:217px;height:189px;">';
        tempStr += '</a></td></tr></tbody></table></div>';
   
        tempStr += '<table class="fk-productName propDiv productName productNameWordWrap   " cellpadding="0" cellspacing="0" paramlayouttype="1" style="height: 23px;">';
        tempStr += '<tbody><tr><td style="text-align: unset;">';
        tempStr += '<a class="fk-productName" hidefocus="true" target="_blank" title=""></a></td></tr></tbody></table></div></div>';
			
		
	}
	$("#" + id).html(tempStr);
}

$(function() {
	creat_table('productList334',22);
});