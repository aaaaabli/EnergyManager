<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal"
              theme="dark">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
            退出登录
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider :style="{background: '#fff'}">
          <Menu theme="light"
                width="auto"
                active-name="1">
            <MenuItem name="1"
                      to="/main/energymanager">能源管理</MenuItem>
            <MenuItem name="2"
                      to="/main/energycheck">能源质检</MenuItem>
            <MenuItem name="3"
                      to="/main/energyproduct">能源产绩</MenuItem>
            <MenuItem name="4"
                      to="/main/usermanager">用户管理</MenuItem>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>