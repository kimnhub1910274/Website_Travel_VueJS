<template>
    <div class=" row">
        <div class="col-md-3">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <UserList
                v-if="filteredContactsCount > 0"
                :contacts="filteredContacts"
            />
            <p v-else>Không có liên hệ nào.</p>
            
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fa-solid fa-rotate-right"></i> Làm mới
                </button>
                
            </div>              
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeContact">
                <h4>
                    Chi tiết Liên hệ
                </h4>
               
            </div>
        </div>
    </div>
</template>

<script>
    import InputSearch from "@/components/InputSearch.vue";
    import UserList from "@/components/UserList.vue";
    import ContactService from "@/services/contact.service";

    export default {
        components: {
            InputSearch,
            UserList,
        },
        data() {
            return {
                contacts: [],
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
            // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
            contactStrings() {
                return this.contacts.map((contact) => {
                    const { name, img1, description1, img2, description2 } = contact;
                    return [name, img1, description1, img2, description2].join("");
                });
            },
            // Trả về các contact có chứa thông tin cần tìm kiếm.
            filteredContacts() {
                if (!this.searchText) return this.contacts;
                return this.contacts.filter((_contact, index) =>
                this.contactStrings[index].includes(this.searchText)
                );
            },
            activeContact() {
                if (this.activeIndex < 0) return null;
                    return this.filteredContacts[this.activeIndex];
                },
            filteredContactsCount() {
                return this.filteredContacts.length;
            },
        },
        methods: {
            async retrieveContacts() {
                try {
                    this.contacts = await ContactService.getAll();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveContacts();
                this.activeIndex = -1;
            },

            async removeAllContacts() {
                if (confirm("Bạn muốn xóa tất cả tỉnh?")) {
                    try {
                        await ContactService.deleteAll();
                        this.refreshList();
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            async goToAddContact() {
                this.$router.push({ name: "contact.create" });
            },
        },
        mounted() {
            this.refreshList();
        },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    };
</script>


 <style scoped>
    .page {
    text-align: left;
    max-width: 750px;
    margin: auto;
    }
</style> 