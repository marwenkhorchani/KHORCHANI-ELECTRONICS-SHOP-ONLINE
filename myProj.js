
function makeProd(name,url){
	return {
		
		name:name,
		url:url,
	}
};

var phone1= makeProd("samsung note 20+","https://lh3.googleusercontent.com/-ZTu8NdyDWFo/Xy3U6dxenpI/AAAAAAAAUzI/sTgJ2NKrGdA4VKnQKINQOr1Yno1Ik5pqwCLcBGAsYHQ/d/galaxy-note-20-precommande.jpg")
var phone2= makeProd("iphone 11 pro max","https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2019/10/iphone-11-pro-dos.JPG")
var phone3= makeProd("huawenova7i", "https://149367133.v2.pressablecdn.com/wp-content/uploads/2020/03/HUAWEI-nova-7i-Sakura-Pink.jpg")
var phone4= makeProd("samsung s20 plus","https://www.leparisien.fr/resizer/ffvkddlDFlZStHEe5sxkE4RXvKQ=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/Q2MJCOGG4QEPJTYCV3ZLPUXQJQ.jpg")

var phones=[phone1,phone2,phone3,phone4]

var computer1= makeProd("hp","https://www.cdiscount.com/pdt2/8/5/3/1/700x700/hp8945016106853/rw/pc-portable-hp-elitebook-840-g1-core-i5-8-go-ram-5.jpg")
var computer2= makeProd("macbook pro","https://cdn.mgig.fr/2019/07/mg-57b35db5-516d-44b5-a294-w1000h500-sc.jpg")
var computer3= makeProd("dell","https://dyw7ncnq1en5l.cloudfront.net/optim/produits/0/42431/xps-13-2018_e2a535a9b4e666db_png__908_512__overflow.jpg")
var computer4= makeProd("asus","https://pbs.twimg.com/media/DsbuZkcWsAA_-zq.jpg")

var computers=[computer1,computer2,computer3,computer4]

var camera1= makeProd("canon","https://camerareview.org/wp-content/uploads/2020/03/51ABN4UMQyL.jpg")
var camera2= makeProd("canon","https://i1.adis.ws/i/canon/01-canon-eos-c700-main-product-feature.jpg")
var camera3= makeProd("nikon","https://dyw7ncnq1en5l.cloudfront.net/optim/news/15/152665/bbaa7d60-la-nouvelle-camera-de-blackmagic-filme-en-12k-avec-un-capteur-super-35-de-80-mpx__908_512__108-0-2589-1399.jpeg")
var camera4= makeProd("nikon","https://www.newsshooter.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-03-at-7.58.25-AM.png")

var cameras=[camera1,camera2,camera3,camera4]

var other1= makeProd("watch","https://cf.shopee.com.my/file/d3d64ccb71f1b1885aa85e192787417b")
var other2= makeProd("beats","https://www.journaldugeek.com/content/uploads/2019/10/beats-solopro-live-02.jpg")
var other3= makeProd("ps4","https://img.youtube.com/vi/IVYf6p-A158/maxresdefault.jpg")
var other4= makeProd("tv","https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2017/03/samsung-q8-conf-770.jpg")

var others=[other1,other2,other3,other4];
var obj={
	"phones":phones,
	"computers":computers,
	"cameras":cameras,
	"others":others
}

$('#ok').click(function(){
	$('.pub').hide();
	$('.list').html('');
	var categore = obj[$('#prod').val()];
	var i = categore.length - 1;
        while(i >= 0){
          var $productlist = $('.list');
          var product = categore[i]["url"];
          var $img = $('<img class="box" >');
          $img.attr("src",product);
          $img.attr("width","200px");
          $productlist.append($img);
          i -= 1;
        }
});




var count=0
var timer=setInterval('change()',2500);
function change(){
var image2=document.getElementById('pub')
var image3=document.getElementById('pub1')
if(count % 2 === 0){
image2.src="https://www.buzzwebzine.fr/wp-content/uploads/2019/02/musique-pub-samsung-galaxy-s10.jpg"
image3.src="https://sonovision.com/wp-content/uploads/sites/2/2020/05/EOS-R5-1024x576.jpeg"

count++
}else if(count % 3 === 0){
image2.src="https://www.produweb.be/docs/upload/files/services/12.png"
image3.src="https://www.zone-numerique.com/wp-content/uploads/2014/10/brikkphoto.jpg"
count++
}else if(count % 2 !== 0){
image2.src="https://images.frandroid.com/wp-content/uploads/2019/09/iphone-11-coque.jpg"
image3.src="https://www.numerama.com/content/uploads/2018/07/capture-decran-2018-07-12-a-15-15-54-1024x527.png"
count++
}

};





$('#ull').hide()
$('#cs').click(function(){
	$('#ull').show()
})
$('#cs').dblclick(function(){
	$('#ull').hide()
})



$('#ulll').hide()
$('#ph').click(function(){
	$('#ulll').show()
})
$('#ph').dblclick(function(){
	$('#ulll').hide()
})

$('#ullll').hide()
$('#ca').click(function(){
	$('#ullll').show()
})
$('#ca').dblclick(function(){
	$('#ullll').hide()
})

$('#ulllll').hide()
$('#ot').click(function(){
	$('#ulllll').show()
})
$('#ot').dblclick(function(){
	$('#ulllll').hide()
})




$('#alert').click(function () {
	window.alert("your order is sent");
})