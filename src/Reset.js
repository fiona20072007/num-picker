import "./styles.scss";

const Reset = ({ clickNum, setClickNum, block }) => {
    const handleReset = () => {
        Object.filter = function (obj, predicate) {
            let result = {},
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
                    result[key] = obj[key];
                }
            }
            return result;
        };

        const newObj = Object.filter(clickNum, (number) => number === block);
        setClickNum(newObj);
    };

    return (
            <button onClick={handleReset} className={"resetBtn"}>Reset</button>
    );
};
export default Reset;
