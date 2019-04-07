import casts from './podcasts';
import React, {Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './Accordion.css';

class Main extends Component{
    constructor(props){
        super(props);

        this.state={
            podcastList :[...casts]
            };
        }
    
//            {this.state.podcastList.map(number => <p><a href={number.download}>{number.nameDate}</a></p>)}


    render(){
        return(
            <div>
            <Accordion>

            {this.state.podcastList.map(number => 
            
            
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {number.nameDate}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       {number.description}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            )}
            </Accordion>

            </div>

        )
    }
}

export default Main;