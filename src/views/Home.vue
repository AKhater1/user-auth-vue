<template>
  <div class="home">
    <Header />
    <div class="participate container text-center mt-3 mb-2">
      <h2>Why Participate?</h2>
      <p class="lead">Due to the current environment, we’ve adapted all of our Lenovo activity to be online so you don’t miss out on
        anything!<br>
        We have online training courses &amp; webinars to give you information and tools on how our Lenovo products &amp; services
        are solutions for today’s very unique circumstances.<br>
        The more you engage with Lenovo, the more you stand a chance of winning!
      </p>
    </div>
    <div class="imgs-section text-center">
      <img src="../assets/elearning.png" />
      <img src="../assets/howto.png" />
      <img src="../assets/video.png" />
    </div>
    <div class="contact text-center">
      <h2>Contact Us</h2>
      <p>think-smarter@lenovomeaevents.com</p>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>

div {
  overflow-x: hidden;
}

h2 {
  margin-bottom: 40px;
}

.participate p {
  font-size: 21px;
  font-weight: 600;
}


.imgs-section, .contact {
  padding: 80px 0 60px;
  background-color: #000;
}

.imgs-section img {
  margin: 0 30px;
  width: 150px;
}

.contact {
  color: #fff;
}

.contact p {
  font-size: 20px;
}

</style>
