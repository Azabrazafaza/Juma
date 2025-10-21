import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';

const HomeScreen = ({ userProfile }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          {userProfile ? `Добро пожаловать, ${userProfile.name}!` : 'Добро пожаловать в Juma'}
        </Text>
        <Text style={styles.subtitle}>Ваш личный помощник в духовной жизни</Text>
        
        <View style={styles.featureContainer}>
          <View style={styles.featureCard}>
            <View style={styles.featureImageContainer}>
              <Image 
                source={require('../../assets/onboarding-image1.png')} 
                style={styles.featureImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.featureTitle}>Добро пожаловать в Juma!</Text>
            <Text style={styles.featureDescription}>
              Ваш личный помощник в духовной жизни. Узнавайте время намаза, расписание уроков в мечетях Алматы и читайте Коран в одном месте.
            </Text>
            <TouchableOpacity style={styles.featureButton}>
              <Text style={styles.featureButtonText}>Далее</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureImageContainer}>
              <Image 
                source={require('../../assets/onboarding-compass.png')} 
                style={styles.featureImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.featureTitle}>Точное время намаза и Кибла</Text>
            <Text style={styles.featureDescription}>
              Чтобы мы могли показывать актуальное расписание молитв для вашего района и верное направление на Киблу, нам потребуется доступ к вашей геолокации.
            </Text>
            <TouchableOpacity style={styles.featureButton}>
              <Text style={styles.featureButtonText}>Разрешить доступ</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureImageContainer}>
              <Image 
                source={require('../../assets/onboarding-bell.png')} 
                style={styles.featureImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.featureTitle}>Будьте всегда в курсе</Text>
            <Text style={styles.featureDescription}>
              Мы будем присылать напоминания о времени намаза и уведомлять о начале полезных уроков. Вы всегда сможете настроить их в своем профиле.
            </Text>
            <TouchableOpacity style={styles.featureButton}>
              <Text style={styles.featureButtonText}>Включить уведомления</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.counterContainer}>
          <Text style={styles.counterLabel}>Счетчик</Text>
          <Text style={styles.counterValue}>{count}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={incrementCount}>
            <Text style={styles.buttonText}>Увеличить</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetCount}>
            <Text style={[styles.buttonText, styles.resetButtonText]}>Сбросить</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Создано с помощью Expo & React Native</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 40,
    textAlign: 'center',
  },
  featureContainer: {
    width: '100%',
    marginBottom: 40,
    gap: 32,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    height: 296,
    width: 375,
    alignSelf: 'center',
    gap: 16,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  featureImageContainer: {
    width: 360,
    height: 360,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureImage: {
    width: '100%',
    height: '100%',
  },
  featureButton: {
    backgroundColor: '#1677ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#1677ff',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  featureButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  counterContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    minWidth: 150,
  },
  counterLabel: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3498db',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    shadowColor: '#e74c3c',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  resetButtonText: {
    color: '#ffffff',
  },
  footer: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
  },
});

export default HomeScreen;
