<template>
    <div class="admin-page">
        <section class="new-post">
            <app-button @click="$router.push('/admin/new-post')">
                Create Post 
            </app-button>
        </section>

        <section class="existing-posts">
            <h1>
                Existing List
            </h1>
                <app-post-list :posts="posts" :isAdmin="true"  />
        </section>
    </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'
import data from '@/assets/data' 
export default {
    layout : "admin",
  components :{
    AppPostList: PostList,
    AppButton
  },
   data(){
      return {
          posts : data.allPosts ,
      }
  }
}
</script>
<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
