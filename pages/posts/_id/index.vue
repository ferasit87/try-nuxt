<template>
    <div>
      <app-post-view
      :post="post"
      ></app-post-view> 
    </div>
</template>
<script>
import PostView from '@/components/Posts/PostView'
import data from '@/assets/data'
export default {
  components :{
    AppPostView: PostView,
  }, 
  asyncData(context, callback){    
    setTimeout(()=>{
      callback(null, {post : data.allPosts[context.params.id-1]});      
    },200);
  } 
}
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
