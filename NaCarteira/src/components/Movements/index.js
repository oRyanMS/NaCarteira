import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { MotiView, AnimatePresence, MotiText } from 'moti';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.date}> {data.date} </Text>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>{data.label}</Text>

          {showValue ? (
            <AnimatePresence exitBeforeEnter>
              <MotiText
                style={data.type === true ? styles.value : styles.expanses}
                from={{
                  translateX: 10,
                }}
                animate={{
                  translateX: 0,
                }}
                transition={{
                  type: 'timing',
                  duration: 300,
                }}
              >
                {data.type === true ? `R$ ${data.value}` : `R$ -${data.value}`}
              </MotiText>
            </AnimatePresence>
          ) : (
            <AnimatePresence exitBeforeEnter>
              <MotiView
                style={styles.skeleton}
                from={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  type: 'timing',
                }}
              ></MotiView>
            </AnimatePresence>
          )}
        </View>

        <TouchableOpacity
          onPress={() => setShowValue(!showValue)}
          style={styles.iconButton}
        >
          <FeatherIcon
            name={showValue ? 'eye' : 'eye-off'}
            size={24}
            color="#9b9a9c"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#afafaf',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: '#9b9a9c',
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  expanses: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#dadada',
    borderRadius: 8,
  },
  iconButton: {
    padding: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
