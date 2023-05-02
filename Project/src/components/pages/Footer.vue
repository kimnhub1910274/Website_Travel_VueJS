<script >
export default {
 name: 'Footer',
 
}

    var mybutton = document.getElementById("mybtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

</script>

<template>

<footer class="py-5 " >
      <div class="container"/>
        <button onclick="topFunction()" id="mybtn" class="gotop" title="Go to top">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
        <div class="row">
          <div class="col">
              <h5 class="text-light "><b>Trang</b></h5>
              <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Trang chủ</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Giới Thiệu</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Địa Điểm</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Các Tỉnh/ Thành</a></li>
              </ul>
          </div>
      
          <div class="col">
              <h5 class="text-light"><b>Giới thiệu chúng tôi</b></h5>
              <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Về chúng tôi</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Tài nguyên và chính sách</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Tin cậy an toàn</a></li>
              </ul>
          </div>

          <div class="col">
              <h5 class="text-light"><b>Liên hệ chúng tôi</b></h5>
              <p class="text-light m-0">Email: travel@gmail.com</p>
              <p class="text-light">Số điện thoại: 090.789.6768 </p>
          </div>
      
          <div class="col">
              <h5 class="text-light"><b>Lời nhắn</b></h5>
              <div class="">
                <div class="input-group mb-2">
                    <span class="input-group-text" id="basic-addon1">Họ và tên: </span>
                    <input type="" class="form-control" placeholder="Nhập họ và tên" aria-label="name" aria-describedby="">
                </div>
                <div class="input-group mb-2">
                    <span class="input-group-text" id="basic-addon1">Email: </span>
                    <input type="" class="form-control" placeholder="Nhập email của bạn" aria-label="email" aria-describedby="">
                </div>
                <div class="input-group">
                    <span class="input-group-text">Lời nhắn</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="button py-2">
                    <button type="button" class="btn btn_main" >Gửi</button>
                    
                </div>
              </div> 
          </div>
        </div>
      
        <div class="d-flex justify-content-between py-4 my-4 border-top">
        <p class="text-light">© 2022 Company, Inc. All rights reserved.</p>
        <div class="row">
          <i style="font-size: 22px; color: #fff; padding: 5px;" class="col-3 fa-brands fa-facebook"></i>
          <i style="font-size: 22px; color: #fff; padding: 5px;" class="col-3 fa-brands fa-instagram"></i>
          <i style="font-size: 22px; color: #fff; padding: 5px;" class="col-3 fa-brands fa-twitter"></i>
        </div>

      </div>
    </footer>
   

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
