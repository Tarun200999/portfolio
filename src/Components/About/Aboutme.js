import React from 'react'
import './aboutme.css'

function Aboutme() {
  const greeting = () => {
    var today = new Date()
    var curHr = today.getHours()
    if (curHr < 12) {
      return 'Good Morning'
    } else if (curHr < 18) {
      return 'Good Afternoon'
    } else {
      return 'Good Evening'
    }
  }
  return (
    <>
      <div class="container">
        <div className="section-title">
          <h2>ABOUT</h2>
          <h3>me ,</h3>
        </div>
        <div class="row">
          <div className="col-lg-12">
            <div className="about_content">
              <h3>Hello, {greeting()}</h3>
              <p>
                My name is Tarun , I am Coder and Web Developer. I am passionate
                about software developement.I am hardworking and always try to
                learn new things.
              </p>
            </div>
            <div className="github_data">
              <img src="https://github-readme-stats.vercel.app/api?username=tarun200999&count_private=true&theme=react&hide_border=0" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme
