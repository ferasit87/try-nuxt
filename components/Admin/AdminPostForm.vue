<template>
    <div>
        <form @submit.prevent="onSave">
                 <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        
                    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        
                    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
        
                    <AppControlInput
                        control-type="textarea"
                        v-model="editedPost.content">Content</AppControlInput>
                        
                    <AppButton type="submit">Save</AppButton>
                            
                    <AppButton
                            type="button"
                            style="margin-left: 10px"
                            btn-style="cancel"
                            @click="onCancel">Cancel</AppButton>
            </form>
    </div>
</template>
<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'



export default {
    components :{
        AppButton,
       AppControlInput,
    },
    data (){
        return {
            editedPost :{
                author : 'test',
                title : 'test',
                thumbnail : 'test',
                content : '',
                preview : ''

            }
        }
    },
    methods :{
        onCancel (){
            this.$router.push('/admin');
        },
        onSave(){
            console.log(this.editedPost);
        }

    },
    props : ["post"],
    created() {
        if (this.post)
        {
            this.editedPost=this.post
            console.log(this.post);
        }
    },
}
</script>
<style scoped>

</style>
