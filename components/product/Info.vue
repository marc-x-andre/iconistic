<template>
  <div class="product">
    <div class="columns">
      <div class="title column">
        <p>poster</p>
        <h2>Philo</h2>
      </div>
    </div>
    <div class="columns">
      <div class="images column is-two-thirds">
        <b-carousel
          v-model="carousel"
        >
          <b-carousel-item v-for="(item, i) in 6" :key="i">
            <b-image
              class="image"
              :src="getImgUrl(i)"
            />
          </b-carousel-item>
          <template #indicators="props">
            <b-image
              class="al image"
              :src="getImgUrl(props.i)"
              :title="props.i"
            />
          </template>
        </b-carousel>
      </div>
      <div class="info column">
        <div class="columns">
          <div class="size column">
            <b-field grouped>
              <b-field
                label="Price"
              >
                <b-input icon="earth" value="4.99" disabled />
              </b-field>
              <b-field label="Size">
                <b-select placeholder="Select a size" icon="earth">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </b-select>
              </b-field>
            </b-field>
          </div>
        </div>
        <div>
          <b-button label="Add to cart" type="is-primary" />
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  methods: {
    getImgUrl (value) {
      return `https://picsum.photos/id/43${value}/800/800`
    }
  }
}
</script>
