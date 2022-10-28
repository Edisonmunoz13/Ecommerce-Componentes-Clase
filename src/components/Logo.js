import { Component } from "react";

const styles = {
  logo: {
    fontWeight: "700",
    fontSize: "2rem",
    color: " #282c34",
  },
};

class Logo extends Component {
  render() {
    return <div style={styles.logo}>FoodShop</div>;
  }
}

export default Logo;
