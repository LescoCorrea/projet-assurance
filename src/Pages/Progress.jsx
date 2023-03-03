import React, {useState} from 'react'
import { Line } from 'rc-progress'

const Progress = () => {

  const [percentage, setPercentage] = useState(90);
  return (
    <div>
      <section class="skills" data-aos="fade-up">
        <div class="container">

          <div class="section-title">
            <h2>Nos Compétences</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div class="skills-content">
            Compétence: {percentage}%
            <div style={{ margin: 15 }}>

                <Line  percent={percentage} strokeColor='lightblue' strokeWidth={2} trailColor="#0b212d" trailWidth={2} strokeLinecap="round" />
            </div>

          </div>
          <button style={{ backgroundColor: '#0b212d', color: "white", borderRadius: 15,border: 'none', fontSize: 16, padding: 5, marginLeft: 20}} onClick={() => setPercentage(percentage + 1 )}>Augmenter</button>
          <button style={{ backgroundColor: '#0b212d', color: "white",borderRadius: 15,border: 'none', fontSize: 16, padding: 5, marginLeft: 20}} onClick={() => setPercentage(percentage - 1 )}>Diminuer</button>

        </div>
      </section>
    </div>
  )
}

export default Progress
