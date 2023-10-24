import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')



    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={12} />
                </h1>
                <p className='custom-paragrpah'>Hello! I'm Sami Shibli, a passionate computer science enthusiast hailing from Burlingame, CA. I'm currently immersed in the vibrant world of technology, pursuing a Bachelor of Science degree in Computer Science from Santa Clara University, with an anticipated graduation in December 2024.

                    My journey in the realm of computer science has been an exciting one, marked by a deep curiosity and a determination to unravel the complexities of the digital universe. I possess a strong foundation in programming languages such as C++, Javascript, and Python, and I have utilized these skills to create innovative and efficient solutions.

                    One of my proudest achievements is the development of a sophisticated Social Network platform in C++. I meticulously engineered intricate graph theory algorithms to optimize friend network management, resulting in a 30% reduction in processing times. This endeavor not only honed my technical prowess but also showcased my commitment to enhancing user experiences through intuitive design and seamless interactivity.

                    In a high-pressure environment, I spearheaded a team in the Inrix Hackathon, where we leveraged React, Express, HTML, and CSS to optimize routes using external APIs. This experience not only demonstrated my ability to thrive under pressure but also highlighted my problem-solving skills and knack for collaborative teamwork.

                    Beyond my technical expertise, I am deeply engaged in my community. As the Secretary of the Middle Eastern North African Club, I facilitated effective communication and decision-making processes, leading to a significant increase in club attendance and fundraising revenue. I've also served as a mentor and soccer coach, guiding young talents and instilling in them the values of teamwork, discipline, and perseverance.

                    In my free time, you'll find me scaling rock walls, exploring new coding challenges, or contributing to open-source projects on Github. I am not just a coder; I am a creative thinker, an avid learner, and a team player.

                    I am on a relentless pursuit of knowledge, innovation, and meaningful connections. Join me on this exciting journey, and let's create something extraordinary together.

                    Feel free to connect with me through the provided contact information. I am always open to collaboration, learning opportunities, and engaging discussions. Let's make a difference in the world of technology!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4f4' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>


            </div>
        </div>
    )
}
export default About