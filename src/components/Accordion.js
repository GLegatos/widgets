import React, { useState } from 'react';

const Accordion = () => {

    const items = [
        {
            title: 'What is React?',
            content: 'React is a fron end javascript framework'
        },
        {
            title: 'Why use React?',
            content: 'React is a favorite JS library among engineers'
        },
        {
            title: 'How do you use React?',
            content: 'You use React by creating components'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div 
                    onClick={() => onTitleClick(index)}
                    className={`title ${active}`}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
            {renderedItems}
        </div>
};

export default Accordion;