<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':collapses}">
      <v-tags></v-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <!-- <keep-alive> -->
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import { mapGetters} from 'vuex';
export default {
    data() {
        return {
tagsList:[],
        };
    },
        components: {
        vHead,
        vSidebar,
        vTags
    },



        computed: {
        ...mapGetters(['collapses','tags']),
    // tagsList:function () {
    //  let arr = [];
    //         for (let i = 0, len = tags.length; i < len; i++) {
    //             tags[i].name && arr.push(tags[i].name);
    //         }
    //     return arr;
    //     }
        },

                
     watch:{
      tags:function(old,newd){
     let arr = [];
            for (let i = 0, len = old.length; i < len; i++) {
                old[i].name && arr.push(old[i].name);
            }
        this.tagsList=arr;
        console.log(this.tagsList);
        }
         },
        created() {

           
    }
};
</script>
