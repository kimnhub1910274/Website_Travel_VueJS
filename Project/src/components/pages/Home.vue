<script >
import Carousel from "./Carousel.vue";

export default {
  name: 'Home',
  components: {
    Carousel,

  },
  
};


</script>
<style>
.row{
  margin-left: 15px;
}
.rounded{
  width: 220px;
  height: 210px;
}
.text2{
  margin-left: -10px;
}
.col{
  height: 350px;
}
</style>
<template>
  <main>
      <!-- Gioi thieu -->
      <div class="d-flex container">
        <div class="m-3 gioithieu_vn">
          <h1>Việt Nam</h1>
          <p class="text-center">Lãnh thổ Việt Nam được chia thành 3 vùng và 8 miền với 
              63 tỉnh thành. Thay vì trước đây bao gồm 64 tỉnh thành, 
              nhưng năm 2008 sáp nhập Hà Tây vào Hà Nội nên còn 
              63 tỉnh và thành phố. Mỗi vùng miền ở nước ta trải dài từ Bắc vào Nam đều có 
              những nét đẹp riêng với những phong cảnh đặc trưng 
              từng vùng miền. Nếu có ít thời gian bạn có thể khám phá 
              từng địa điểm du lịch một và tuyệt nhất nếu bạn có đủ thời 
              gian nên thực hiện chuyến du lịch xuyên Việt 63 tỉnh 
              thành Việt Nam.
          </p>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img height="160px" src="images/phuquoc.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Phú Quốc (Miền Nam)</h5>
                  <p class="card-text text-center">Nếu bạn đang tìm kiếm điểm đến mạo hiểm tiếp theo của mình, Phú Quốc nên là một đối thủ nặng ký; đây là một số trải nghiệm độc đáo mà bạn có thể tận hưởng.</p>
                </div>
                
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img height="160px" src="images/hoian.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Quảng Nam (Miền Trung)</h5>
                  <p class="card-text text-center">Hãy dành nửa ngày của bạn trong Tour đi bộ Phố Cổ & Ẩm thực Đường phố để tham quan các di tích lịch sử của Phố Cổ Hội An và nếm thử các món ăn đường phố mang tính biểu tượng.</p>
                </div>
                
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img height="160px" src="images/taynguyen.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Lào Cai (Miền Bắc)</h5>
                  <p class="card-text text-center">Tây Nguyên - cao nguyên nắng gió, mùi cafe lẩn quất, những già làng móm mém, tiếng cồng chiêng trầm ấm. Du lịch Tây Nguyên để cảm nhận hết những điều này.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- gioi thieu miền tây-->
      <div class="gioithieu_mt" >
        <div class="container d-flex ">
          <div class=" p-3">
            <h1>Chào các bạn đến với du lịch miền Tây sông nước</h1>
              <p class="text-justify">Đến với miền Tây bạn nhất định không thể bỏ qua chợ Nổi – một nét văn hóa độc đáo mà chỉ có những người dân vùng sông nước có được. Chợ Nổi là những khu chợ mua bán mà người bán và người mua buộc phải dùng thuyền hoặc ghe làm phương tiện đi lại và vận chuyển.  Thường thì chợ sẽ được họp vào buổi sáng sớm ở các ngã của các con kênh, con sông giao nhau và mực nước không quá thấp...
            </p>
          </div>
            <img src="images/chonoi.png" alt="" width="350px" height="350px">
        </div>
      </div>
      <div class="welcom container">
        <h1>Địa điểm nổi bật</h1>
        <div class="row">
          <div class="col" >
              <a href="chonoi_vl">
                  <img class="hinh1 rounded" src="images/vinh-long/chonoi-cut.png" >
                </a>
              <div class="card-body">
                <p class="text2 card-text"><b>Chợ nổi Trà Ôn</b> – Nơi cả người bán và người mua đều dùng ghe/thuyền làm phương tiện vận tải và di chuyển</p>
              </div>
          </div>
          <div class="col" >
              <a href="chuaphuochau_vl.html">
                  <img class="hinh1 rounded" src="images/vinh-long/vuon-kinh-phat-bang-da.jpg" ></a>
              <p class="text2">Những bài kinh khắc trên đá rất 
                  độc đáo được đặt trong khuôn
                  viên  <b>chùa Phước Hậu</b>.
                  </p>
          </div>
          <div class="col" >      
              <a href="kdlsthoanghao_vl.html">
                  <img class="hinh1 rounded" src="images/vinh-long/khudulichhoanghaovinhlong.jpg"></a>
              <p class="text2"> <b>Du lịch sinh thái Hoàng Hảo</b> – 
                  Ngôi nhà mini màu sẵn bắt mắt.
                  </p>
          </div>
          <div class="col" >
              <a href="logachmangthit_vl.html">
                  <img class="hinh1 rounded" src="images/vinh-long/-lo-gach.jpg" ></a>
              <p class="text2"><b>Lò gạch Mang Thít</b> đẹp thơ mộng trong sương sớm Lò gạch Mang Thít đẹp thơ mộng trong sương sớm.
              </p>
          </div>
        </div>
      </div>

      <!-- miền trung -->
      <div class="gioithieu_mt" >
        <div class="container d-flex ">
          <img src="images/hoian2.png" alt="" width="350px" height="350px">
          <div class=" p-3">
            <h1>Chào các bạn đến với vẻ đẹp đặc sắc miền Trung</h1>
            <p class="text-justify">Có thể chưa đủ để diễn tả hết vẻ đẹp của Hội An, nhưng những bức ảnh dưới đây chắc chắn sẽ thôi thúc bạn nhanh chân lên để được sớm nhìn tận mắt những khung cảnh này.
              Ta yêu Hội An vì lẽ gì? Là vẻ yên bình cũ kỹ khó tìm được ở Sài Gòn tấp nập hay chốn Hà Thành phồn hoa? Hay là vì những món ăn ngon trứ danh "cộp mác" đặc sản Hội An ai ghé qua cũng phải thử?...
            </p>

          </div>
        </div>
      </div>

      <div class="welcom container">
        <h1>Địa điểm nổi bật</h1>
        <div class="row">
          <div class="col" >
              
                  <img class="hinh1 rounded" src="images/phongnha.png" >
              <p class="text2"><b>Phong Nha – Kẻ Bàng</b> – Hang Sơn Đoòng nằm trong vùng lõi của Vườn Quốc gia Phong Nha – Kẻ Bàng, tỉnh Quảng Bình.</p>
          </div>
          <div class="col" >
              
                  <img class="hinh1 rounded" src="images/banahill.png" >
              <p class="text2"><b>Bà Nà Hills</b> - Tour Bà Nà Hills 1 ngày khởi hành hàng ngày từ Đà Nẵng được thiết kế với lịch trình chi tiết, thời gian vui chơi bất tận.
                  </p>
          </div>
          <div class="col" >      
              <a href="kdlsthoanghao_vl.html">
                  <img class="hinh1 rounded" src="images/culaocham.png"></a>
              <p class="text2"> <b>Cù Lao Chàm</b> – 
                Bãi Xếp Cù Lao Chàm là cái tên được biết đến là “hòn ngọc thô” hút hồn bao người mê du lịch.
                  </p>
          </div><div class="col" >
              <a href="logachmangthit_vl.html">
                  <img class="hinh1 rounded" src="images/daolyson.png" ></a>
              <p class="text2"><b>Đảo Lý Sơn</b> - Lý Sơn trước đây được gọi là cù lao Ré mà theo cách lý giải của dân gian là "cù lao có nhiều cây Ré".
              </p>
          </div>
        </div>
      </div>

      <!-- mien bac -->
      <div class="gioithieu_mt" >
        <div class="container d-flex ">
          <div class=" p-3">
            <h1>Chào các bạn đến với miền Bắc vùng cao non nước</h1>
            <p class="text-justify">Nếu có ai hỏi về những cảnh đẹp miền Bắc, chắc chắn khách du lịch sẽ gọi tên Sapa đầu tiên. Và nếu có thể dùng những từ ngắn gọn nhất để nói về Sapa thì chỉ có thể là tuyệt đẹp. Sa Pa là một thị trấn vùng cao ở phía Tây Bắc Việt Nam, nơi quanh năm mây mờ che phủ và những thửa ruộng bậc thang trải dài như dẫn lối đến thiên đường Với cảnh quang thiên nhiên hùng vĩ, ngoạn mục, cùng nền văn hóa dân tộc vùng cao  phong phú, đặc sắc, Sa Pa  “mê hoặc” tất cả du khách khi đặt chân đến đây...
            </p>
           
          </div>
          <img src="images/sapa.png" alt="" width="350px" height="350px">
        </div>
      </div>

      <div class="welcom container">
        <h1>Địa điểm nổi bật</h1>
        <div class="row">
          <div class="col" >
              <a href="chonoi_vl">
                  <img class="hinh1 rounded" alt="" src="images/trangan.png" ></a>
              <p class="text2"><b> Tràng An</b> – Trong khi mọi người kéo nhau đi ngắm hoa tam giác mạch nở, thì tôi lại lẳng lặng xuôi dòng Tràng An để tìm chút bình yên thư thái.</p>
          </div>
          <div class="col" >
              <a href="chuaphuochau_vl.html">
                  <img class="hinh1 rounded" alt="" src="images/vinhalong.png" ></a>
              <p class="text2"><b>Vịnh Hạ Long</b> - Nơi đây được ví như mỏ vàng du lịch với nhiều cảnh quan thiên nhiên và cuộc sống con người khá hoang sơ và thanh bình.
                  </p>
          </div>
          <div class="col" >      
              <a href="kdlsthoanghao_vl.html">
                  <img class="hinh1 rounded" alt="" src="images/mocchau.png" ></a>
              <p class="text2"> <b>Mộc Châu</b> – 
                Không nóng bức và oi ả như mùa hạ, cũng không lạnh lẽo như mùa đông, có lẽ mùa thu là mùa được nhiều người yêu thích nhất.
                  </p>
          </div><div class="col" >
              <a href="logachmangthit_vl.html">
                  <img class="hinh1 rounded" alt="" src="images/maichau.png" ></a>
              <p class="text2"><b>Mai Châu</b> - Mỗi mùa, cảnh vật nơi đây lại mang trong mình vẻ đẹp riêng, mùa đông là ruộm vàng hoa cải thì đầu xuân, mận lại nở trắng trời.
              </p>
          </div>
        </div>
      </div>
    </main>
</template>