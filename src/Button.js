import { useEffect, useState } from "react";
import "./styles.scss";

const Button = ({ clickNum, setClickNum, num, block }) => {
    const [btnOn, setBtnOn] = useState(false);
    useEffect(() => {
        return (clickNum[num] && btnOn === false) || !clickNum[num]
            ? setBtnOn(false)
            : null;
    }, [clickNum]);
    const handleClickNum = () => {
        let obj = clickNum;
        if (clickNum[num]) {
            setBtnOn(false)
            if(btnOn) {
                delete obj[num]
            }
        } else {
            obj[num] = block;
            btnOn ? setBtnOn(false) : setBtnOn(true);
        }
        setClickNum(obj);
    };

    return (
        <button className={btnOn ? "btnOn" : "btn"} onClick={handleClickNum}>
            {num}
        </button>
    );
};
export default Button;

// return clickNum[num] ? handleRemoveNum() : handleAddNum();

// const handleAddNum = () => {
//   let obj = clickNum;
//   obj[num] = block;
//   setClickNum(obj);
//   setBtnOn(true);
// };
// const handleRemoveNum = () => {
//   let obj = clickNum;
//   const removeBtn = () => {
//     delete obj[num];
//     setClickNum(obj);
//     setBtnOn(false);
//   };
//   return btnOn === true ? removeBtn() : null;
// };
