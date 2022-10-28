import { Component } from "react";

const styles = {
  detallescarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.1)",
    borderRadius: "5px",
    width: "250px",
    right: 50,
  },
  ul: {
    margin: "0",
    padding: "0",
  },
  producto: {
    listStylesType: "none",
    display: "flex",
    justifyContent: "space-between",
    alingItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div style={styles.detallescarro}>
        <ul style={styles.ul}>
          {carro.map((x) => (
            <li style={styles.producto} key={x.name}>
              <img alt={x.name} src={x.img} width="50" height="30" />
              {x.name}
              <span> {x.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
