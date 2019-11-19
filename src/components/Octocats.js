import React from 'react'


const Octocats = props => {
return (

<div class = 'wrap'>
<img src = {props.image} />
<div>
<p>{props.number}</p>
<h2>{props.name}</h2>
<img class ='smalle' src = {props.imagep} />
</div>
</div>

)
 
}


export default Octocats