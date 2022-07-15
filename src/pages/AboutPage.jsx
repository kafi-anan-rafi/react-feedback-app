import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../component/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React App to leave feedback for a product or services</p>
        <p>Version: 1.0.0</p>
        <Link to='/'>Back To Home</Link>
      </div>
    </Card>
  )
}

export default AboutPage;