<template>
  <div id="dashboard">
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-3">
              <CartList/>
            </div>
            <div class="column is-9">
              <ProductList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from '../../cart/components/CartList.vue';
import ProductList from '../../product/components/ProductList.vue';

export default {
	components: {
		CartList,
		ProductList
	}
};
</script>

<style scoped>
#dashboard {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

@media screen and (min-width: 769px) {
	#dashboard {
		height: 100%;
	}
}
</style>
