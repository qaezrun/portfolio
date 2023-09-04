import React from 'react'
import './projectHolder.css'
import {TbBrandCSharp} from 'react-icons/tb'
import {BiLogoJava,BiLogoJavascript,BiLogoHtml5,BiLogoAndroid,BiLogoFirebase,BiLogoMongodb,BiLogoReact} from 'react-icons/bi'
import {DiNodejs} from 'react-icons/di'
import {PiFileCss} from 'react-icons/pi'
import {SiGodotengine} from 'react-icons/si'

import bgfieldmobile from '../Images/mobiledevbg.jpg'
import bgfieldweb from '../Images/webdevbg.jpg'
import bgfieldgame from '../Images/gamedevbg.jpg'

function ProjectHolder() {

    const iconsTags ={
        'C-SHARP': <TbBrandCSharp/>,
        'JAVASCRIPT':<BiLogoJavascript/>,
        'HTML': <BiLogoHtml5/>,
        'CSS': <PiFileCss/>,
        'JAVA': <BiLogoJava/>,
        'GDScript': <SiGodotengine/>,
        'Android Studio': <BiLogoAndroid/>,
        'NodeJs': <DiNodejs/>,
        'Firebase': <BiLogoFirebase/>,
        'MongoDb': <BiLogoMongodb/>,
        'ReactJS': <BiLogoReact/>
    }
    const diffFields = [
        {
            image:bgfieldmobile,
            title:'Mobile Development',
            desc:'These projects are just basic but somehow it show how the way I see things and create things.',
            tags:['Android Studio','JAVA']
        },
        {
            image:bgfieldweb,
            title:'Web Development',
            desc:'Most of the projects here are just front-end made on WordPress and Elementor plugin.',
            tags:['HTML','CSS','JAVASCRIPT']
        },
        {
            image:bgfieldgame,
            title:'Game Development',
            desc:'These projects are 2D games made from two different engine which is Unity and Godot.',
            tags:['C-SHARP','GDScript']
        }
    ];

    return (
        <div className='cards-container'>
            {diffFields.map((field, index) => (
                <div className='cards-Holder' key={index}>
                    <div className="cards">
                        <div className="image-holder">
                            {/* Assuming you want to use the "image" property from your data */}
                            <img src={field.image} alt={field.title} />
                        </div>
                        <div className="cards-info">
                            <h4>{field.title}</h4>
                            <p>{field.desc}</p>
                        </div>
                        <div className="cards-tag">
                            {field.tags.map((tag, tagIndex) => (
                                <div className="cards-tag-data" key={tagIndex}>
                                    {iconsTags[tag]} {/* Render the icon component */}
                                    <p>{tag}</p> {/* Render the tag text */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectHolder