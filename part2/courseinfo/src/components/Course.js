import React from 'react'


const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </>
    )
}

const Part = ({ part }) => {
    // console.log(part.name);
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => {
        p = p.exercises
        console.log(s + p)
        return s + p
    }, 0)

    return (
        <strong>
            total of {total} exercises
        </strong>
    )
}

export default Course