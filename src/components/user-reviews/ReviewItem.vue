<template>
  <div class="container">
    <div class="quote">"</div>

    <div class="quoteDescription">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vitae illum
      reprehenderit? Non mollitia dignissimos error distinctio praesentium.
      Saepe minima corrupti nostrum omnis veniam asperiores cum, illum error
      doloribus itaque!
    </div>
    <div class="id-display">
      <v-avatar size="108">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <div>Houcem Maiza</div>
      <div>Founder and CEO of GALACTECH</div>
    </div>
  </div>
</template>

<style scoped>
div .quote {
  margin-top: 1rem;
  color: #ff8164;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

div .quoteDescription {
  margin-bottom: 1rem;
  color: white;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif *;
}
div .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
div .id-display {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 16px;
}
</style>