import { Component } from "react";
import "./App.css";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos2: [
      { name: "brusquetas", price: 600, img: "/productos/brusquetas.jpg" },
      { name: "empanada", price: 1500, img: "/productos/empanada.jpg" },
      { name: "ensalada", price: 750, img: "/productos/ensalada.jpg" },
    ],
    productos: [
      { name: "hamburguesa", price: 1000, img: "/productos/hamburguesa.jpg" },
      { name: "milanesa", price: 1200, img: "/productos/milanesa.jpg" },
      { name: "pizza", price: 800, img: "/productos/pizza.jpg" },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarro = () => {
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
        <Layout>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos2}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
