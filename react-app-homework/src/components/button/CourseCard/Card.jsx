import React from 'react';
import "./card.css"


function CourseCard({ course }) {
  return (
    <div className={`card ${course.isMyCource ? 'my-course' : ''}`}>
      <div className="image__container">
        <img src={course.image} alt="" />
        <div className="level">{course.level}</div>
      </div>
      <h3 className="card__title">{course.title}</h3>

      <div className="card__info">
        <div className="user">
          <img src={course.user.avatar} alt={course.user.name} />
          <p>{course.user.name}</p>
        </div>
        <div className="rating">
          <p>{course.rating}</p>
        </div>
      </div>
      {course.isMyCource ? (
        <div className="my-course-info">
          <progress value={course.finishedModules} max={course.modules}>
            {((course.finishedModules / course.modules) * 100).toFixed(0)}%
          </progress>
          <div className="card__info">
            <p>{`${course.finishedModules} / ${course.modules} Modules`}</p>
            <div>{`${((course.duration / 3600) * 100).toFixed(0)} %`}</div>
          </div>
        </div>
      ) : (
        <div className="card__info">
          <div>{`${course.students} Student${course.students !== 1 ? 's' : ''}`}</div>
          <div>{`${course.modules} Modules`}</div>
          <div>{`${(course.duration / 3600).toFixed(0)}h ${((course.duration % 3600) / 60)}m`}</div>
        </div>
      )}
    </div>
  );
}

export default CourseCard;
