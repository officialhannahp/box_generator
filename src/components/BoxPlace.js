import React from 'react'
import { BoxSetUp, Colorful } from './BoxStyle';

const BoxPlace = ({box}) => {
    return (
        <BoxSetUp>
            {box.boxes.map(function (box, i){
                let styles = {
                    backgroundColor: box[0],
                }
                return <Colorful key={i} style={styles}/>
            })}
        </BoxSetUp>
    )
}

export default BoxPlace;

