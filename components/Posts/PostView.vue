<template>
    <div class="single-post-page">
        <section class="post">
            <h1> {{post.title}} </h1>
            <div class="post-details">
                <div>Last updated at {{ post.lastUpdate }}</div>
                <div> writen by {{ post.author }}</div>

            </div>
            <p class="post-content"> {{ post.content }} </p>
        </section>
        <section class="post-feedback">
            <p>let me know somthing <a href="mailto:feedback@myferad.cin">feedback@myferad.cin</a></p>
        </section>
    </div>
</template>
<script>
export default {
    props :{
        post :{
            required : true
        }
    }
}
</script>
