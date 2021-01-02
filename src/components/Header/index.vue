<template>
    <header id="header">
        <slot></slot> <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name : 'Header',
    props : {
        title : {
            type : String,
            default : ''
        }
    }
}
</script>

<style scoped>
#header{width:100%; height:50px; color: #9429ef; ; background: #ffb621; border-bottom: 1px solid #9be547; position: relative;}
#header h1{ font-size: 23px; text-align: center; line-height: 50px; font-weight: bold; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
