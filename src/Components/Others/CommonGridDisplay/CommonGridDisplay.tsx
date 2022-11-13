import './CommonGridDisplay.css';

const CommonGridDisplay = ({ children, het }: any) => {
    return (
        <div style={{ height: het }} className="commonGridDisplay">
            <div className="commonGridDisplay_content">{children}</div>
        </div>
    );
};

export default CommonGridDisplay;
