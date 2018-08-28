var system ={
win : false,
mac : false,
xll : false
};
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if(system.win||system.mac||system.xll){
var online=new Array();
//document.write("<script language=\"javascript\" src=\"http://code2.54kefu.net/kefu/url.js\" charset=\"utf-8\" type=\"text/javascript\"></script>");
//document.write("<script language=\"javascript\" src=\"http://code2.54kefu.net/kefu/js/b195/851995_code.js\" charset=\"utf-8\" type=\"text/javascript\"></script>");
}else{
//document.write("<script language=\"javascript\" src=\"http://code2.54kefu.net/kefu/js2/b195/851995.js\" charset=\"utf-8\" type=\"text/javascript\"></script>");
}
