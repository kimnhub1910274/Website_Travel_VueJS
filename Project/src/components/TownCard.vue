<script>
    import townService from '../services/town.service';
    import VueEmbed from 'vue-pdf-embed';
    export default {
        components:{
            VueEmbed,
        },
        props:{
            id: { type: String, required: true },
            town:{type: Object, required:true},
            content: { type: Array,required:true, default:[{
                nameContent:'',
                content:''
            }] },
        },
        data() {
             return {
                content: [],
                town: [],
            };
        },
        methods:{
            async getContent(id) {
            try {
                var town = await townService.getContentById(id);
                console.log(town);
                this.content = town;
            } catch (error) {
               console.log(error);
            }
        },
        },
        created() {
        this.getContent(this.id);
    },

    };
</script>

<template>
    <div class="container">
        <div class="p-1">
           <h4><b> {{ town.name }}</b></h4>
           <h4><b> {{ content.nameContent }}</b></h4>
        </div>
        <div class="container">
        <img :src="'http://localhost:3000/assets/images/'+content.content" />
    </div>
        <main>     
      <div class="row">
          <div class="col-sm-8">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img :source="'http://localhost:3000/assets/images/'+content.content" class="d-block w-100 rounded" alt="..." data-bs-toggle="tooltip"
                          data-bs-placement="top" title="Cầu Cần Thơ">
                  </div>
                  <div class="carousel-item">
                      <img src="images/can-tho/1200px-Chùa_Ông_Cần_Thơ.jpg" class="d-block w-100 rounded" alt="..." data-bs-toggle="tooltip"
                      data-bs-placement="top" title="Chùa Ông">
                  </div>
                  <div class="carousel-item">
                      <img src="images/can-tho/du-lịch-cần-thơ-Saifgon-Star-Travel-752x440.jpg" class="d-block w-100 rounded" alt="..."  data-bs-toggle="tooltip"
                      data-bs-placement="top" title="Bến Ninh Kiều">
                  </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="row">
                  <div class="col-12">
                      <figure class="figure">
                          <img src="images/can-tho/dinh-binh-thuy-1024x495.jpg" class="chonoi-img figure-img img-fluid rounded" alt=""  data-bs-toggle="tooltip"
                          data-bs-placement="top" title="Đình Bình Thủy" >
                          
                      </figure>
                  </div>
                  <div class="col-12">
                      <figure class="figure">
                          <img src="images/can-tho/chonoi.jpg" class="logach figure-img img-fluid rounded "  alt="..." data-bs-toggle="tooltip"
                          data-bs-placement="top" title="Chợ nổi Cái Răng">
                          
                      </figure>
                  </div>
              </div>                   
          </div>
          <div class="p1">
              <h2>Về {{ town.name }} trải nghiệm </h2>
              <div class="row" >
                  <div class="col-5">
                      <img class="hinh1"  width="400px" margin-top="10px" src="../assets/images/cantho.jpg" alt="">
                  </div>
                  <div class="col-7">
                      <p class="text1 " style="text-align: justify; " >{{ town.description }}</p>
                  </div>
              </div>
          </div>
          <div class="p2">
              <h2>Điểm đến</h2>
              <div class="row">
                  <div class="item col">
                      <a href="">
                          <img class="hinh1 rounded" src="images/can-tho/2209.di_tich_va_du_lich_song_hanh_1.jpg" width="250px" height="210px"></a>
                      <p class="text2"><b>Khu di tích lịch sử chiến thắng Ông Hào</b> – Đây là công trình ghi lại chiến công oai hùng của quân và dân ta trong kháng chiến chống Mỹ xâm lược.</p>
                  </div>
                  <div class="item col">
                      <a href="">
                          <img class="hinh1 rounded" src="images/can-tho/cannhamautimcantho-1.jpg" width="250px" height="210px"></a>
                      <div class="text2"><b>Căn nhà màu tím</b> - Quán cà phê, phim trường ấn tượng ở Cần Thơ.
                          </div>
                  </div>
                  <div class="item col">      
                      <a href="">
                          <img class="hinh1 rounded" src="images/can-tho/chonoi.jpg" width="250px" height="210px"></a>
                      <div class="text2"><b>Chợ nổi Cái Răng</b> – Loại hình chợ độc đáo và đặc trưng của vùng đồng bằng sông Cửu Long mà không nơi nào trên đất nước Việt Nam có được.
                          </div>
                  </div>
                  <div class="item col">
                      <a href="">
                          <img class="hinh1 rounded" src="images/can-tho/du-lich-can-tho-52.jpg" width="250px" height="210px"></a>
                      <div class="text2"><b>Bến Ninh Kiều</b> - Biểu tượng của xứ Tây Đô.
                      </div>
                  </div>
                  <div class="item">
                    <a href="">
                        <img class="hinh1 rounded" src="images/can-tho/canh-song-nuoc-mien-Tay-tai-khu-du-lich-Hoa-Su.jpg" width="250px" height="210px"></a>
                    <div class="text2"><b>Khu du lịch Hoa Sứ</b> - Hài hòa giữa chất hiện đại và mộc mạc của miền Tây.
                    </div>
                </div>
              </div>
          </div>
          <div class="p3">
              <h2>Đặc trưng</h2>
              <div class="row">
                  <div class="col-12">
                      <p><b>Ăn uống</b>
                          <br>
                          Những món ăn đặc sản, món ăn vặt được ưa thích.                                </p>
                  </div>
                  <div class="col-12">
                      <div class="row align-items-center">
                          <div class="col">
                          <img src="images/can-tho/bánh tét.jpg" alt="" class="hinh2 rounded">
                              <p class="text3">Bánh tét lá cẩm</p>
                          </div>
                          <div class="col">
                          <img src="images/can-tho/bán xeo.jpg" alt="" class="hinh2 rounded">
                              <p class="text3" >Bánh xèo</p>
                          </div>
                          <div class="col">
                          <img src="images/can-tho/bun-mam-co-suong.jpg" alt="" class="hinh2 rounded">
                              <p class="text3">Bún mắm</p>
                          </div>
                      </div>
                      </div>
              </div>
          </div>  
          </div>
      </main>
    </div>
</template>