import Vuex from 'vuex';
import data from '@/assets/data' 

const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts: [],
        },
        mutations :{
            setPosts(state, posts){
                state.loadedPosts=posts;
            }            
        },
        actions: {
            nuxtServerInit(vuexContext, context){                
                return new Promise((res, rej)=>{
                    setTimeout(()=>{
                    console.log(data);
                      vuexContext.commit('setPosts',data.allPosts);
                      res();      
                    },200);
                }); 
            },
            setPosts(vuexContext,posts){
                vuexContext.commit('setPosts', posts);
            } 
        },
        getters:{
            loadedPosts(state){
                return state.loadedPosts;
            }
        },        
    });
}

export default createStore