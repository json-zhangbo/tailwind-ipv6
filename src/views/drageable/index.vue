
<template>
<div>
<!-- 拖拽元素 -->
<ul 
    @dragstart="dragStart"
    @dragend="dragEnd"
>
    <li 
        v-for="(val, key, index) in typeList"
        draggable 
        :data-type="key"
        :key="index + 1"
    >
        <span :class="val.icon"></span>
        <p>{{val.name}}</p>
    </li>
</ul>
<!-- 释放区域 -->
<div  class="view-content" @drop="drog" @dragover="dragOver">
</div> 
</div>

</template>
<!-- 拖拽元素列表数据 -->
<script >
import Banner from '@/commponents/Banner'
export default{

setup(){
    return {
     // com 为对应的视图组件，在释放区域显示
    typeList: {
        banner: {
            name: '轮播图',
            icon:'el-icon-picture',
            com: Banner
        },
        product: {
            name: '商品',
            icon: 'el-icon-s-goods',
            com: Product
        },
        images: {
            name: '图片',
            icon: 'el-icon-picture',
            com: Images
        },
    }
     
    }
    methods:{
        login=()=>{
            
        }
 
    // 拖拽类型
    handleDrag=()=>{
     console.log('handleDrag...')
    },
    dragStart=(e)=> {
        console.log('*************')
        this.type = e.target.dataset.type
    },

    dragOver=()=>{
        
        let className = e.target.className
        let name = className !== 'view-content' ? 'item' : 'view-content'
    
        // 组件的默认数据
        const defaultData = {
            type: this.type,    // 组件类型
            status: 2,          // 默认状态
            data: [],           // 基本数据
            options: {}         // 其他操作
        }
    
        if (name == 'view-content') {
            //...
        } else if (name == 'item') {
            //...
        }
    }
    }
}
}
</script>