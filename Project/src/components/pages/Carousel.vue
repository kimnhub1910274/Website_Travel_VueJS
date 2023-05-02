<template>
  <carousel :autoplay="true" :nav="false" >
          <template slot="prev"><span class="prev">prev</span></template>

          <div class="card" style="height: 350px;">
              <a href="chonoi_vl">
                  <img class="hinh1 rounded" src="images/vinh-long/chonoi-cut.png" width="250px" height="210px">
                </a>
              <div class="card-body">
                <p class="text2 card-text"><b>Chợ nổi Trà Ôn</b> – Nơi cả người bán và người mua đều dùng ghe/thuyền làm phương tiện vận tải và di chuyển</p>
              </div>
          </div>
          <div class="card" style="height: 350px;">
              <a href="chuaphuochau_vl.html">
                  <img class="hinh1 rounded" src="images/vinh-long/vuon-kinh-phat-bang-da.jpg" width="250px" height="210px"></a>
              <p class="text2">Những bài kinh khắc trên đá rất 
                  độc đáo được đặt trong khuôn
                  viên  <b>chùa Phước Hậu</b>.
                  </p>
          </div>
          <div class="card" style="height: 350px;">      
              <a href="kdlsthoanghao_vl.html">
                  <img class="hinh1 rounded" src="images/vinh-long/khudulichhoanghaovinhlong.jpg" width="250px" height="210px"></a>
              <p class="text2"> <b>Du lịch sinh thái Hoàng Hảo</b> – 
                  Ngôi nhà mini màu sẵn bắt mắt.
                  </p>
          </div>
          <div class="card" style="height: 350px;">
              <a href="logachmangthit_vl.html">
                  <img class="hinh1 rounded" src="images/vinh-long/-lo-gach.jpg" width="250px" height="210px"></a>
              <p class="text2"><b>Lò gạch Mang Thít</b> đẹp thơ mộng trong sương sớm Lò gạch Mang Thít đẹp thơ mộng trong sương sớm.
              </p>
          </div>
          <template slot="next"><span class="next">next</span></template>
        </carousel>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
    name:"Carousel",
    components: { carousel },
}

</script>

<style>

</style>