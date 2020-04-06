import React from 'react'


const Octocats = props => {
return (

<div class = 'wrap'>
<img src = {props.image} />
<div class = 'user-info'>
 <div class = "in-line">
<p>{props.number}</p>
<h2>{props.name}</h2>
</div>
<img class ='smalle-img' src = {props.imagep} />
</div>
</div>

)
 
}


export default Octocats