import { shallow } from "enzyme";
import TenantCard from "../Components/TenantCard";

describe("<TenantCard></TenantCard>", () => {
  const props = {
    id: "81",
    data: {
      id: 81,
      name: "Pablo",
      last_name: "Escobar",
      birth_date: "1960-02-10T00:00:00.000Z",
      dni: "78945623",
      vehicle_registration_number: "AB308FC",
      phone: "2246 44 4365",
      email: "ejmplo@ejemplo.com",
      address: "Calle ejemplo",
    },
    history: { push: jest.fn() },
  };

  test("Se debe cargar el componente", () => {
    const wrapper = shallow(<TenantCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Se debe cargar los input con los valores del response", async () => {
    const wrapper = shallow(<TenantCard {...props} />);
    const nameValue = wrapper.find("span").at(1).text().trim();
    expect(nameValue).toBe("Pablo Escobar");
  });

  test("Se debe llamar a history.push al hacer click al editar", () => {
    const wrapper = shallow(<TenantCard {...props} />);
    const btnEditar = wrapper.find("Button").simulate("click");
    expect(props.history.push).toHaveBeenCalledTimes(1);
    expect(props.history.push).toHaveBeenCalledWith('/edit-tenant/81');

    
  });
});
