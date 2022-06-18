import React from 'react';
import ReactTooltip from 'react-tooltip';
import FontAwesome from './FontAwesome';

export const Popper = ({id, icon, title, children}) => {
  return (
    <React.Fragment>
        <div className="flex items-center relative cursor-pointer">
            <span data-tip data-for={id} className="rounded-full border-2 border-cyan-500 bg-white-500 text-cyan-500 hover:bg-cyan-500 hover:text-white-500 h-12 w-12 p-2 flex justify-center">
                <FontAwesome className="h-6 w-6" name={icon}/>
            </span>
            <div className="absolute top-3 ml-16 md:-ml-10 md:-top-9 md:text-center mb-36 w-32 text-xs font-medium uppercase text-cyan-500">{title}</div>
        </div>
        <ReactTooltip className="react-popper" 
          id={id} place="right" offset={{bottom: -10}} effect="solid"
          delayHide={200}         
          backgroundColor="transparent"
          textColor="#38A691"
        >
          <div className="text-base bg-white-500 shadow p-4 rounded-lg border-2 border-cyan-500 max-w-lg">
          {children}
          </div>
        </ReactTooltip>
    </React.Fragment>
  );
};