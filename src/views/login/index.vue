<template>
  <div class="loginForm">
    <el-container>
      <el-card class="login-form-layout">
        <h2 class="login-title color-main">admin-web-start</h2>
        <el-form ref="form" :model="userLoginForm" size="mini" class="form">
          <el-form-item>
            <el-input v-model="userLoginForm.username" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="userLoginForm.password" show-password clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loading" @click="onSubmit" class="btn-submit">登入</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <img :src="login_bg" class="login-center-layout">
    </el-container>
  </div>
</template>

<script>
  import login_bg from '@/assets/images/login_bg.png'

  export default {
    name: "index",
    data() {
      return {
        userLoginForm: {
          username: 'admin',
          password: '123456'
        },
        loading: false,
        login_bg
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('Login', this.userLoginForm).then(() => {
          this.loading = false;
          this.$router.push({path: '/'})
        }).catch((error) => {
          if (error.code == 500) {
            this.$message({
              showClose: true,
              message: error.msg,
              type: 'error'
            });
          } else {
            this.$router.push({path: '/404'})
          }
          this.loading = false;
        })
      }
    }
  }
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 300px;
    margin: 140px auto;
    border-top: 10px solid #3221FF;
  }

  .login-title {
    text-align: center;
  }
  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 190px;
  }
  .btn-submit{
    width: 100%;
  }
</style>
