<template>
    <div class="editor">
        <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        mode="default"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        mode="default"
        @onCreated="handleCreated"
      />
      <a-button type="primary" @click="getTextcontent">点我发请求获取数据</a-button>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {getText} from '../api'
 // 编辑器实例，必须用 shallowRef
 const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }


const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

onMounted(() => {
    getTextcontent()
})


//发送请求获取段子的函数
const getTextcontent = async() => {
    const result = await getText()
    if(result.status === 200){
        valueHtml.value = result.data.data[0].content
        console.log(result.data.data[0]);
    }
}


// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

</script>

<style>
.editor{
    width: 1200px;
    margin: auto;
}
</style>