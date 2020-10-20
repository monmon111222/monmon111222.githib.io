<template>
  <div>
    <div id="colorlib-page">
      <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" @click="burgerMenu"><i></i></a>
      <aside id="colorlib-aside" role="complementary" class="js-fullheight text-center">
        <h1 id="colorlib-logo"><a href="#">Bonnie<span>.</span></a></h1>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li class="colorlib-active"><a>Home</a></li><br>
            <li><a @click="Go('WorkExperience')">Work Experience</a></li><br>
            <li><a>Skills</a></li><br>
            <li><a @click="Go('Education')">Education</a></li><br>
            <li><a>Portfolio</a></li><br>
          </ul>
        </nav>
        <div class="colorlib-footer">
          <ul>
            <li><a href="#"><i class="icon-facebook"></i></a></li>
            <li><a href="#"><i class="icon-twitter"></i></a></li>
            <li><a href="#"><i class="icon-instagram"></i></a></li>
            <li><a href="#"><i class="icon-linkedin"></i></a></li>
          </ul>
        </div>
      </aside>
    </div>
    <div id="colorlib-main">
      <div class="hero-wrap js-fullheight" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="js-fullheight d-flex justify-content-center align-items-center">
        <div class="col-md-8 text text-center">
        <div id="avatar" class="img mb-4"></div>
        <div class="desc">
          <h2 class="subheading">Hello I'm</h2>
          <h1 class="mb-4">Bonnie Huang</h1>
          <p class="mb-4">I am A Blogger Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    burgerMenu () {
      event.preventDefault()
      if (document.body.classList.contains('offcanvas')) {
        document.body.classList.remove('offcanvas')
      } else {
        document.body.classList.add('offcanvas')
      }
    },
    Go (Name) {
      this.$router.push(Name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/open-iconic-bootstrap.min.css';
@import '../styles/animate.css';
@import '../styles/style.css';
@import '../styles/flaticon.css';
@import '../styles/icomoon.css';
#avatar {
  background-image: url(../images/author.jpg);
  margin-top: 2%;
  background-position: inherit;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
