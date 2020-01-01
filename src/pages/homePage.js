import React, { useState } from "react";
import { Progress, Button, Divider } from "antd";

const ButtonGroup = Button.Group;

function HomePage() {
    const [percent, setPercent] = useState(0);

    function increase() {
        let newPercent = percent + 10;
        if (newPercent > 100) {
            newPercent = 100;
        }
        setPercent(newPercent);
    };

    function decline() {
        let newPercent = percent - 10;
        if (newPercent < 0) {
            newPercent = 0;
        }
        setPercent(newPercent);
    };

    return (
        <div>
            <Progress type="circle" percent={percent} />
            <Divider type="vertical"/>
            <ButtonGroup>
                <Button onClick={decline} icon="minus" />
                <Button onClick={increase} icon="plus" />
            </ButtonGroup>
        </div>
    );
}

export default HomePage;