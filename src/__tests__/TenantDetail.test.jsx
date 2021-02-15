import React from "react";
import { shallow} from "enzyme";
import TenantDetail from "./../Components/Pages/Tenant/TenantDetail";

describe("<TenantDetail/>", () => {
  const props = {
    match: { params: { id: "1" } },
  };

  test("Se debe cargar el componente", () => {
    const wrapper = shallow(<TenantDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
