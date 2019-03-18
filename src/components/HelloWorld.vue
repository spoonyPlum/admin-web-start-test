<template>
  <div class="hello">
    <div class="userForm">
      <el-form ref="form" :model="userForm" label-width="80px" size="mini">
        <el-form-item label="用户名">
          <el-input v-model="userForm.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userForm.password" show-password clearable></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" :loading="loading" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      userForm:{
        username:'admin',
        password:'123456'
      },
      loading:false
    }
  },
  methods:{
    onSubmit(){
      // this.$store.dispatch('Login',this.userForm)
      this.$store.dispatch('Login',this.userForm).then(()=>{
          this.loading = false;
          this.$router.push({path: '/'})
      }).catch((error)=>{
          if(error.code==500){
            this.$message({
              showClose: true,
              message: error.msg,
              type: 'error'
            });
          }else{
            this.$router.push({path: '/404'})
          }
          this.loading = false;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.userForm{
  display: flex;
  justify-content: center;
}
</style>
