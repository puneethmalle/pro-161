AFRAME.registerComponent("bowling",{
    init:function(){
        this.throwBall()
    },
    throwBall:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="z"){
                var ball = document.createElement("a-entity")
                ball.setAttribute("geometry",{primitive:"sphere",radius:0.1})
                ball.setAttribute("gltf-model","#bowling_ball")
                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                ball.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
                var camera = cam.object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                ball.setAttribute("velocity",direction.multiplyScalar(-10))
                var scene = document.querySelector('#scene')
                scene.appendChild(ball)
            }
        })
    }
})