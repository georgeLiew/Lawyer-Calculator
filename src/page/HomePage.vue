<template>
  <div class="hero-image">
      <div class="hero-text">
         <h1>MySolicitor</h1> 
         <p>A platform for Malaysia lawyer discussion</p>
        </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
/* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/banner.jpg");

  /* Set a specific height */
  height: 100%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height:500px;

/* Place text in the middle of the image */
  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #a2a990;
    font-size:40px;
    }
}


</style>
