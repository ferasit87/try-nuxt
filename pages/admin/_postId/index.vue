<template>
    <div class="admin-post-page">
        <section class="update-form">
            <app-admin-post-form :post="post" />
        </section>
    </div>
</template>


<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import data from '@/assets/data' 

export default {
    layout : "admin",
    components :{
        AppAdminPostForm : AdminPostForm,
    },
    data () {
        return{            
            post : data.allPosts[this.$route.params.postId-1]
        }        
    },
    created() {
        console.log(this.$route);
    },  
}
</script>
<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
