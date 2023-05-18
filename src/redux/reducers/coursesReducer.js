const { SET_COURSES, CREATE_COURSE, DELETE_COURSE, UPDATE_COURSE, JOIN_COURSE, ADD_LECTURES, ADD_QUESTIONS, ADD_SECTIONS, ADD_ENROLLMENTS } = require('../actions')

const emptyState = {
    studentCourses: null,
    teacherCourses: null,
    sections: {},
    enrollments: {},
    lectures: {},
    questions: {}
}

function coursesReducer(state = emptyState, action) {
    switch (action.type) {
        case SET_COURSES: // should be called after API returns course data for a user
            return {
                ...state,
                studentCourses: action.studentCourses,
                teacherCourses: action.teacherCourses
            }
        case CREATE_COURSE: // should be called after a course has been successfully created
            return {
                ...state,
                teacherCourses: [...state.teacherCourses, action.course]
            }
        case DELETE_COURSE: // should be called after a course has been successfully deleted
            return {
                ...state,
                teacherCourses: state.teacherCourses.map((course) => {
                    if (course.id !== action.id) {
                        return course
                    }
                })
            }
        case UPDATE_COURSE:
            return {
                ...state,
                teacherCourses: state.teacherCourses.map((course) => {
                    if (course.id === action.id) {
                        return action.course
                    }
                    else {
                        return course
                    }
                })
            }
        case JOIN_COURSE:   //call when a user joins a course 
                            //join course always makes the user a student of the course
            return{
                ...state,
                studentCourses: [...state.studentCourses, action.course]
            }
        case ADD_ENROLLMENTS:
            let newEnrollments = {}
            newEnrollments[action.courseId] = action.enrollments
            return {
                ...state,
                enrollments: {
                    ...state.enrollments,
                    ...newEnrollments
                }
            }        
        case ADD_SECTIONS:
            let newSections = {}
            newSections[action.courseId] = action.sections
            return {
                ...state,
                sections: {
                    ...state.sections,
                    ...newSections
                }
            }
        case ADD_LECTURES: // should be called after API returns course data for a user
            let newLectures = {}
            newLectures[action.courseId] = action.lectures
            return {
                ...state,
                lectures: {
                    ...state.lectures,
                    ...newLectures
                }
            }
        case ADD_QUESTIONS:
            let newQuestions = {}
            newQuestions[action.courseId] = action.questions
            return {
                ...state,
                questions: {
                    ...state.questions,
                    ...newQuestions
                }
            }
        default:
            return state
    }
}

export default coursesReducer