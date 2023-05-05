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
            Về
        </button>
        <div class="row">
          <div class="col">
              <h5 class="text-light "><b>Trang</b></h5>
              <ul class="nav flex-column ">
                    <router-link :to="{name:'home'}" class="nav-link p-0 text-light" >
                    Trang Chủ
                    </router-link>
                    <router-link :to="{name:'introduce'}" class="nav-link p-0 text-light" >
                        Giới Thiệu
                    </router-link>
                    <router-link :to="{name:'news'}" class="nav-link p-0 text-light" >
                        Tin Tức
                    </router-link>
                    <router-link :to="{name:'town'}" class="nav-link p-0 text-light" >
                        Các Tỉnh/ Thành
                    </router-link>
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
      
        </div>
      
      
    </footer>
   

</template>

