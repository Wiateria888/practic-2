import React from 'react';
import { 
  SafeAreaView, 
  View, 
  ScrollView,
  StatusBar,
  Platform,
  StyleSheet 
} from 'react-native';
import Header from './components/Header';
import UserCard from './components/UserCard';
import Skills from './components/Skills';
import SubscribeButton from './components/SubscribeButton';
import Footer from './components/Footer';

const App = () => {
  const userData = {
    name: 'Ольга Морозова',
    title: 'Профессиональный фотограф',
    bio: 'Специализируюсь на портретной фотографии в студии. Люблю запечатлевать искренние эмоции и создавать уникальные кадры, которые останутся с вами на всю жизнь. Работаю в этой сфере более 6 лет.',
    avatar: 'https://i.pravatar.cc/150?img=47'
  };

  const skills = ['Портреты', 'Пейзажи', 'Студия', 'Ретушь'];

  const handleBackPress = () => {
    if (Platform.OS === 'web') {
      alert('Навигация назад');
    } else {
      console.log('Нажата кнопка назад');
    }
  };

  const handleSubscribe = () => {
    console.log('Подписаться');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Header onBackPress={handleBackPress} />
          <UserCard user={userData} />
          <Skills skills={skills} />
          <SubscribeButton onPress={handleSubscribe} />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    maxWidth: 400,
    // Тень для iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Тень для Android
    elevation: 5,
    position: 'relative',
  },
});

export default App;