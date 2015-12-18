/*
	not onexit - FDM banner
*/
var eg_width=254;
var eg_height=345;
var eg_bordercolor='#e4e4e4';
var eg_bgTitle='#f0f0f0';
var eg_timeout=0;
var eg_disable_scrollbar=false;
var myWidth=0;
var myHeight=0;
var opened=false;
var is_in=false;
var egwind=null;
var eg_x=100;
var eg_y=100;
var nrp=-1;
var nrp_show=1;
var autoclose=null;
var onexitheight = 15;

var posy_p=0;
var movetop = false;

function pageflip_on()
{
	$j(".layout_pop_up").stop()
		.animate({
			width: '350px', 
			height: '350px'
		}, 500, show_close);

}

function show_close()
{
	$j("#exit_close").css({'display':'block'});
}

function pageflip_off()
{
	return false;

}


function sformat(){
	if(arguments.length==0){return null}
	var str=arguments[0];
	for(var i=1;i<arguments.length;i++){
		var re=new RegExp('\\{'+(i-1)+'\\}','gm');
		str=str.replace(re,arguments[i])
	}
	return str
};
function mmove(e){
	return false;

};

$j(document).ready(function(){ eg_init(); });

function eg_init()
{
	$j("body").keydown(function(e){
		var code = e.keyCode || e.which;
		if(code == 27) { //escape pressed
			closeWindow()
		}
	});

	//document.onmousemove=mmove;
	var x=document.createElement('div');
	x.setAttribute('id','egwind');
	//document.body.appendChild(x);

	x.style.position='absolute';
	x.style.top='-1000px';
	x.style.left='-1000px';
	x.style.display='block';

	x.innerHTML = ''
	+ '<div class="layout_pop_up" style="display:none;">'
	+ ' <div class="pop_up_wrap">'
	+ '  <div class="fixed_line"></div>'
	+ '  <div class="pop_up">'
//	+ '	<a href="javascript:void(0)" onclick="closeWindow(); return false;" class="close_btn"></a>'
	+ '                <div class="pop_up_top"></div>'
	+ '                <div class="pop_up_logo"></div>'
	+ '                <div class="pop_up_prog">'
	+ '                	<div class="pop_up_h1">混世魔王技术博客 '
	
	+ '                    		<div class="pop_up_items">'
	+ '                        		<span>Up to $10 per hour</span>'
	+ '                        		<span>Payments every month</span>'
	+ '                        		<span>Guru &amp; PayPal support</span>'
	+ '                    		</div>'
	+ '			</div>'
	+ '                </div>'
	+ '                <div class="links_wrapper">'
	+ '                    <div class="btn_find"><a href="http://yuedu.baidu.com/ebook/a8c21eae58fafab068dc0299"  target="_blank" onclick="closeWindow();">Register</a></div>'


	+ '                </div>'
	
	+ '                <div class="pop_up_bottom"></div>'

	+ '  <img id="cntimg" src="./sytes/spacer.gif" border="0" width="1" height="1" alt=""/>'
	+ ' </div>'
	+ ' </div>'

	//egwind=x;
	document.body.appendChild(x);

	openWindow();
};

function openWindow()
{
	var onexitcookie = readCookie('onexit13-lang');
	if(opened) return false;

	var loc = window.location.toString();
	if (loc.indexOf("?onexit") > -1 || loc.indexOf("&onexit") > -1)
	{
		/*do not view cookies */
	}
	else
		if(onexitcookie==1) return false;


	opened=true;
	var x=$j("#egwind")[0];
	x.style.top='0px';
	x.style.left='10px';
	x.style.display='block';

	$j("#egwind").css({'z-index':'100000'});

	$j(".layout_pop_up").fadeIn(100);
	$j("html").css("overflow","hidden");

	if(eg_disable_scrollbar)
		document.body.style.overflow='hidden';
	if(eg_timeout>0){
		autoclose=setTimeout("closeWindow()",eg_timeout)
	}
	return false
};
function closeWindow()
{
	$j(".layout_pop_up").fadeOut(400);
	$j("html").css("overflow","auto");
	$j("body").append('');
};


function detectIE6(){
	isie6 = navigator.userAgent.toLowerCase().indexOf('msie 6');

	if ( isie6 >0 && isie6 < 30 )
		return true;
	else
		return false;

}

function trim(str) { return str.replace(/^(\s|&nbsp;)+|(\s|&nbsp;)+$/g, ''); }

function preload(arrayOfImages) {
    $j(arrayOfImages).each(function(){
        $j('<img/>')[0].src = this;
        // (new Image()).src = this; // Alternatively
    });
}

preload([
	
	'../sytes/pop_up_sprite.png'
]);

