<template>
    <div id="app">
        <div class="introduction-form">
			<img src="../assets/myProfile.png" class="introduction-form-img">

			<div class="introduction-form-name">박준홍</div>

			<br/>

			<div class="introduction-form-like">
				대구 소프트웨어 마이스터 고등학교에 재학 중<br/>
				Front-end와 Django, Python을 공부 중입니다.<br/>
				제가 좋아하는 것은 친구들이랑 노는 것과 게임하는 것입니다.<br/>
			</div>

			<br/><br/>

			<a href="https://github.com/Junhong0209" target="_blank"><img src="../assets/github.svg" class="introduction-form-icon"></a>
			<a href="https://www.facebook.com/Junhong04/" target="_blank"><img src="../assets/facebook.svg" class="introduction-form-icon"></a>
			<a href="https://www.instagram.com/junhong936/" target="_blank"><img src="../assets/instagram.svg" class="introduction-form-icon"></a>
			<a href="https://dev-redcat.tistory.com/" target="_blank"><img src="../assets/blog.svg" class="introduction-form-icon"></a>
			
			<div class="icon-information">
				Click this icons <br/>
				then, you can go to My SNS Page
			</div>

		</div>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

.introduction-form {
    text-align: center;
    font-family: 'Jua', sans-serif;
}
.introduction-form-name {
    font-size: 56px;
}
.introduction-form-img {
    width: 20%;
}
.introduction-form-icon {
    width: 2.5%;
}
.introduction-form-like {
	font-size: 24px;
}

.icon-information {
    color: gray;
    font-size: 16px;
}
</style>