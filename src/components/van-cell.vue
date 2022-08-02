<template>
     <van-cell center :title="s_name" :label="name+'-'+s_name">
        <template #right-icon>
            <van-icon name="play-circle-o" size="20" @click="playFn"/>
        </template>
    </van-cell>
</template>

<script>
export default {
    props: {
        name: String,
        s_name: String,
        id: Number
    },
    methods: {
        playFn() {
            this.$router.push({
                name: "play",
                query: {
                    id: this.id
                }
            })
        }
    }
}
</script>

<style>

</style>