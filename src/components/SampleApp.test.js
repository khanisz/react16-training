import React from "react";
import ReactDOM from "react-dom";
import SampleApp from "./SampleApp";

import { shallow, mount, render } from "enzyme";

describe("renders without crashing", () => {
  it("when default approach used", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SampleApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("when enzyme", () => {
    it("shallow used", () => {
      shallow(<SampleApp />);
    });

    it("mount used", () => {
      mount(<SampleApp />);
    });
  });

  describe("when enzyme snapshots taken with", () => {
    it("shallow", () => {
      expect(shallow(<SampleApp />)).toMatchSnapshot();
    });

    it("mount", () => {
      expect(mount(<SampleApp />)).toMatchSnapshot();
    });

    it("render", () => {
      expect(render(<SampleApp />)).toMatchSnapshot();
    });
  });
});

describe("renders welcome message", () => {
  const wrapper = shallow(<SampleApp />);
  const welcome = <h1 className="App-title">Welcome to React</h1>;

  it('checked with plain enzyme', () => {
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('checked with jest-enzyme', () => {
    expect(wrapper).toContainReact(welcome);
  });
});
