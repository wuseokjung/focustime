import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.nothing}>We haven't focused on anything yet</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on: </Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
      <TouchableOpacity>
        <Text style={styles.clearText}>Clear list</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold'
  },
  nothing: {
    color: colors.white,
    textAlign: 'center'
  },
  clearText: {
    color: 'red',
  }
});
