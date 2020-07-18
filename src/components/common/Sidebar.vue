<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapses"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
      name: "Sidebar",
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters(['collapses','showLoading']),
        onRoutes() {
            return this.$route.path.replace('/', '');
        },
        items() {
            let t=this.showLoading;
            let guodu=[];
            if(t==="root"){
               guodu=[
                {
                    icon: 'el-icon-s-home',
                    index: 'userCarousel',
                    title: '系统首页'
                },
                 {
                    icon: 'el-icon-user',
                    index: 'userManagement',
                    title: '人员管理'
                },
                {
                    icon: 'el-icon-s-check',
                    index: '3',
                    title: '园区管理',
                    subs:[
                         {
                            icon:'el-icon-lx-cascades',
                            index:'equipmentInterface',
                            title:'设备报修',
                        },
                        {
                            icon:'el-icon-lx-cascades',
                            index:'parkDistribution',
                            title:'园区分配',
                        },


                    ]
                },
                {
                    icon: 'el-icon-coin',
                    index: '4',
                    title: '园区仓库',
                    subs:[
                        {
                            icon: 'el-icon-lx-copy',
                            index: 'warehouseManagement',
                            title: '仓库信息'
                        },
                             {
                            icon: 'el-icon-lx-copy',
                            index: 'warehouseApply',
                            title: '仓库审批'
                        },
                    ]
                },
                {
                    icon: 'el-icon-apple',
                    index: '5',
                    title: '作物收成',
                     subs:[
                        {
                            icon: 'el-icon-lx-copy',
                            index: 'WarehouseOutgoingRecord',
                            title: '作物审批'
                        },
                    ]
                },
                 {
                    icon: 'el-icon-notebook-2',
                    index: 'wikipediaManagement',
                    title: '信息管理'
                },
            ];
            }else{
                console.log("ssssssssss");
                guodu= [
                {
                    icon: 'el-icon-s-home',
                    index: 'userCarousel',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-edit',
                    index: '2',
                    title: '园区管理',
                    subs:[
                        {
                            icon:'el-icon-lx-cascades',
                            index:'scheduleHistory',
                            title:'园区历史',
                        },
                        {
                            icon:'el-icon-lx-cascades',
                            index:'schedule',
                            title:'日常管理',
                        },
                         {
                            icon:'el-icon-lx-cascades',
                            index:'equipmentManagement',
                            title:'设备管理',
                        },
                    ]
                },
                {
                    icon: 'el-icon-search',
                    index: '3',
                    title: '病情管理',
                    subs:[
                        {
                            icon: 'el-icon-lx-copy',
                            index: 'diseaseDiagnosis',
                            title: '病症诊断'
                        },
                        {
                            icon: 'el-icon-lx-copy',
                            index: 'diseaseRecord',
                            title: '诊断历史'
                        },
                    ]
                },
                {
                    icon: 'el-icon-coin',
                    index: '4',
                    title: '园区仓库',
                    subs:[
                        {
                            icon: 'el-icon-lx-copy',
                            index: 'warehouseManagement',
                            title: '仓库信息'
                        },
                             {
                            icon: 'el-icon-lx-copy',
                            index: 'warehouseApply',
                            title: '仓库审批'
                        },
                    ]
                },
                {
                    icon: 'el-icon-apple',
                    index: '5',
                    title: '作物收成',
                     subs:[
                        {
                            icon: 'el-icon-lx-copy',
                            index: 'warehouseCrops',
                            title: '仓内作物'
                        },
                        {
                            icon: 'el-icon-lx-copy',
                            index: 'WarehouseOutgoingRecord',
                            title: '出库历史'
                        },
                    ]
                },
            ];
            };
            console.log(guodu);
            return guodu;
        }

    },
        created() {

    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    color: #000;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
