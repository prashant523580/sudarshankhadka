import { Button } from "@mui/material";
import React from "react";
import styles from "../../../styles/Home.module.scss";
interface propsTypes {
    icon? : React.ReactNode,
    title : string,
    desc: string,
    className?: string,
    dataAos? : string,
    action? : () => void,
    style? : object,
    duration?: string
}
export default class Card extends React.Component<propsTypes>{
    render(): React.ReactNode {
        return(
            <div className={`${styles.card} ${this.props.className && this.props.className}`}
            style={this.props.style}
             data-aos={this.props.dataAos}
             data-aos-easing="linear"   
             data-aos-duration={`${this.props.duration ? this.props.duration : "1000" }`} 
            >
            
                {this.props.icon}
               <h2 className="text-gray-300">{this.props.title}</h2>
               <p className="text-gray-300">{this.props.desc}</p>
               {
                this.props.action &&
                <Button onClick={this.props.action}>READ MORE</Button>
               }
           
        </div>
        )
    }
}