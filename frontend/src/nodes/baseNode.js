// textNode.js

const BaseNode = (name,Component,styleClass) => {

  return function EnhancedComponent({id, data, ...args}){
    return (
        <div className="base border">
          <div className="base-heading">
            <span>{name}</span>
          </div>
          <div className="base-component">
            <Component id={id} data={data} {...args} />
          </div>
        </div>
    );
  }
}

export default BaseNode;
