import React from 'react'
import WeTransform from '../../components/HomeComponents/WeTransform'
import ProjectCarousel from '../../components/HomeComponents/ProjectCarousel'
import ReadyToKick from '../../components/HomeComponents/ReadyToKick'
import WeAreDesign from '../../components/HomeComponents/WeAreDesign'
import DontLet from '../../components/AboutUs/DontLet'


function index() {
  return (
    <>
    <WeTransform/>
    <ProjectCarousel/>
    <ReadyToKick/>
    {/* <WeAreDesign/> */}
             <WeAreDesign
                backgroundImage="/images/Bluebkg.png"
                imageUrl="/images/3D circless.png"
                title="We’re a design driven team"
                firstHeading=" Designing world-class products & brands"  
                firstDescription="We’re We've helped top startups and other enterprises turn their ideas and goals into refined products and brands that generate millions in revenue."
                secondHeading="Pushing boundaries & designers everywhere"
                secondDescription="Our designs are inspiring millions of people across social media and product teams. We shape new trends and push the boundaries."
            />
             <WeAreDesign
                backgroundImage="/images/Darkblue.png"
                imageUrl="/images/feasble.png"
                title="We get things done, fast & feasible "
                firstHeading="Agile and transparent"  
                firstDescription="Forget a useless 80-slide presentation. We focus on design deliverables every week. And when we commit to a deadline, we make it happen. Always."
                secondHeading="Flexible collaboration & payments"
                secondDescription="Whether you're starting from scratch and need an autonomous team or are looking for staff augmentation with a lot of collaboration, we've got you covered."
            />

           <WeAreDesign
                backgroundImage="/images/Darkblue2.png"
                imageUrl="/images/affordable.png"
                title="We made world-class services affordable."
                firstHeading="We make the complex simple"  
                firstDescription="From neurotech companies to admin tools with intricate access policies, we understand your product and simplify it for the people who use it."
                secondHeading="Commited to putting a smile on people’s faces"
                secondDescription="Get continuous high-quality design & fast turnaround at a flat rate to help scale your business. It helps you save time on hiring and career laddering and avoid the hustle of dealing with expensive agencies."
            />
            <DontLet/>

    </>
  )
}

export default index