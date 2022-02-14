<template>
  <div class="row">
    <div class="navigation col-8">
      <NuxtLink class="noline" to="/products">
        <h1>
          Philoistic
       </h1>
      </NuxtLink>
      <NuxtLink to="/products">
        products
      </NuxtLink>
    </div>
    <div class="actions col-4">
      <button class="btn">cart</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.row {
  display: flex;
  margin: 2em 1em;
  .navigation, .actions {
    display: flex;
    align-items: center;
  }
  .navigation {
    h1 {
      margin-right: 2em;
    }
    a {
      margin-right: 1.5em;
    }
  }
  .actions {
    justify-content: right;
  }
}
</style>