import React, { Component } from 'react';

class Course extends Component {
    
    render ()
     {
        let  courseTitle=(new URLSearchParams(window.location.search)).get("courseTitle")
        debugger
        return (
            <div>
                <h1>{this.props.match.params.courseId}</h1>
            <p>{courseTitle}</p>
            </div>
        );
    }
}

export default Course;