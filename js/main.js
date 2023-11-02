$('.tit .btn').click(function (ev) {
    ev.preventDefault();
    //$('.nav').toggle();
    //$('.nav').fadeToggle();
    $('.nav').slideToggle();
    $(this).toggleClass("on");
});
// 클릭을하면 btn에 on이 붙음, 개발자모드에서 확인하기

$('.ban').slick({
    infinite: true,
    slidesToShow: 3, //한 화면에 보이는 개수
    slidesToScroll: 1, //버튼을 클릭하면 넘어가는 개수
    dots:true,
    autoplay:true
    });
/* slick.js에서 긁어옴 */
//slick에서 긁어온 코드 사이에 있던 setting-name: setting-value 생략

$('.gallery_img').slick({
    arrows: false
});

$('.gallery_btn .play').click(function () {
    $('.gallery_img').slick('slickPlay');
});

$('.gallery_btn .pause').click(function () {
    $('.gallery_img').slick('slickPause');
});

$('.gallery_btn .prev').click(function () {
    $('.gallery_img').slick('slickPrev');
});

$('.gallery_btn .next').click(function () {
    $('.gallery_img').slick('slickNext');
});

//slick Methodsd에서 $('.your-element').slick('setPosition'); 긁어와서 변형해주면 됨

//탭메뉴
//.next()는 바로 밑 요소(바로 아래 동생)
//.parent()는 부모요소
//.siblings() 나를 제외한 형제들
//.find() 하위요소(내 안에 있는 요소들)

let tab_list = $('.tab_menu');

tab_list.find('ul ul').hide();
tab_list.find('li.active ul').show();

$('.tab_menu>ul>li>a').click(function (event) {
    event.preventDefault();
    let $this = $(this); //변수를 만들 때 사용할 수 있는 특수문자 $, _(2개뿐임)
    //console.log($this)

    //숨김 처리에 관한 내용
    $this.next('ul').show();
    $this.parent('li').siblings('li').find('ul').hide();
    //class 이동에 관한 내용
    $this.parent('li').addClass('active')
    $this.parent('li').siblings('li').removeClass('active')
});

//괄호를 열고 닫는 것은 내장함수가 있다는 뜻 

//lightGallery(lightgallery의 docs의 Initialize lightGallery부분을 긁어와서 여기 써줌)
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
});

/* lgZoom(줌의 값)와 licenseKey: 'your_license_key',
speed: 500,는 필요없어서 빼줌 */

// 레이어 팝업
$('.layer').click(function (ev) {
    ev.preventDefault(); //새로고침(서버에서 데이터를 다시 가져온다) 막기
    //  $('#layer').show();
    $('#layer').fadeIn();
})

//퍽 튕겨 올라가는 이유는 a태그 때문임
//fadeIn은 기본값이 0.5s(천천히 나타남)

$('#layer .close').click(function (ev) {
    ev.preventDefault(); //새로고침 막기
    //$('#layer').show();
    $('#layer').fadeOut();
})

// window창 열기
$('.window').click(function (event) {
    event.preventDefault();
    window.open("popup.html", "popup", "top=500,left=500,width=900,height=590");
})

//_blank은 새창을 열겠다는 것이고 내 마음대로 이름을 넣어도 됨, 위의 코드는 w3school window open 검색해서 가져온 것임
//숫자 바꿔서 넓이와 높이 등 원하는 크기로 조절 가능함

//preventDefault은 클릭시 위로 튕겨올라가는 행위를 막아줌