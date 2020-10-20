<template>
  <div>
    <div id="colorlib-page">
      <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" @click="burgerMenu"><i></i></a>
      <aside id="colorlib-aside" role="complementary" class="js-fullheight text-center">
        <h1 id="colorlib-logo"><a href="#">Bonnie<span>.</span></a></h1>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li class="colorlib-active"><a @click="Go('Home')">Home</a></li><br>
            <li><a @click="Go('WorkExperience')">Work Experience</a></li><br>
            <li><a @click="Go('Skills')">Skills</a></li><br>
            <li><a @click="Go('Education')">Education</a></li><br>
            <li><a @click="Go('Portfolio')">Portfolio</a></li><br>
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
      <section class="resume-section">
        <div class="container-fluid">
          <div class="row">
            <div>
              <div class="section-title">
                <h2>Portfolio</h2>
              </div>
              <ul class="resume-list">
                <li>
                  <h2 style="text-align: left;">Win HouseAndorid Application</h2>
                  <h3>Graduation Project in Soochow University</h3>
                </li>
                <li>
                  <h2 style="text-align: left;">BIGONI  Shopping  Website</h2>
                  <h3>Project in Advanced TEK International Corp</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
@import '../styles/style2.css';
@import '../styles/flaticon.css';
@import '../styles/icomoon.css';
#avatar {
  background-image: url(../images/author.jpg);
  margin-top: 2%;
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
