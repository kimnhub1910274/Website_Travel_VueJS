<script>
    import TownCard from "@/components/TownCard.vue";
    import InputSearch from "@/components/InputSearch.vue";
    import List from "@/components/List.vue";
    import TownService from "@/services/town.service";

    export default {
        components: {
            TownCard,
            InputSearch,
            List,
        },
        data() {
            return {
                towns: [],
                activeIndex: -1,
                searchText: "",
            };
        },
        watch: {
            // Giám sát các thay đổi của biến searchText.
            // Bỏ chọn phần tử đang được chọn trong danh sách.
            searchText() {
                this.activeIndex = -1;
            },
        },
        computed: {
            // Chuyển các đối tượng town thành chuỗi để tiện cho tìm kiếm.
            townStrings() {
                return this.towns.map((town) => {
                    const { name, description1 } = town;
                    return [name, description1].join("");
                });
            },
            // Trả về các town có chứa thông tin cần tìm kiếm.
            filteredTowns() {
                if (!this.searchText) return this.towns;
                return this.towns.filter((_town, index) =>
                this.townStrings[index].includes(this.searchText)
                );
            },
            activeTown() {
                if (this.activeIndex < 0) return null;
                    return this.filteredTowns[this.activeIndex];
                },
            filteredTownsCount() {
                return this.filteredTowns.length;
            },
        },
        methods: {
            async retrieveTowns() {
                try {
                    this.towns = await TownService.getAll();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveTowns();
                this.activeIndex = -1;
            },
        },
        mounted() {
            this.refreshList();
        },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    };
</script>


<template>
   <div class="">
      <div class="row">
        <div class="col-3 search container">
            <InputSearch v-model="searchText" />
        </div>
        <div class="">
            <div v-if="activeTown">
               
                <TownCard :town="activeTown" />
                <router-link
                    :to="{
                        params: { id: activeTown._id },
                    }"
                >
                </router-link>
            </div>
        </div>
    </div>
  <!-- main -->
  <main>
    <div class="container my-3 tinh"/>      
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <!-- miennam -->
          <h1>Miền Tây</h1>
          <div class="d-flex">
            <img src="https://statics.vinpearl.com/du-lich-mien-tay-nen-di-tinh-nao-2_1630686815.png" alt="" width="400px" height="500px">
            <div>
              <p class="center">
                  Miền Tây là tên gọi ngắn gọn của khu vực đồng bằng sông Cửu Long, đồng bằng sông Mê Kông hay miền Tây Nam Bộ. Khu vực này gồm 1 thành phố trực thuộc Trung ương là Cần Thơ và 12 tỉnh, thành khác nhau, bao gồm: An Giang, Tiền Giang, Kiên Giang, Hậu Giang, Long An, Trà Vinh, Sóc Trăng, Đồng Tháp, Vĩnh Long, Bạc Liêu, Cà Mau, Bến Tre.
              </p>
              <p class="center">
                  Do đều bắt nguồn từ sông mẹ Mê Kông nên các tỉnh miền Tây đều có cảnh quan thiên nhiên tươi đẹp và tạo nên một bản sắc văn minh sông nước đậm nét. Những địa điểm du lịch miền Tây Nam Bộ thường gắn liền với thiên nhiên, miệt vườn, kênh rạch… và đặc biệt là bạn có thể khám phá miền Tây bằng hình thức di chuyển bằng thuyền, bè cực độc đáo.

              Vậy du lịch miền Tây nên đi tỉnh nào? Hãy cùng tìm hiểu trong phần tiếp theo của bài viết này để dễ dàng lên lịch trình du lịch miền Tây tự túc nhé!    
              </p>
            </div>
          </div>
          <h1>Cùng điểm qua 12 tỉnh và 1 thành phố của miền Tây</h1>
          <div class="">
            <List
                v-if="filteredTownsCount > 0"
                :towns="filteredTowns"
                v-model:activeIndex="activeIndex"
            />
        </div>
        </div>
        </div>
    </main>
   </div>
</template>
<style>
.search{
  margin-right: -40px;
}
  .img-fluid{
    width: 350px;
    height: 250px;
    margin-bottom: 35px;
}
.container-fluid{
    margin-top: 10px;
    
}
h3{
  color:#27ae60;
}

.row-name-1{
    margin-top: -265px;
    color: white;
    padding: 10px;
    margin-bottom: 210px;
    
}
.row-name-2{
  margin-top: -265px;
  color: white;
  padding: 10px;
  margin-bottom: 210px;
}
.row-name-3{
  margin-top: -265px;
  color: white;
  padding: 10px;
  margin-bottom: 210px;
}
.row-name-4{
  margin-top: -265px;
  color: white;
  padding: 10px;
  margin-bottom: 210px;
}
  .row > .column {
    padding: 0 8px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
    
  }

  .column {
    float: left;
    width: 25%;
  }

 
  .close:hover,
  .close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }

  .mySlides {
    display: none;
  }

  .cursor {
    cursor: pointer;
  }

  /* Next & previous buttons */
  

  img {
    margin-bottom: -4px;
  }

  .caption-container {
    text-align: center;
    background-color: black;
    padding: 2px 16px;
    color: white;
  }

  .demo {
    opacity: 0.6;
  }

  .active,
  .demo:hover {
    opacity: 1;
  }

  img.hover-shadow {
    transition: 0.3s;
  }

  .hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
.h1_diadiem{
  font-family: 'Great Vibes', Helvetica, sans-serif;
  color: #48a497;
 }

 /* drowdown */
 .jui-dropdown {
  position: relative;
  position: inline-block;
}

.jui-dropdown__select {
  border-radius: 2px;
  border: 2px solid #48a497;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 16px;
  height: 40px;
  user-select: none;
  cursor: pointer;
  text-overflow: ellipsis;
  outline: none;
  background: #48a497;
  color: #fff;
    
}

.jui-dropdown--disabled {
  opacity: 0.5;
  pointer-events: none;
}
.jui-label {
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
}

</style>