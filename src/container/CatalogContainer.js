import Catalog from "../components/Catalog";
import { makeAddToCartAction } from "../actions/actions";
import { connect } from "react-redux";

//calculer les props en fonction du state
const mapStateToProps = state => ({
  items: state.catalog
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(makeAddToCartAction(item))
});

const CatalogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);

export default CatalogContainer;
