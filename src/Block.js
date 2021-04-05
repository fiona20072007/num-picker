import Button from "./Button";
import Reset from "./Reset";

const Block = ({ clickNum, setClickNum, block }) => {
    const btnNum = 10;
    const btnArr = [];
    const handleBtnAll = () => {
        for (let i = 0; i < btnNum; i++) {
            btnArr.push(
                <Button
                    clickNum={clickNum}
                    setClickNum={setClickNum}
                    num={i}
                    block={block}
                />
            );
        }
        return btnArr;
    };
    return (
        <div>
            <span>{handleBtnAll()}</span>
            <Reset clickNum={clickNum} setClickNum={setClickNum} block={block} />
        </div>
    );
};
export default Block;
