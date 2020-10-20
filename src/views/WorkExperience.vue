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
                <h2>Work Experience</h2>
              </div>
              <ul class="resume-list">
                <li>
                  <h2>Feb 2020 – May 2020</h2>
                  <h3>Advanced TEK International Corp</h3>
                  <h4>Intern of Management Information System Department</h4>
                  <h5 style="text-align: left;">Built a website with application of session on my own.</h5>
                  <div style="text-align: left;">
                  In the early part of this project, I played the role of System Analyst to consult with the interviews for the needs of users who played by department manager and System Designer at the same time. <br>
                  When most of needs were confirmed, I worked as a Programmer to build the web.
                  </div>
                  <h5 style="text-align: left;">Used VueJS with Quasar to build web.</h5>
                  <div style="text-align: left;">
                  Designed the user interface.<br>
                  Analyzed the request and response  parameter.<br>
                  Concatenate API.
                  Using GitHub with team member
                  </div>
                </li>
                <li>
                  <h2>May 2019 – Dec 2019</h2>
                  <h3>Sinopac Securities</h3>
                  <h4>Intern of Information Technology Department</h4>
                  <h5 style="text-align: left;">Worked in Robot Process Automation (RPA) project team. Contribute to reducing operation time and artificial error in various departments’ work.</h5>
                  <div style="text-align: left;">
                  Developed on UiPath using Visual Basic.net.<br>
                  Communicated with users and realize their needs.<br>
                  Debug on users’ environment.
                  </div>
                </li>
                <li>
                  <h2>Mar 2019 – Dec 2019</h2>
                  <h3>Winwintutor online tutor</h3>
                  <h4>Online Tutor</h4>
                  <div style="text-align: left;">
                  Mainly teach English to junior high school students.
                  Analyzed various students’ learning situation to figure out the best way to prove their grade.
                  </div>
                </li>
                <li>
                  <h2>Mar 2013– Jul 2013</h2>
                  <h3>Chen-Li Educational Group</h3>
                  <h4>Administrative Assistant of Admission Division</h4>
                  <div style="text-align: left;">
                  Analyzed different kinds of students’ ability and recommend them which class is suitable for them.
                  Followed the students’ learning situation and informed to their parents appropriately.
                  Communicated with students’ parents when they had question about courses.
                  </div>
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
