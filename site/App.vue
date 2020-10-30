<template>
  <yui-container direction="vertical">
    <yui-header height="80px" class="app-header">
      <yui-container direction="horizontal">
        <yui-aside width="180px">
          <yui-link
            class="app-logo"
            type="image"
            image="/yao-ui.png"
            width="180px"
            height="60px"
            href="#"
          ></yui-link>
        </yui-aside>
        <yui-main>
          header nav
        </yui-main>
      </yui-container>
    </yui-header>
    <yui-container
      direction="horizontal"
      :style="{ height: 'calc(100vh - 80px)' }"
    >
      <yui-aside width="300px">Aside</yui-aside>
      <yui-container direction="vertical">
        <yui-main>
          <yui-link type="primary" href="/yao-ui.png" icon="archive"
            >测试</yui-link
          >
        </yui-main>
        <yui-footer height="120px">Footer</yui-footer>
      </yui-container>
    </yui-container>
  </yui-container>
</template>

<style lang="stylus">
body
  margin 0
  padding 0
  height 100%
</style>

<style lang="stylus" scoped>
.app-logo
  margin 10px 0

.app-header
  box-shadow 0 0 5px #eeeeee, 0 0 2px 1px #dddddd
</style>