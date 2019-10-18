import React from 'react';

const Course = ({ course }) => {
    const part = course.parts;

    const total = part.reduce((s, p) => s + p.exercises, 0)
    
    const content = part.map(item => {
        return <div key={item.id}>{item.name} {item.exercises} </div>
    })
    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {content}
                <div>total of {total} exercises</div>
            </ul>
        </div>
    )
}

export default Course