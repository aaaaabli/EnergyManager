<template>
  <div>
    <Header style="font-size:40px">能源管理系统</Header>
    <Col span="8"
         offset="8">
    <Card>
      <p slot="title">用户登录</p>
      <Form ref="formInline"
            :model="formInline"
            :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text"
                 v-model="formInline.user"
                 placeholder="用户名">
          <Icon type="ios-person-outline"
                slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password"
                 v-model="formInline.password"
                 placeholder="密码">
          <Icon type="ios-lock-outline"
                slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button style="margin:auto"
                  type="primary"
                  @click="handleSubmit('formInline')">登录</Button>
          <Button style="margin-left:20px"
                  type="primary"
                  @click="register()">注册</Button>
        </FormItem>
      </Form>
    </Card>
    </Col>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: "",
          password: ""
        },
        ruleInline: {
          user: [
            {
              required: true,
              message: "请填写用户名",
              trigger: "blur"
            }
          ],
          password: [
            {
              required: true,
              message: "请填写密码",
              trigger: "blur"
            },
            {
              type: "string",
              min: 6,
              message: "密码不得少于6位",
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
      login() {
        this.$router.push({ path: "/main" });
      },
      register() {
        this.$router.push({ path: "/register" });
      },
      handleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.login();
          } else {
            this.$Message.error("登陆失败");
          }
        });
      }
    }
  };
</script>
