import React from "react";
import { render } from "@testing-library/react";
import { Launch } from "./Launch.jsx";

describe('Launches', () => {

    const testData = {
        id: "1",
        name: "Space X",
        details: "Successul launch",
        date_unix: 1583556631,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/STS120LaunchHiRes-edit1.jpg/1200px-STS120LaunchHiRes-edit1.jpg'
    }

    it("check a launch component", () => {
        const component = render(<Launch 
            key={testData.id} 
            name={testData.name} 
            details={testData.details}
            date_unix={testData.date_unix}
            imgUrl={testData.imgUrl}
        />);
    
        expect(component).toMatchSnapshot();
    });
})
