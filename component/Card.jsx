import { Image, StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types';

function Card(props) {
	return (
	<View style={styles.card}>
		<Image style={styles.cardImage} source={{uri: 'https://picsum.photos/200'}} alt="Card image"/>
		<Text  style={styles.cardTitle}>{props.name}</Text>
		<Text  style={styles.cardText}>{props.text}</Text>
	</View>
	);
}

Card.propTypes = {
  name:  PropTypes.string,
  text:  PropTypes.string,
  image: PropTypes.string,
};

Card.defaultProps = {
  name:  'Bro Code',
  text:  'I make Youtube Video and I play Video games',
  image: 'https://picsum.photos/200',
};

const styles = StyleSheet.create({
	card: {
		width: 200,
		height: 250,
		backgroundColor: 'grey',
		borderRadius: 10,
		padding: 16,
		margin: 16,
	},
	cardImage: {
		width: '100%',
		height: 120,
		borderRadius: 10,
	},
	cardTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	cardText: {
		fontFamily: 'Arial',
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
});

export default Card;
