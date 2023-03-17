import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { createCourse } from "../redux/actions";
import apiUtil from '../utils/apiUtil'

function AddCourse(props){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [published, setPublished] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function postCourse(newCoursePayload){
        //make a POST course api call
        let response = {}

        try{
            response = await apiUtil("post", "/courses", newCoursePayload)
            console.log(response)
        }catch(e){
            if (e instanceof DOMException) {
                console.log("== HTTP request cancelled")
            } else {
                console.log(e)
            }
        }

        //update the redux
        if(response.status === 201){
            console.log(response.data)
            dispatch(createCourse(response.data.course))
            console.log(`/${response.data.course.id}`)
            navigate(`/${response.data.course.id}`)
        }
        else{
            console.log("Something went wrong here")
        }
    }

    function addCourseSubmit(e){
        event.preventDefault()

        const newCourse = {
            name: name,
            description: description,
            published: published
        }

        postCourse(newCourse)
    }

    return (
        <>
        <Form onSubmit={(e) => { addCourseSubmit(e) }}>
            <Form.Group className="inputNameContainer" controlId="name">
                <Form.Label>Class Name:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Class Name" 
                    onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="inputDescriptionContainer" controlId="description">
                <Form.Label>Class Description:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Class Description"
                    onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="inputPublishedContainer" controlId="published">
                <Form.Check 
                    type="switch" 
                    id="publishSwitch" 
                    label="Publish Class" 
                    size="large" 
                    onChange={(e) => setPublished(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Course
            </Button>
        </Form>
        </>
    )
}

export default AddCourse;