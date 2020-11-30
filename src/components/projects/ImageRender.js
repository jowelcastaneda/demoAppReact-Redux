import React, { Component, useState, useEffect, useRef } from 'react'
import * as faceapi from 'face-api.js';
import Ileyka from '../../images/review/Ileyka.jpg'
import Marina from '../../images/review/Marina.jpg'
import Stefanie from '../../images/review/Stefanie.jpg'
import Frank from '../../images/review/Frank.jpg'
import Sean from '../../images/review/Sean.jpg'
import Gabrielle from '../../images/review/Gabrielle.jpg'
import Mimi from '../../images/review/Mimi.jpg'
import Sandeep from '../../images/review/Sandeep.jpg'
import Matt from '../../images/review/Matt.jpg'
import Mike from '../../images/review/Mike.jpg'
import Jozza from '../../images/review/Jozza.jpg'
import Connie from '../../images/review/Connie.jpg'
import Alice from '../../images/review/Alice.jpg'
import Mina from '../../images/review/Mina.jpg'
import Ellen from '../../images/review/Ellen.jpg'

function ImageRender() {
    const videoHeight = 580
    const videoWidth = 640
    const [initializing, setInitializing] = useState(false)
    const videoRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + '/models'
            setInitializing(true)
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
            ]).then(handleVideoOnPlay);
        }
        loadModels();
    }, [])

    const getImage = (reviewId) => {
        if (reviewId === '/1') {
            return Ileyka
        } else if (reviewId === '/3') {
            return Marina
        } else if (reviewId === '/4') {
            return Stefanie
        } else if (reviewId === '/5') {
            return Frank
        } else if (reviewId === '/2') {
            return Sean
        } else if (reviewId === '/6') {
            return Gabrielle
        } else if (reviewId === '/7') {
            return Mimi
        } else if (reviewId === '/8') {
            return Sandeep
        } else if (reviewId === '/9') {
            return Matt
        } else if (reviewId === '/10') {
            return Mike
        } else if (reviewId === '/11') {
            return Jozza
        } else if (reviewId === '/12') {
            return Connie
        } else if (reviewId === '/13') {
            return Alice
        } else if (reviewId === '/14') {
            return Mina
        } else if (reviewId === '/15') {
            return Ellen
        } 
        return Ileyka
    }

    const handleVideoOnPlay = () => {
        setTimeout(async () => {
            if(initializing) {
                setInitializing(false)
            }
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current)
            const displaySize = {
                width: videoWidth,
                height: videoHeight
            }
            faceapi.matchDimensions(canvasRef.current, displaySize)
            const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvasRef.current.getContext("2d").clearRect(0, 0, videoWidth, videoHeight)
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
            faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections)
            console.log(detections)
        }, 100)
    }

    return (
        <div style={{ margin: '30px' }}>
            <div className="display-flex justify-content-center" style={{ display: 'flex', justifyContent: 'center'}}>
                <img ref={videoRef} src={getImage(window.location.pathname)} alt='' height={videoHeight} width={videoWidth} onAnimationStart={handleVideoOnPlay} />
                <canvas ref={canvasRef} style={{ position: 'absolute' }} />
            </div>
        </div>
    )
}

export default ImageRender;