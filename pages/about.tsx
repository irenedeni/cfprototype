import React, { useState, useEffect, useMemo } from "react"; 
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="b-text  c-section" id="learn-more">
        <div className="o-wrapper">
          <h1>About Us</h1>
          <br/>
          <p>Now, this is a story all about how, My life got flipped-turned upside down, And I'd like to take a minute
          Just sit right there, I'll tell you how I became the prince of a town called Bel-Air.</p>
          <br />
          <p>In West Philadelphia born and raised
              On the playground was where I spent most of my days
              Chillin' out, maxin', relaxin', all cool
              And all shootin' some b-ball outside of the school
              When a couple of guys who were up to no good
              Started making trouble in my neighborhood
              I got in one little fight and my mom got scared
              She said, "You're movin' with your auntie and uncle in Bel-Air"
          </p>
        </div>
      </section>
    </Layout>
  )
}
