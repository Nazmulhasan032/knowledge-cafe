import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <div className='answers'>
            <h3>Question-1: Props Vs State?</h3>
            <p><b>Ans:</b> Props is a thing that is use for pass data from parents component to it's child component.
            <br />
            props data are used to read only, because props can not be updated or modified. <br />
            on the other hand state is opposite to props. which means state data can be change or modified using setState method. <br />
             </p>


            <h3>Question-2: How useState works?</h3>
            <p><b>Ans:</b> useState is called hook in React. <br />
            we can add state to functional component. and it returns two value. <br /> 
            one is it's current value and another is updated value in functional component. <br />
            such as i have set [count , setCount] in a state and call a function. <br />
            In this function i am doing some mathematical term such as i am increment value. <br />
            this increment value will pass in setCount and then it will set it's value to count.           
            </p>


            <h3>Question-3: Purpose of useEffect other than fetching data.</h3>
            <p><b>Ans:</b> Fetching data will load directly along with page load instantly. <br />
            but if we use useState there are one extra facilities which is call dependency. <br />
            we can set dependency in useEffect. with the help of dependency we can load or change data according to dependency. 
            
            </p>

            <h3>Question-4: How Does React work?</h3>
            <p><b>Ans:</b> React is a javascript library which is used for building user interfaces. <br />
            React works by using a virtual DOM that keeps track of the current state of your application. <br />
            When a component's state changes, React updates the virtual DOM and then re-renders the entire UI. <br />
            This means that React only updates the parts of the UI that have changed, <br />
            rather than re-rendering the entire page. <br />
            React also uses a one-way data flow, which means that data flows down from parent components to child components. <br />
            This makes it easier to reason about the state of your application and helps prevent bugs.
            
            </p>
            
        </div>
    );
};

export default Answer;