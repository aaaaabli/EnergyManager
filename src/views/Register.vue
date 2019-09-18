<template>
  <div>
    <Header style="font-size:40px">能源管理系统</Header>
    <Col span="8"
         offset="8">
    <Card>
      <p slot="title">用户注册</p>
      <Form ref="formInline"
            :model="formInline"
            :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text"
                 v-model="formInline.user"
                 placeholder="用户名">
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password"
                 v-model="formInline.password"
                 placeholder="密码">
          </Input>
        </FormItem>
        <FormItem prop="email">
          <Input type="email"
                 v-model="formInline.email"
                 placeholder="邮箱">
          </Input>
        </FormItem>
        <FormItem prop="phone">
          <Input type="phone"
                 v-model="formInline.phone"
                 placeholder="手机号">
          </Input>
        </FormItem>
        <FormItem>
          <Button style="
                 margin:auto"
                  type="primary"
                  @click="handleSubmit('formInline')">注册</Button>
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
          password: "",
          email: "",
          phone: ""
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
          ],
          email: [
            {
              required: true,
              message: "请填写邮箱",
              trigger: "blur"
            }
          ],
          phone: [
            {
              required: true,
              message: "请填写手机号",
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
      register() {
        this.$router.push({ path: "/login" });
      },
      handleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.register();
          } else {
            this.$Message.error("登陆失败");
          }
        });
      }
    }
  };
</script>
