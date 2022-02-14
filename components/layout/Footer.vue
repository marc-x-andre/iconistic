<template>
  <div class="footer row">
    <div class="empasi col-1">
      <p>+++++++++++++++</p>
      <p>+++++++++++++++</p>
    </div>
    <div class="col-11">
      <br />
      <p>About</p>
      <p>Instagram</p>
      <br />
      <p>Terms</p>
      <p>Back to top</p>
      <p style="float: right;">Love of wisdom (and material)</p>
      <br />
      <p>Site by marc-x-andre</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  display: flex;
  margin: 5em 1em 2em;
}
.empasi {
  display: flex;
  overflow-wrap: anywhere;
  line-height: 1em;
  letter-spacing: 2em;
  overflow: hidden;
  p+p {
    padding-top: 2em;
  }
}
</style>